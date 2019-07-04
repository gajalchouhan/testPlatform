import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public value:boolean = false;
  title = 'project';

  public showLogin(){
      this.value = false;
  }
}
