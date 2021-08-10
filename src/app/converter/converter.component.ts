import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  temperatureCelsius: number | null = null;
  typeOfTemperature: string | null = null;

  temperatureResult: number | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  makeTheConversion(): void {
    if (this.typeOfTemperature === "fahrenheit" && this.temperatureCelsius != null) {
      this.temperatureResult = (this.temperatureCelsius - 32) * 5 / 9;
    }
    if(this.typeOfTemperature === "kelvin" && this.temperatureCelsius !=null){
      this.temperatureResult = this.temperatureCelsius - 273.15;
    }
  }

}
