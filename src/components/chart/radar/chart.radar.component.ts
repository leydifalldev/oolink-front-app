import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
    selector: 'raptor-radar-chart',
    templateUrl: './chart.radar.component.html',
    styles: [`
    :host{
        
    }
    canvas{
      margin: auto;
    }`],
    inputs: [
      'data'
    ]
})
export class RaptorRadarChartComponent implements OnInit {
      // Doughnut
  public doughnutChartLabels:string[] = [];
  public doughnutChartData:number[] = [0.5];
  public chartType:string = 'radar';
  public borderWidth: Number = 12;
  public radarOptions: any;
  public radarColors:Array<any>;
  public data: any;
  public type: string;

  constructor () {
    this.radarColors = [{
      backgroundColor: ['rgba(127, 15, 126, 0.3)']
    }];

    this.radarOptions = {
      title: {
        display: true,
        text: 'Technologies Back end',
        position: 'bottom'
    },
      maintainAspectRatio: false,
      legend: false,
      cutoutPercentage: 90, 
      responsive: false,
      textBaseline: "middle",
      animation: {
        animateRotate: true
      }
  };
  }
  ngOnInit() {
    console.log("data", this.data);
    if (this.data) {
       this.chartType = this.data.type;
       this.doughnutChartLabels = this.data.labels;
       this.doughnutChartData = this.data.data;
    }
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
