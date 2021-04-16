import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  category: String[] = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  articles: any;

  constructor() {
    this.getJson("business");
  }

  async getJson(categ: string){
    const respuesta = await
    fetch("https://newsapi.org/v2/top-headlines?language=es&apiKey=52a891a4aa3b4a7d9aa25e5363fd5b97&category=" + categ + "");
    this.articles = await respuesta.json();
    this.articles = this.articles.articles;
    console.log(this.articles);
  }
}
