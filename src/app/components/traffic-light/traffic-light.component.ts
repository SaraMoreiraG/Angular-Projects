import { Component } from '@angular/core';

@Component({
  selector: 'traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {
  count = 0;
  btnText = 'On'
  green = 'dark light';
  orange = 'dark light';
  red = 'dark light';

  changeColor() {
    this.btnText = 'Next'
    this.count++;
    if (this.count == 4)
      this.count = 1;
    if (this.count == 1){
      this.red = 'dark light'
      this.green = 'green light'
    }
    else if (this.count == 2){
      this.orange = 'orange light'
      this.green = 'dark light'
    }
    else{
      this.red = 'red light'
      this.orange = 'dark light'
    }
  }
  off(){
    this.green = 'dark light';
    this.orange = 'dark light';
    this.red = 'dark light';
    this.count = 0;
    this.btnText = 'On'
  }
}
