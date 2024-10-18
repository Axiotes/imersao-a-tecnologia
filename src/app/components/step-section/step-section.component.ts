import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookOpen, ChevronUp, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { Videos } from '../../../types/videos.type';

@Component({
  selector: 'app-step-section',
  standalone: true,
  imports: [LucideAngularModule, NgClass],
  templateUrl: './step-section.component.html',
  styleUrl: './step-section.component.scss',
})
export class StepSectionComponent {
  @Input() public title!: string;
  @Input() public videos!: Videos[];
  public book: LucideIconData = BookOpen;
  public chevronUp: LucideIconData = ChevronUp;
  public isExpanded = false;

  public toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
