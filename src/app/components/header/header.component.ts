import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { BreakpointsService } from '../../service/breakpoints.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private breakpointsService: BreakpointsService) {
    console.log(this.breakpointsService.screenSize);
  }
}
