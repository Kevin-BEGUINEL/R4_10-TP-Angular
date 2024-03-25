import { Injectable } from '@angular/core';
import {CD} from '../models/cd.models';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getCDs() : CD[] 
  {
    return [
      {
        id: 1,
        title: "Utopia",
        author: "Travis Scott",
        price: 10.99,
        thumbnail: "https://m.media-amazon.com/images/I/31C6PK4NbAL._SX300_SY300_QL70_ML2_.jpg",
        dateDeSortie: new Date("2023-07-28"),
        quantite: 15,
        onsale: true
    },
    {
        id: 2,
        title: "Guts",
        author: "Olivia Rodrigo",
        price: 12.99,
        thumbnail: "https://m.media-amazon.com/images/I/91rzIsvpwjL._SX355_.jpg",
        dateDeSortie: new Date("2023-09-02"),
        quantite: 3,
        onsale: false
    },
    {
        id: 3,
        title: "Heaven or Hell",
        author: "Don Toliver",
        price: 8.99,
        thumbnail: "https://m.media-amazon.com/images/I/41zxzCOyS+L._SY300_.jpg",
        dateDeSortie: new Date("2020-03-13"),
        quantite: 75,
        onsale: true
    }
    ];
  }

  getCDById (id: number): CD {
    const cd = this.getCDs().find(cd => cd.id === id);
    if (cd) {
      return cd;
    }
    else {
      throw new Error ('CD not found');
    }
  }
}
