import { Component, Input } from '@angular/core';
import { ChevronRight, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-card-technologies',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './card-technologies.component.html',
  styleUrl: './card-technologies.component.scss'
})
export class CardTechnologiesComponent {
  @Input({ required: true }) public label!: string;
  public chevronRight: LucideIconData = ChevronRight;
}
