import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { LucideAngularModule, Home, LibraryBig, PenTool, BrainCircuit, Computer, ChartBar, Gamepad2, DatabaseZap } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LucideAngularModule, NgFor, RouterLink, NgClass, NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public currentRoute!: string;
  public slug!: string;
  public icons: { icon: LucideIconData; route: string }[] = [
    { icon: Home, route: '/' },
    { icon: LibraryBig, route: '/trail/library' },
  ];
  private areasIcons: { [key: string]: LucideIconData } = {
    'design': PenTool,
    'ia': BrainCircuit,
    'dev-web': Computer,
    'gestao': ChartBar,
    'games': Gamepad2,
    'data-science': DatabaseZap,
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
        this.slug = this.currentRoute.split('/')[2];
      }
    });
  }

  public getIcon(): LucideIconData {
    return this.areasIcons[this.slug];
  }
}
