import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent  {
//added a property profileForm and set it to anew form group instance
  profileForm = new FormGroup({
    //iniytialize the constructor by providing objects
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    //nested form group
    address  :new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')




  })


    
  });
  
  onSubmit(){
    //Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
