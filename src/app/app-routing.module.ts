import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeeksComponent} from'./geeks/geeks.component';

const routes: Routes = [
          {
            path:'',
            component:GeeksComponent
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
