import { RouterModule } from '@angular/router';
import { NoteComponent } from './note.component';
import { NoteFormComponent } from './note-form.component';

export const routing = RouterModule.forRoot([
    { path:'', component:NoteComponent },
    { path:'add',component:NoteFormComponent },
    { path:'add/:id', component: NoteFormComponent }  	 
]);