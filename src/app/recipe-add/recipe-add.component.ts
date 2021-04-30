import { Component, OnInit } from '@angular/core';
import { RestService, Recipe } from '../rest.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipe: Recipe;

  constructor(public rest: RestService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addRecipe() {
    this.rest.addRecipe(this.recipe).subscribe(
      (result) => {this.router.navigate(['/recipes']);}
      )
  }

}
