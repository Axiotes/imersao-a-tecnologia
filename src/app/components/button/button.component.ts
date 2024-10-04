import { Component, Input } from '@angular/core';
import { ButtonClass } from '../../../types/button-class.type';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) public label!: string;
  @Input({ required: true }) public class!: ButtonClass;
  @Input() public fontSize: string = '16px';
  @Input() public width: string = '200px';
  @Input() public height: string = '60px';
}
