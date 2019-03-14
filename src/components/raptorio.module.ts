import { NgModule } from '@angular/core';
import {
    MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatTabsModule, 
    MatIconModule,
    MatCardModule,
    MatGridListModule
} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RaptorioHeader } from '../components/toolbar-header/toolbar.header';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTableModule} from '@angular/material';
import { RouterLink } from '@angular/router'
import * as Chart from 'chart.js'
import { ChartsModule } from 'ng2-charts';
import 'hammerjs';

import { RaptorioGridPanelComponent } from '../components/gridpanel/gridpanel.component';
import { RaptorioCardComponent } from '../components/card/card.component';
import { RaptorRadarChartComponent } from '../components/chart/radar/chart.radar.component';

import { RaptorPieGaugeComponent } from '../components/gauge/pie/gauge.pie.component';
import { DataService } from '../components/gauge/pie/gauge.pie.service';

@NgModule({
    declarations: [
        RaptorioHeader,
        RaptorioGridPanelComponent,
        RaptorioCardComponent,
        RaptorRadarChartComponent,
        RaptorPieGaugeComponent
    ],
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatCardModule,
        MatGridListModule,
        ChartsModule
    ],
    exports: [
        RaptorioHeader,
        RaptorioGridPanelComponent,
        RaptorRadarChartComponent,
        RaptorPieGaugeComponent,
        MatGridListModule,
        MatTabsModule,
        MatCardModule,
        MatTableModule
    ],
    providers: [
      DataService
    ]
})
export class NgRaptorioModule {

}