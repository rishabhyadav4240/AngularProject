import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ForExample} from './ForExample';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IfExample } from './IfExample';
import { PipeExample } from './PipeExample';
import { ArrayExample } from './ArrayExample';
import { Validate } from './Validate';
import {CustomSortpipe} from './CustomSortpipe';

import {MyOwnComponents} from './MyOwnComponents';
import {ProductExample} from './ProductExample';
import{ ProductImage} from './ProductImage';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details.component';
import { FormExample } from './FormExample';
import { formValidation } from './FormValidation';
import { TaskDetailsComponent } from './Taks-details.component';
import { PostExampleComponent } from './post-example/post-example.component';
import {NewModule} from './NewModule';
import { Login } from './Login';
import { Registration } from './Registration';
import { PostCasestudyComponent } from './post-casestudy/post-casestudy.component';
import { SearchStatusComponent } from './search-status/search-status.component';
//import { CaseStudyComponent } from './case-study/case-study.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SetPriorityComponent } from './set-priority/set-priority.component';
import { SetBookmarkComponent } from './set-bookmark/set-bookmark.component';
import { SetNotesComponent } from './set-notes/set-notes.component';
import { CreatetaskComponent } from './createtask/createtask.component';




@NgModule({
  declarations: [CreatetaskComponent,AppComponent,TaskDetailsComponent,Login,Registration,formValidation,
    ForExample,FormExample,EmployeeDetailsComponent,ProductImage, 
    IfExample,PipeExample,ArrayExample,Validate,CustomSortpipe,ProductExample,
    MyOwnComponents, PostExampleComponent, PostCasestudyComponent,
     SearchStatusComponent, TaskListComponent, SetPriorityComponent, SetBookmarkComponent, SetNotesComponent],

  imports: [BrowserModule,FormsModule,AppRoutingModule,HttpClientModule,ReactiveFormsModule,NewModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }