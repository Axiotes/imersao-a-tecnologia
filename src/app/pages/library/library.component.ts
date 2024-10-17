import { Component } from '@angular/core';
import { Areas } from '../../../types/area-list.type';
import { AllAreasData } from '../../../data/all-areas';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent {
  public AreasList: Areas[] = AllAreasData;
}
