import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// Componets
import { LinksComponent } from "./Components/links/links.component";
import { ShrinkLinkComponent } from "./Components/shrink-link/shrink-link.component";

// Services


const routes: Routes = [
    { path: "", redirectTo: "/links", pathMatch: "full" },
    { path: "links", component: LinksComponent },
    { path: "shrink-url", component: ShrinkLinkComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }