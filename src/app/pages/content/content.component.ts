import { Component } from '@angular/core';
import { TypeInfos } from '../../../types/type-infos.type';
import { AllAreas } from '../../../types/all-areas.type';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  public typeInfo: TypeInfos = 'all';
  public area!: AllAreas;

  public receiveArea(area: AllAreas): void {
    this.area = area;
  }
}
