import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.scss'
})
export class AreasComponent {
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public description!: string;
  @Input({ required: true }) public icon!: LucideIconData;
}
