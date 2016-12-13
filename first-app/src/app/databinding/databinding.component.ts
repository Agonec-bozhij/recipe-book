import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  strIn = 'This is string interpolation';
  numberIn = 2;

  onTest() {
    return true;
  }

  onClicked(value: string) {
    alert(value);
  }
}
