import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { BreakpointsService } from '../../service/breakpoints.service';
import { BreakpointsScreen } from '../../../types/breakpoint-screens.type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
