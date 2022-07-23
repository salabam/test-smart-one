import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { Cat } from '../../models/cat';
import { PetsService } from '../../services/pets-service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {
  
  public form: FormGroup;

  public playfulnessSelectOption: { id: number, label: string }[] = [
    { id: 0, label: '0' },
    { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' }
  ];

  public groomingSelectOption: { id: number, label: string }[] = [
    { id: 0, label: '0' },
    { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' }
  ];

  public cats$: Observable<Cat[]>

  constructor(private petsService: PetsService) { }

  public ngOnInit(): void {
    this.buildForm();
    this.cats$ = this.getDogs();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      playfulness: new FormControl(),
      grooming: new FormControl()
    }, { updateOn: 'submit' });
  }

  public onSubmit(): void {
    this.cats$ = this.getDogs();
  }

  private getDogs(): Observable<Cat[]> {
    return this.petsService.getCats(this.form.getRawValue()).pipe(take(1));
  }

}
