import { Component, Input, OnInit } from '@angular/core';
import {CD} from '../models/cd.models';
import {CdsService} from '../services/cds.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CDComponent implements OnInit {
  @Input() Cd!: CD;
  theCd!: CD;
  idcd!: number;

  constructor(private cdService: CdsService, private route: ActivatedRoute) {}

  ngOnInit () : void {
    this.idcd = this.route.snapshot.params['id'];
    console.log(this.idcd);
    if (this.idcd !== undefined)
    {
      this.Cd = this.cdService.getCDById(+this.idcd);
    }
    else {
      this.theCd = this.Cd;
    }
  }

  onAddCD(): void{
    this.Cd.quantite++;
  }
}
