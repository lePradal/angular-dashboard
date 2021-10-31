import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  public Highcharts = Highcharts;
  public chartOptions: {};

  public value = 100;

  constructor() {
    this.chartOptions = {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Variação do DRACO e correlação com as moedas.'
      },
      xAxis: {
          categories: ['26/08', '27/08', '28/08', '29/08', '30/08', '31/08', '01/09'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Draco'
          },
          labels: {
              formatter: () => { this.value / 1000 }
              
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' Draco'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Real',
          data: [5.27, 5.22, 5.17, 5.19, 5.21, 5.18, 5.22]
      }, {
          name: 'Wemix',
          data: [3.54, 3.37, 3.38, 2.87, 2.66, 2.3, 1.95]
      }, {
          name: 'Dólar',
          data: [2.54, 2.37, 2.38, 1.87, 1.66, 1.3, 0.95]
      },
    ]
  }
  }

  ngOnInit(): void {
  }

}
