import { Component } from '@angular/core';
// import { DemoService } from './demo.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  prediction='';
  name = 'Angular';
  constructor(
    // private demoService: DemoService
    ) { }

  onSubmitData(){
    // this.demoService.getPrediction();
    // this.prediction = "Sorry, it's gone forever";
    alert("Sorry, the Flask Server is not running. Cannot get response.");
  }
}
