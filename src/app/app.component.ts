import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'data-binding-app';
  count:number = 0;
  value:boolean = true;
  hide:boolean = false;

  onClick(){
    this.count++;
  }

  ondoubleclick(){
    if(this.hide == false){
      this.hide = true;
    }else{
      this.hide = false;
    }
  }
}
