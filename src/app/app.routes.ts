import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "", redirectTo: "home", pathMatch: "full"
    },
    {
        path: "home", loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)
    },
    {
        path: "info", loadComponent: () => import("./info/info.component").then(m => m.InfoComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
