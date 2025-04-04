import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CD} from '../models/cd.models';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD!: CD;
  thumbRegex!: RegExp;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');

    this.formulaire = this.formBuilder.group({
      title: [null,[Validators.required, Validators.minLength(6)]],
      author: [null,[Validators.required, Validators.minLength(6)]],
      thumbnail: [null,[Validators.required, Validators.pattern(this.thumbRegex)]],
      dateDeSortie: [null,[Validators.required, Validators.min(0)]],
      quantite: [null,[Validators.required, Validators.min(0)]],
      price: [null,[Validators.required, Validators.min(0)]]
    },
    {updateOn: 'blur'}
    );

  
    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD = {
        id:0,
        title: formValue.title,
        author: formValue.author,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite,
        price: formValue.price,
        onsale: false
      };
    });
  }

  valForm(): void {
    
  }

  
}
