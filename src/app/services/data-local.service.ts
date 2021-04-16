import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  //noticias: Article[] = [];

  constructor(private storage: Storage) {
    this.storage.create();
  }

  /*guardarNoticia(noticia: Article){
    this.noticias.unshift
  }*/
}
