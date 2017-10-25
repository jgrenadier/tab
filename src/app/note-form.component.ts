import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'; 
//import 'rjxs/add/operator/filter';
import { Note } from './note';

@Component({
    selector:'note-form',
    templateUrl: 'note-form.component.html'
})
export class NoteFormComponent  {        
    id;
    form: FormGroup;  
    title: string = "apply";
    note = new Note();
    item;    

    constructor(fb: FormBuilder, private _router:Router, 
                private _route:ActivatedRoute,
                private db: AngularFireDatabase){        
        this.form = fb.group({
            groupname:['',Validators.required ],
            comment:['',Validators.required],
            owner:['',Validators.required],
            urli:['',Validators.required]        
        });
        this.title = "hello";                
    }

    ngOnInit(){
        this._route.params.subscribe(params => {
            this.id = params["id"];            
        });      
                
        if (!this.id){
            this.title = "New Note";            
        }
        else{
            this.title = "Edit Note";            
            this.item = this.db.object(this.id);         
        }        
    }    
   
    submit(){                        
        if (this.id) {                       
            this.db.object(this.id).update({
                groupname: this.note.groupname,	
                owner: this.note.owner,
                url: this.note.urli,
                comment: this.note.comment,
            });                                  
        }
        else{            
            this.db.list('/').push({
                groupname: this.note.groupname,	
                owner: this.note.owner,
                url: this.note.urli,
                comment: this.note.comment 
            });                         
        }
                                    
        this._router.navigate(['']);
    } 

}