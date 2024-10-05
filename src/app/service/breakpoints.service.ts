import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BreakpointsScreen } from '../../types/breakpoint-screens.type';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  private currentScreenSize!: BreakpointsScreen;

  constructor(private breakpointObserver: BreakpointObserver) {}

  public get screenSize(): BreakpointsScreen {
    this.observeBreakpoints();

    return this.currentScreenSize;
  }

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
        this.currentScreenSize = size as BreakpointsScreen;
      }
    });
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
          this.screenSize = result.breakpoints;
        }
      });
  }
}
