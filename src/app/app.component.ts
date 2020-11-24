import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  //DATA BIDING
  //EVEN BIDING
  user = {
    name: "PhilipLpy",
    age: 21
  };

  handler(event) {
    console.log("clicked", event);
  }
}
