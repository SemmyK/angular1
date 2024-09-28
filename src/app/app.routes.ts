import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HousingDetailsComponent } from './housing-details/housing-details.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'Home Page' },
  {
    path: 'details/:id',
    component: HousingDetailsComponent,
    title: 'Details Page',
  },
];
