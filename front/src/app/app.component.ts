import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chess';
  selected = 'option2';

  constructor(private dialog: MatDialog) {}
  openDialog(): void {
    let dialogRef=this.dialog.open(DialogComponent,{data:{name:"hhhh",age:10}})

  }
}
