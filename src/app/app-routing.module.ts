import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormExample } from './FormExample';
import { formValidation } from './FormValidation';
import { Login } from './Login';
import { Registration } from './Registration';
import { TaskDetailsComponent } from './Taks-details.component';
import { SearchStatusComponent } from './search-status/search-status.component';
import{ TaskListComponent} from './task-list/task-list.component'
import { SetPriorityComponent } from './set-priority/set-priority.component';
import { SetBookmarkComponent } from './set-bookmark/set-bookmark.component';
import { SetNotesComponent } from './set-notes/set-notes.component';
import { CreatetaskComponent } from './createtask/createtask.component';






const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full' },
 //{path:'template-form',component:FormExample},
 //{path:'validate',component:formValidation},
 {path:'Login',component:Login},
 {path:'Register',component:Registration},
 {path:'setpriority',component:SetPriorityComponent},
 {path:'setnotes',component:SetNotesComponent},
 {path:'createtask',component:CreatetaskComponent},
 
 {path:'tasks', component:TaskListComponent},

  {path:'statuscheck',component: SearchStatusComponent},
  {path:'setbookmark',component:SetBookmarkComponent},

  {path:'details/:taskid',component:TaskDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }