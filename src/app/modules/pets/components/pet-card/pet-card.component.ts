import { Component, Input } from '@angular/core';
import { Base } from '../../models/base';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {
  @Input() public gridItem: Base;
}