import { Component, Input } from '@angular/core';
import { ButtonClass } from '../../../types/button-class.type';
import { NgClass, NgStyle } from '@angular/common';
import { BreakpointsService } from '../../service/breakpoints.service';
import { BreakpointsScreen } from '../../../types/breakpoint-screens.type';
import { Size } from '../../../types/size.type';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) public label!: string;
  @Input({ required: true }) public class!: ButtonClass;
  @Input({ required: true }) public minWidth!: number;
  @Input({ required: true }) public minHeight!: number;
  @Input({ required: true }) public minFontSize!: number;
  public fontSize!: string;
  public width!: string;
  public height!: string;

  constructor(private breakpointsService: BreakpointsService) {}

  ngOnInit(): void {
    const screenSize = this.breakpointsService.screenSize;

    const buttonSize: { [key in BreakpointsScreen]: () => void } = {
      '(max-width: 599.98px)': () => {
        this.width = `${this.minWidth}px`;
        this.height = `${this.minHeight}px`;
        this.fontSize = `${this.minFontSize}px`;
      },
      '(min-width: 600px) and (max-width: 959.98px)': () => {
        const width =  this.minWidth + this.minWidth * 0.25;
        const height = this.minHeight + this.minHeight * 0.25;
        const fontSize = this.minFontSize + this.minFontSize * 0.25;
        
        this.width = `${width}px`;
        this.height = `${height}px`;
        this.fontSize = `${fontSize}px`;
      },
      '(min-width: 960px) and (max-width: 1279.98px)': () => {
        const width =  this.minWidth + this.minWidth * 0.50;
        const height = this.minHeight + this.minHeight * 0.50;
        const fontSize = this.minFontSize + this.minFontSize * 0.50;
        
        this.width = `${width}px`;
        this.height = `${height}px`;
        this.fontSize = `${fontSize}px`;
      },
      '(min-width: 1280px) and (max-width: 1919.98px)': () => {
        const width =  this.minWidth + this.minWidth * 0.75;
        const height = this.minHeight + this.minHeight * 0.75;
        const fontSize = this.minFontSize + this.minFontSize * 0.75;
        
        this.width = `${width}px`;
        this.height = `${height}px`;
        this.fontSize = `${fontSize}px`;
      },
      '(min-width: 1920px)': () => {
        const width =  this.minWidth + this.minWidth * 1;
        const height = this.minHeight + this.minHeight * 1;
        const fontSize = this.minFontSize + this.minFontSize * 1;
        
        this.width = `${width}px`;
        this.height = `${height}px`;
        this.fontSize = `${fontSize}px`;
      },
    };

    const sizeFunction = buttonSize[screenSize];
    if (sizeFunction) {
      sizeFunction();
    }
  }
}
