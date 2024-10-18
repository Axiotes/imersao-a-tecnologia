import { Component } from '@angular/core';
import { AllAreasData } from '../../../data/all-areas';
import { AllAreas } from '../../../types/all-areas.type';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent {
  public AreasList: AllAreas[] = AllAreasData;
}
