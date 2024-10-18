import { Component, Input } from '@angular/core';
import { AllAreas } from '../../../types/all-areas.type';

@Component({
  selector: 'app-all-infos',
  templateUrl: './all-infos.component.html',
  styleUrl: './all-infos.component.scss',
})
export class AllInfosComponent {
  @Input({ required: true }) area!: AllAreas;
}
