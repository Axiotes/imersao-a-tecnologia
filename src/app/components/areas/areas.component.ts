import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.scss'
})
export class AreasComponent {
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public description!: string;
}
