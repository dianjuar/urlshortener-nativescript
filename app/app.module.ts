import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

// Componets
import { LinksComponent } from "./Components/links/links.component";
import { ShrinkLinkComponent } from "./Components/shrink-link/shrink-link.component";

// Services
import { ShrinkUrlService } from "./Services/shrink-url.service";
import { DataBaseService } from "./Services/database.service";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        LinksComponent,
        ShrinkLinkComponent
    ],
    providers: [
        ShrinkUrlService,
        DataBaseService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
