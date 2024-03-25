import {Component, OnInit} from '@angular/core';
import {CD} from '../models/cd.models';
import {CdsService} from '../services/cds.service';

@Component({
  selector: 'app-list-cd',
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})

export class ListCDComponent implements OnInit  {
  listecd!: CD[];

  constructor (private myCDsService: CdsService) {}

  ngOnInit() : void {
    this.listecd = this.myCDsService.getCDs();
  }
}
