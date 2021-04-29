import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Créer une interface Recipe 
export interface Recipe {
  id: number,
  title: string,
  content: string,
  created_at: Date,
  image: string,
  favorite: number,
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
  return this.http.get<Recipe>(endpoint + 'recipes/');
  }
}
