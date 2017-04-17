import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// Componets
import { LinksComponent } from "./Components/links/links.component";

// Services


const routes: Routes = [
    { path: "", redirectTo: "/urls", pathMatch: "full" },
    { path: "urls", component: LinksComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }