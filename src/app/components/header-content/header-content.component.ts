import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
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

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [LucideAngularModule, InfosComponent, RouterLink, NgFor],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss',
})
export class HeaderContentComponent implements OnInit {
  @Output() sendArea: EventEmitter<AllAreas> = new EventEmitter<AllAreas>();
  public arrowRight: LucideIconData = ArrowRightFromLine;
  public slug!: string;
  public allArea: AllAreas[] = AllAreasData;
  public area!: AllAreas;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get('slug')!;
    });

    this.allArea
      .filter((area) => area.slug === this.slug)
      .map((area) => {
        this.area = area;
        this.sendArea.emit(area);
      });
  }
}
