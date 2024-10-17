import { Component } from '@angular/core';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-card-areas',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './card-areas.component.html',
  styleUrl: './card-areas.component.scss',
})
export class CardAreasComponent {
  public arrow: LucideIconData = ArrowRight;
}
