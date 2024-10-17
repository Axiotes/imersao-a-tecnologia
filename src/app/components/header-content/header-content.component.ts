import { Component } from '@angular/core';
import {
  ArrowRightFromLine,
  Computer,
  LucideAngularModule,
} from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { InfosComponent } from "../infos/infos.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [LucideAngularModule, InfosComponent, RouterLink],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss',
})
export class HeaderContentComponent {
  public arrowRight: LucideIconData = ArrowRightFromLine;
  public computer: LucideIconData = Computer;
}
