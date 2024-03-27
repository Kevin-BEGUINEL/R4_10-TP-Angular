import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {CD} from '../models/cd.models';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD!: CD;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group ({
      title: [null],
      author: [null],
      thumbnail: [null],
      dateDeSortie: [null],
      quantite: [null],
      price: [null],
    })
  }

  valForm(): void {
    alert("eee");
  }
}
