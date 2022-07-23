import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pets-grid',
  templateUrl: './pets-grid.component.html',
  styleUrls: ['./pets-grid.component.scss']
})
export class PetsGridComponent {

  @Input() public gridItems: any[];

}
