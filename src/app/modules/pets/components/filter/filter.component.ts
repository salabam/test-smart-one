import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { CatsFilter, Control, DogsFilter } from '../../models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() public controls: Control[] = [];
  @Output() public submitted: EventEmitter<CatsFilter | DogsFilter> = new EventEmitter();
  @ViewChild(MatExpansionPanel) public expansionPanel: MatExpansionPanel;

  public form: FormGroup;
  public filterApplied = 0;

  constructor() { }

  public ngOnInit(): void {
    this.buildForm();
    this.emitFormValue();
  }

  public clearFilter(event: Event): void {
    event.stopPropagation();
    this.form.reset();
    this.recalculateAppliedFilter();
  }
  
  public onSubmit(): void {
    this.recalculateAppliedFilter();
    this.emitFormValue();
    this.expansionPanel.close();
  }

  private emitFormValue(): void {
    this.submitted.emit(this.form.getRawValue());
  }

  private buildForm(): void {
    const formControls: {[key: string]: any} = {};
    this.controls.forEach(c => formControls[c.controlName] = new FormControl());
    this.form = new FormGroup(formControls, { updateOn: 'submit' });
  }

  private recalculateAppliedFilter(): void {
    this.filterApplied = Object.values(this.form.getRawValue()).filter(v => (typeof v === 'string' && v.length) || (typeof v === 'number' && v >= 0)).length;
  }

}
