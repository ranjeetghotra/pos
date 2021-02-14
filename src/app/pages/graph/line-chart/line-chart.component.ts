import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() chartData: { data: any[], label: Label[] } = { data: [], label: [] };
  public lineChartData: ChartDataSets[] = [
    {
      data: [],
    },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        type: 'time',
        ticks: {
          autoSkip: true,
          maxTicksLimit: 4,
          maxRotation: 0
        }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'right',
          ticks: {
            min: 40
          }
        },
      ],
    },
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 0,
        right: 0
      }
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    }
  };
  public lineChartColors: Color[] | any[] = [
    {
      // grey
      // backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(66,214,94,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];
  constructor() { }

  ngOnInit() {
    this.lineChartData[0].data = this.chartData.data;
    this.lineChartLabels = this.chartData.label;
    const ctx = (document.getElementById('lineChart') as HTMLCanvasElement).getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, 'rgba(66,214,94,0.8)');
    gradient.addColorStop(1, 'rgba(66,214,94,0)');
    this.lineChartColors[0].backgroundColor = gradient;
  }

}
