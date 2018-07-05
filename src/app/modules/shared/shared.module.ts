import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/shared/spinner/spinner.component';
import { SearchComponent } from '../../components/shared/search/search.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    SpinnerComponent,
    SearchComponent
  ],
  exports:[
    SpinnerComponent,
    SearchComponent
  ]
})
export class SharedModule { }
