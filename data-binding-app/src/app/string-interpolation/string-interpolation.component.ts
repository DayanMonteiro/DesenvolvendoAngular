import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname="Dayan";
  person =  {
    firstname: "Dayan",
    lastname: "Monteiro",
    age: 33
  }

  constructor() { }

  ngOnInit(): void {
  }

}
