import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
  
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})


export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: Housinglocation;

  ngOnInit() {
    console.log('Received Housing Location:', this.housingLocation);
  }
}



export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
