import { Component, ElementRef, ViewChild } from '@angular/core';
import { Areas } from '../../../types/area-list.type';
import { AreasListData } from '../../../data/areas-list';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { AreasComponent } from '../areas/areas.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, AreasComponent, NgClass, NgStyle],
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

  public getDistance(index: number): number {   
    if (index === 0) {
      const distance = 380;
      const positions = index - this.activeArea;

      if (positions === -3) {
        return distance * -4;
      }

      if (positions === -4) {
        return distance * -3;
      }

      if (positions === 0) {
        return distance * -2;
      }

      if (positions === -1) {
        return distance * -1;
      }

      return 0;
    }

    if (index === 1) {
      const distance = 380;
      const positions = index - this.activeArea;

      if (positions === -2) {
        return distance;
      }

      if (positions === -3) {
        return distance * -3;
      }

      if (positions === 1) {
        return distance * -2;
      }

      if (positions === 0) {
        return distance * -1;
      }

      return 0;
    }

    if (index === 2) {
      const distance = 380;
      const positions = index - this.activeArea;

      if (positions === -1) {
        return distance;
      }

      if (positions === -2) {
        return distance * 2;
      }

      if (positions === 2) {
        return distance * -2;
      }

      if (positions === 1) {
        return distance * -1;
      }

      return 0;
    }

    if (index === 3) {
      const distance = 380;
      const positions = index - this.activeArea;

      if (positions === 0) {
        return distance;
      }

      if (positions === -1) {
        return distance * 2;
      }

      if (positions === 3) {
        return distance * 3;
      }

      if (positions === 2) {
        return distance * -1;
      }

      return 0;
    }

    if (index === 4) {
      const distance = 380;
      const positions = index - this.activeArea;

      if (positions === 1) {
        return distance;
      }

      if (positions === 0) {
        return distance * 2;
      }

      if (positions === 4) {
        return distance * 3;
      }

      if (positions === 3) {
        return distance * 4;
      }

      return 0;
    }

    return 0;
  }
}
