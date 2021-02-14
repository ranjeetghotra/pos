import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    GraphPageRoutingModule
  ],
  declarations: [GraphPage, LineChartComponent, BarChartComponent]
})
export class GraphPageModule {}
