import { Component, Input } from '@angular/core';
import {CD} from '../models/cd.models';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CDComponent {
  @Input() Cd!: CD;

  onAddCD(): void{
    this.Cd.quantite++;

  }
}
