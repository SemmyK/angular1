import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-details',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './housing-details.component.html',
  styleUrl: './housing-details.component.css',
})
export class HousingDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const housingLocationId = +params['id'];
      this.housingLocation =
        this.housingService.getHousingLocationById(housingLocationId);
    });
  }

  submitApplication() {
    const result = this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );

    if (result === 'Submitted') {
      this.applyForm.reset();
    }
  }
}
