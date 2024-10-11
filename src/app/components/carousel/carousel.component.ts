import { Component, ElementRef, ViewChild } from '@angular/core';
import { Areas } from '../../../types/area-list.type';
import { AreasListData } from '../../../data/areas-list';
import { CommonModule, NgClass } from '@angular/common';
import { AreasComponent } from '../areas/areas.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, AreasComponent, NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  public areasList: Areas[] = AreasListData;
  public activeArea: number = 2;

  public nextArea(): void {
    if (this.activeArea < this.areasList.length - 1) {
      this.activeArea++;

      return;
    }

    this.activeArea = 0;
  }

  public previousArea(): void {
    if (this.activeArea > 0) {
      this.activeArea--;

      return;
    }

    this.activeArea = this.areasList.length - 1;
  }
}
