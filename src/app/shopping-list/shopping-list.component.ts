import { Component, OnInit } from '@angular/core';
import { Ingredents } from '../shared.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredents : Ingredents[]= [
  new Ingredents('Apple',10),new Ingredents('Tommato',5),
];

  constructor() { }

  ngOnInit(): void {
  }

}
