import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BookOpen, ChevronUp, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-step-section',
  standalone: true,
  imports: [LucideAngularModule, NgClass],
  templateUrl: './step-section.component.html',
  styleUrl: './step-section.component.scss',
})
export class StepSectionComponent {
  public book: LucideIconData = BookOpen;
  public chevronUp: LucideIconData = ChevronUp;
  public isExpanded = false;

  public toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
