import { Component, Input, OnInit } from '@angular/core';
import { AllDetails } from '../../../types/all-details.type';
import { allDetails } from '../../../data/all-details';
import { InfoDetails } from '../../../types/info-details.type';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  @Input() public slug!: string;
  public allDetails: AllDetails[] = allDetails;
  public infoDetails!: InfoDetails[];

  ngOnInit(): void {
    this.allDetails
      .filter((detail) => detail.slug === this.slug)
      .map((detail) => (this.infoDetails = detail.infoDetails));
  }
}
