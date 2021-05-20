import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawOnChartArea: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            drawOnChartArea: false,
            drawBorder: false
          }
        }
      ]
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [20, 30, 15, 20, 35, 10], label: 'Accepted', stack: 'a' },
    { data: [80, 70, 85, 80, 65, 90], label: 'Waiting for accept', stack: 'a' }
  ];
  public barChartLabels: string[] = ['BKK', 'ROC', 'RON', 'RONE', 'ROE', 'ROS'];

  public colors: any[] = [
    { backgroundColor: 'rgba(0, 166, 90, 1)' },
    { backgroundColor: 'rgba(175, 221, 200, 1)' }
  ];

  constructor() {}

  ngOnInit() {}

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
