import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import 'hammerjs';
// primeng
import { TreeNode, SharedModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeDragDropService } from 'primeng/primeng'; // tree node drag
import { ChartModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { StepsModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';
import { Header, Footer } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
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
        StepsModule,
        GalleriaModule,
        TreeTableModule,
        ContextMenuModule,
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
