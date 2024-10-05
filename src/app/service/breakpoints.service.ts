import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  private currentScreenSize!: string;

  constructor(private breakpointObserver: BreakpointObserver) {}

  private set screenSize(breakpoints: { [key: string]: boolean }) {
    const screenSize = [
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ];

    screenSize.forEach((size) => {
      if (breakpoints[size]) {
        this.currentScreenSize = size;
      }
    });
  }

  public get screenSize(): string {
    this.observeBreakpoints();

    return this.currentScreenSize;
  }

  private observeBreakpoints(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          console.log(result.breakpoints);
          this.screenSize = result.breakpoints;
          console.log(this.currentScreenSize);
        }
      });
  }
}
