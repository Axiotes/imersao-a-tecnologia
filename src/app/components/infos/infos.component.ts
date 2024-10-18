import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss'
})
export class InfosComponent {
  @Input({ required: true }) label!: string;
}
