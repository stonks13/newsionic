import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  articles: any;

  constructor() {
    this.getJson();
  }

  async getJson(){
    const respuesta = await
    fetch("https://newsapi.org/v2/top-headlines?language=es&apiKey=52a891a4aa3b4a7d9aa25e5363fd5b97");
    this.articles = await respuesta.json();
    this.articles = this.articles.articles;
    console.log(this.articles);
  }
}
