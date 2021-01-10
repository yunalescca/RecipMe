import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchRecipeComponent } from './recipes/search-recipe/search-recipe.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { EditRecipeComponent } from './recipes/recipe/edit-recipe/edit-recipe.component';



@NgModule({
  declarations: [
    RecipesComponent,
    SearchRecipeComponent,
    CreateRecipeComponent,
    RecipeComponent,
    EditRecipeComponent
  ],
  imports: [
    RecipesRoutingModule,
    CommonModule
  ]
})
export class RecipesModule { }
