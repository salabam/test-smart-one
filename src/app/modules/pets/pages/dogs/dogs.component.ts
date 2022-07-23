import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { Dog } from '../../models/dog';
import { PetsService } from '../../services/pets-service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  public form: FormGroup;

  public energySelectOption: { id: number, label: string }[] = [
    { id: 0, label: '0' },
    { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' }
  ];

  public barkingSelectOption: { id: number, label: string }[] = [
    { id: 0, label: '0' },
    { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' }
  ];

  public dogs$: Observable<Dog[]>

  constructor(private petsService: PetsService) { }

  public ngOnInit(): void {
    this.buildForm();
    this.dogs$ = this.getDogs();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      energy: new FormControl(),
      barking: new FormControl()
    }, { updateOn: 'submit' });
  }

  public onSubmit(): void {
    this.dogs$ = this.getDogs();
  }

  private getDogs(): Observable<Dog[]> {
    return this.petsService.getDogs(this.form.getRawValue()).pipe(take(1));
  }

}
