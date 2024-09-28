import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './house-card.component.html',
  styleUrl: './house-card.component.css',
})
export class HouseCardComponent {
  @Input()
  housingLocation!: HousingLocation;
}
