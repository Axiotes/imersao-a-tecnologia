import { Component, OnInit } from '@angular/core';
import { AllAreas } from '../../../types/all-areas.type';
import { Infos } from '../../../types/infos.type';
import { TypeInfos } from '../../../types/type-infos.type';
import { ActivatedRoute } from '@angular/router';
import { AllAreasData } from '../../../data/all-areas';
import { LucideIconData } from 'lucide-angular/icons/types';
import { AllDetails } from '../../../types/all-details.type';
import { allDetails } from '../../../data/all-details';
import { InfoDetails } from '../../../types/info-details.type';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {
  public allArea: AllAreas[] = AllAreasData;
  public allDetails: AllDetails[] = allDetails;
  public infoDetails!: InfoDetails[];
  public slug!: string;
  public typeInfo: TypeInfos = 'all';
  public area!: AllAreas;
  public infos!: Infos;

  public title!: string;
  public icon!: LucideIconData;
  public text!: string;
  public tags: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get('slug')!;
    });

    this.allArea
      .filter((area) => area.slug === this.slug)
      .map((area) => {
        this.area = area;
      });

    this.route.queryParams.subscribe((params) => {
      this.typeInfo = params['typeInfos'];

      this.title = this.area.title;
      this.icon = this.area.icon;
      this.text = this.area.text;

      if (this.typeInfo === 'all') {
        this.area.infos.forEach((info) => this.tags.push(info.title));

        return;
      }

      this.infos = this.area.infos[0];
      this.tags = this.infos.tags;
    });
  }

  public recieveInfo(info: Infos): void {
    this.infos = info;
    this.title = info.title;
    this.icon = this.area.icon;
    this.text = info.description;
    this.tags = info.tags;
    this.typeInfo = 'details';
  }
}
