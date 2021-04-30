import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService, Recipe } from '../rest.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getRecipe(this.route.snapshot.params.id).subscribe(
      (data) => {
        console.log(data);
        this.recipe = data;
      }
    )
  }

  updateRecipe() {
    this.rest.updateRecipe(this.recipe).subscribe(
      (result) => {
        this.router.navigate(['/recipes']);
      },
      (err) => {
        console.log(err);
      }
    ) 
  }
}
