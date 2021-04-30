import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

// créer les routes en tant qu'objets
const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeComponent
  },
  {
    path: 'recipe-add',
    component: RecipeAddComponent
  },
  {
    path:'recipe-edit/:id',
    component: RecipeEditComponent,
  },
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
