import { Component, Input } from '@angular/core';
import { HouseCardComponent } from '../house-card/house-card.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home-list',
  standalone: true,
  imports: [HouseCardComponent],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
})
export class HomeListComponent {
  @Input() housingLocationArray!: HousingLocation[];
}
