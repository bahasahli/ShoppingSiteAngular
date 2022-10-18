import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes :Recipe[] = [
    new Recipe('A Test Recipe','Juste a test','https://www.logocowboy.com/wp-content/uploads/2017/03/green-recipes-stock-logo-lcb.png'),
    new Recipe('A Test Recipe','Juste a test','https://www.logocowboy.com/wp-content/uploads/2017/03/green-recipes-stock-logo-lcb.png'),
    new Recipe('A Test Recipe','Juste a test','https://www.logocowboy.com/wp-content/uploads/2017/03/green-recipes-stock-logo-lcb.png')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
