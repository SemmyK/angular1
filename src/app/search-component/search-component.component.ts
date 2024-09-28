import { Component, inject, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css',
})
export class SearchComponentComponent {
  filteredHousingLocationArray!: HousingLocation[];
  housingService: HousingService = inject(HousingService);

  constructor() {}

  filterHousingOnClick(text: string) {
    this.housingService.filterHousingList(text);
  }

  filterLocationOnInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value;
    this.housingService.filterHousingList(filterValue);
  }
}
