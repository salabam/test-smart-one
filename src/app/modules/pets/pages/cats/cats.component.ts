import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';
import { PetsGlobals } from '../../globals';
import { Cat } from '../../models/cat';
import { CatsFilter, Control } from '../../models/filter';
import { PetsService } from '../../services/pets-service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {

  public controls: Control[] = [];
  public cats$: Observable<Cat[]>

  constructor(private petsService: PetsService) {
    this.controls = [
      { label: 'Name', controlName: 'name', type: 'input' },
      {
        label: 'Grooming',
        controlName: 'grooming',
        type: 'select',
        selectOption: [...Array(6)].map((_v, i) => ({ id: i, label: PetsGlobals.Grooming[i] }))
      },
      {
        label: 'Playfulness',
        controlName: 'playfulness',
        type: 'select',
        selectOption: [...Array(6)].map((_v, i) => ({ id: i, label: PetsGlobals.Playfulness[i] }))
      }
    ];
  }
  
  public onFormApply(filter: CatsFilter): void {
    this.cats$ = this.getCats(filter);
  }
  
  private getCats(filter: CatsFilter): Observable<Cat[]> {
    return this.petsService.getCats(filter).pipe(take(1));
  }

}
