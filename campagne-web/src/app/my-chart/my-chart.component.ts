import { Component,AfterViewChecked,ViewChild , OnInit,Input } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';
@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
@ViewChild('ghraphElement', {static: true})
  private ghraphElement: ChartComponent;

@Input()
type:string = 'bar';
@Input()
title:string = 'titre';
@Input()
data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
@Input()
options = {
  responsive: true,
  maintainAspectRatio: false
};
  constructor() { }
  ngAfterViewChecked() {
        this.ghraphElement.chart.update();

    }

  ngOnInit(): void {
  }

}
