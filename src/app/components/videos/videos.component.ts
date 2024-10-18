import { Component, Input } from '@angular/core';
import { LucideAngularModule, TvMinimalPlay } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  @Input() public title!: string;
  @Input() public link!: string;
  public tv: LucideIconData = TvMinimalPlay;
}
