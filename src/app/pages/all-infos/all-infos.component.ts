import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AllAreas } from '../../../types/all-areas.type';
import { Infos } from '../../../types/infos.type';

@Component({
  selector: 'app-all-infos',
  templateUrl: './all-infos.component.html',
  styleUrl: './all-infos.component.scss',
})
export class AllInfosComponent {
  @Input({ required: true }) area!: AllAreas;
  @Output() infos: EventEmitter<Infos> = new EventEmitter<Infos>();

  public sendInfo(info: Infos): void {
    this.infos.emit(info);
  }
}
