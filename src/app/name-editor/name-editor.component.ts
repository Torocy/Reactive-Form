import { Component, OnInit } from '@angular/core';
//import formcontrol to register a single form control
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  //create a new instance of the form control
  name = new FormControl('');

  updateName() {
    this.name.setValue('Torocy');
  }

  

}
