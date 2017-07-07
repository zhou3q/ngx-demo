import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import 'hammerjs';
// primeng
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { TreeModule, TreeNode } from 'primeng/primeng';
import { TreeDragDropService } from 'primeng/primeng'; // tree node drag
import { ChartModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
// angular material
import { MaterialModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
// service
import { AppService } from './app.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        // primeng
        AccordionModule,
        DialogModule,
        ButtonModule,
        TreeModule,
        ChartModule,
        DataTableModule,
        SharedModule,
        // material
        MaterialModule,
        MdNativeDateModule
    ],
    providers: [
        AppService,
        TreeDragDropService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
