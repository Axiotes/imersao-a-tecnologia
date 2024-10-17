import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Home, LibraryBig } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LucideAngularModule, NgFor],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public icons: { icon: LucideIconData }[] = [
    { icon: Home },
    { icon: LibraryBig },
  ];
}
