import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  chartData: { data: any[], label: Label[]} = {data: [], label: []};
  ChartDataRange = 6 * 30;
  constructor() { }

  ngOnInit() {
    this.chartData.data = [65, 59, 80, 81, 90, 80, 70, 65, 59, 70, 81, 76, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, ];
    this.chartData.label = [
      '1 January 2020',
      '1 January 2020',
      '15 January 2020',
      '15 January 2020',
      '1 February 2020',
      '1 February 2020',
      '16 February 2020',
      '16 February 2020',
      '1 March 2020',
      '1 March 2020',
      '18 March 2020',
      '18 March 2020',
      '1 April 2020',
      '1 April 2020',
      '1 May 2020',
      '1 May 2020',
      '21 May 2020',
      '21 May 2020',
      '1 June 2020',
      '1 June 2020',
      '1 July 2020',
      '1 July 2020',
      '30 July 2020',
      '30 July 2020',
    ];
  }
  chartRange(days) {
    this.ChartDataRange = days;
  }
}
