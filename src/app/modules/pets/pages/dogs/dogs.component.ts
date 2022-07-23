import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';
import { PetsGlobals } from '../../globals';
import { Dog } from '../../models/dog';
import { Control, DogsFilter } from '../../models/filter';
import { PetsService } from '../../services/pets-service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {

  public controls: Control[] = [];
  public dogs$: Observable<Dog[]>

  constructor(private petsService: PetsService) {
    this.controls = [
      { label: 'Name', controlName: 'name', type: 'input' },
      {
        label: 'Energy',
        controlName: 'energy',
        type: 'select',
        selectOption: [...Array(6)].map((_v, i) => ({ id: i, label: PetsGlobals.Energy[i] }))
      },
      {
        label: 'Barking',
        controlName: 'barking',
        type: 'select',
        selectOption: [...Array(6)].map((_v, i) => ({ id: i, label: PetsGlobals.Barking[i] }))
      }
    ];
  }
  
  public onFormApply(filter: DogsFilter): void {
    this.dogs$ = this.getDogs(filter);
  }

  private getDogs(filter: DogsFilter): Observable<Dog[]> {
    return this.petsService.getDogs(filter).pipe(take(1));
  }

}
