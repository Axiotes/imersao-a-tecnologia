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
  private touchMoved: boolean = false;
  private startX: number = 0;
  private startY: number = 0;

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
    const distance = 380;
    const position = index - this.activeArea;
    const strPosition = position.toString();

    const positions: { [key: string]: number } = {
      '-4': distance * -1,
      '-3': distance * -2,
      '-2': distance * 2,
      '-1': distance,
      '0': 0,
      '1': distance * -1,
      '2': distance * -2,
      '3': distance * 2,
      '4': distance,
    };

    return positions[strPosition];
  }

  public getClass(index: number): string {
    const position = index - this.activeArea;
    const strPosition = position.toString();

    const positions: { [key: string]: string } = {
      '-4': 'side-areas',
      '-3': 'last-areas',
      '-2': 'last-areas',
      '-1': 'side-areas',
      '0': 'center-area',
      '1': 'side-areas',
      '2': 'last-areas',
      '3': 'last-areas',
      '4': 'side-areas',
    };

    return positions[strPosition];
  }

  public selectActiveArea(index: number): void {
    this.activeArea = index;
  }

  public touchStart(event: TouchEvent): void {
    this.touchMoved = false;
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  }

  public touchMove(event: TouchEvent): void {
    if (!this.touchMoved) {
      this.touchMoved = true;

      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;
      const deltaX = currentX - this.startX;
      const deltaY = currentY - this.startY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          // Direita
          this.previousArea();
        } else {
          // Esquerda
          this.nextArea();
        }
      }
    }
  }
}
