import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Colors, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() chartData: { data: any[], label: Label[] } = { data: [], label: [] };
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{ display: false }],
      yAxes: [{
        display: false, ticks: {
          min: 40
        }
      }],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      data: [],
    },
  ];
  barChartColors: Colors[] = [{
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }];
  constructor() {
  }

  ngOnInit() {
    this.barChartLabels = this.chartData.label;
    this.barChartData[0].data = this.chartData.data;
  }
}
