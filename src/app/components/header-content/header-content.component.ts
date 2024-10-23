import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ArrowLeftToLine,
  ArrowRightFromLine,
  Computer,
  LucideAngularModule,
} from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { InfosComponent } from '../infos/infos.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AllAreas } from '../../../types/all-areas.type';
import { AllAreasData } from '../../../data/all-areas';
import { NgFor } from '@angular/common';
import { Infos } from '../../../types/infos.type';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [LucideAngularModule, InfosComponent, RouterLink, NgFor],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss',
})
export class HeaderContentComponent {
  @Output() public back: EventEmitter<void> = new EventEmitter();
  @Input() public icon!: LucideIconData;
  @Input() public title!: string;
  @Input() public text!: string;
  @Input() public tags: string[] = [];
  public arrow: LucideIconData = ArrowLeftToLine;
}
