import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';

const recipesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: RecipesComponent,
                pathMatch: 'full'
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RecipesRoutingModule {
}
