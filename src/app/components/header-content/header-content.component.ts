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
export class HeaderContentComponent implements OnInit, OnChanges {
  @Input({ required: true }) infos!: Infos;
  @Output() sendArea: EventEmitter<AllAreas> = new EventEmitter<AllAreas>();

  public slug!: string;
  public allArea: AllAreas[] = AllAreasData;
  public area!: AllAreas;

  public title!: string;
  public text!: string;
  public tags: string[] = [];

  public arrowRight: LucideIconData = ArrowRightFromLine;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get('slug')!;
    });

    this.allArea
      .filter((area) => area.slug === this.slug)
      .map((area) => {
        this.area = area;
        this.title = area.title;
        this.text = area.text;
        area.infos.forEach((info) => this.tags.push(info.title));
        this.sendArea.emit(area);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['infos']) {
      this.tags = [];
      this.title = this.infos?.title;
      this.text = this.infos?.description;
      this.infos?.tags.forEach((tag) => this.tags.push(tag));
    }
  }
}
