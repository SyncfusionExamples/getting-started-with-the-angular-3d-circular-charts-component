import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CircularChart3DModule, CircularChartDataLabel3DService, 
  CircularChartTooltip3DService, PieSeries3DService,
CircularChartLegend3DService} from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CircularChart3DModule],
  providers: [CircularChartDataLabel3DService, CircularChartTooltip3DService,
    PieSeries3DService, CircularChartLegend3DService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public tooltip: Object = {
    enable: true,
    format: "<b>${point.x}</b><br>Gold Medals: <b>${point.y}</b>"
  };
  public legendSettings: Object = {
    visible: true,
    position: 'Bottom'
  };
  public dataLabel: Object = {
    visible: true,
    position: 'Outside',
    name: 'country',
    connectorStyle: {
      length: '50px',
      width: 2
    }
  };
  public chartData = [
    { country: 'Canada', medals: 46 },
    { country: 'Hungary', medals: 30 },
    { country: 'Germany', medals: 79 },
    { country: 'Mexico', medals: 13 },
    { country: 'China', medals: 56 },
    { country: 'India', medals: 41 },
    { country: 'Bangladesh', medals: 25 },
    { country: 'United States', medals: 32 },
    { country: 'Belgium', medals: 34 }
    ];
  title = 'myangularapp';
}
