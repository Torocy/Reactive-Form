import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//To use reactive forms,you have to import ReactiveFormsModule from @angular/forms
import { ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent
  ],
  imports: [
    BrowserModule,
    //add it here
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
