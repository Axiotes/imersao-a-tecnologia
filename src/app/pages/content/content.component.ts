import { Component } from '@angular/core';
import { AllAreas } from '../../../types/all-areas.type';
import { Infos } from '../../../types/infos.type';
import { TypeInfos } from '../../../types/type-infos.type';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  public typeInfo: TypeInfos = 'all';
  public area!: AllAreas;
  public infos!: Infos;

  public receiveArea(area: AllAreas): void {
    this.area = area;
    this.typeInfo = 'all';
  }

  public receiveInfos(infos: Infos): void {
    this.infos = infos;
    this.typeInfo = 'details';
  }
}
