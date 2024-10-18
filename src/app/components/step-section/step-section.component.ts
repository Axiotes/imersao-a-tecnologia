import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookOpen, ChevronUp, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { Videos } from '../../../types/videos.type';
import { VideosComponent } from '../videos/videos.component';

@Component({
  selector: 'app-step-section',
  standalone: true,
  imports: [LucideAngularModule, VideosComponent, CommonModule],
  templateUrl: './step-section.component.html',
  styleUrl: './step-section.component.scss',
})
export class StepSectionComponent {
  @Input() public title!: string;
  @Input() public videos!: Videos[];
  public book: LucideIconData = BookOpen;
  public chevronUp: LucideIconData = ChevronUp;
  public isExpanded = false;
  public height: number = 50;

  public toggleExpanded(): void {
    const videoHeight = 40;
    this.isExpanded = !this.isExpanded;

    if (this.isExpanded) {
      this.height = videoHeight * this.videos.length + 50;

      return;
    }

    this.height = 50;
  }
}
