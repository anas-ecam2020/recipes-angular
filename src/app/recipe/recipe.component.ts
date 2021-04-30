import { Component, OnInit } from '@angular/core';
import { RestService, Recipe } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipes : Recipe[] = [];

  //instancier les services Rest & d'une Route à partir de librarie Router
  constructor(public rest:RestService, private router: Router) { }

  //au démarrage du composant
  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.rest.getRecipes().subscribe(
      (response) => {
        console.log(response);
        this.recipes = response;
      }
    )
  }

  add() {
    this.router.navigate(['/recipe-add']);
  }
}
