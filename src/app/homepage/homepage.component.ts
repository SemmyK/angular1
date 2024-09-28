import { Component, inject } from '@angular/core';
import { SearchComponentComponent } from '../search-component/search-component.component';
import { HomeListComponent } from '../home-list/home-list.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SearchComponentComponent, HomeListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  ngOnInit() {
    this.housingService.housingLocation$.subscribe((locations) => {
      this.housingLocationList = locations;
    });
  }

  ngOnChanges() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
