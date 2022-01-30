import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipe : Recipe[]=[
 new Recipe('Biryani' ,'Chiken Dum Biryani' , 'https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg') ,
 new Recipe('Ice-Cream' ,'Rassberry Flavour' , 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/300x300/exps8883_QC2785C61A.jpg')

 ] ;

 
 constructor() { }

  ngOnInit(): void {
  }

}
