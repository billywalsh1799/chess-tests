import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent {

  @Input() gameId:string=""
  @Input() player:string=""

  selectText(inputField:HTMLInputElement){
    inputField.select()
  }

  copyText(inputField:HTMLInputElement){
    let text=inputField.value

    inputField.select()
    navigator.clipboard.writeText(text)

    inputField.value="Copied!"

    setTimeout(() => (inputField.value = text), 2000)
  }

}
