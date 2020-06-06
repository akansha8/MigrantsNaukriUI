import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 40, 38, 25, 30, 30], label: 'Unemployed' },
    { data: [20, 45, 40, 50, 55, 70, 80], label: 'Employed' }
  ];

  public doughnutChartLabels = ['Farming', 'Cooking', 'Driving', 'Painting', 'Security Gaurd', 'Salon'];
  public doughnutChartData = [250,80,180,50,100,90];
  public doughnutChartType = 'doughnut';
  
  ngOnInit() {
  }

}
