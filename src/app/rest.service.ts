import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Créer une interface Recipe 
export interface Recipe {
  id: number,
  category: {
    title: string
  },
  title: string,
  content: string,
  image: string,
  favorite: boolean,
  time: number,
  difficulty: string,
  portions: number
}

const endpoint = "http://localhost:8000/api/";

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }


  // Observable permet d'avoir une gestion asynchrone d'une requête
  // Obtenir résultat requête GET pour toutes les recettes
  getRecipes(): Observable<any> {
  return this.http.get<Recipe>(endpoint + 'recipes').pipe(
    catchError(this.handleError));
  }

  addRecipe(recipe: Recipe): Observable<any> {
    return this.http.post<Recipe>(endpoint + 'recipe', recipe);
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put<Recipe>(endpoint + 'recipe/' + recipe.id, recipe);
  }

  getRecipe(id: number): Observable<any> {
    return this.http.get<Recipe>(endpoint + 'recipe/' + id);
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}

