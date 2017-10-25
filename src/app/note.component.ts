import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'; 
@Component({
    selector: 'notes',
    templateUrl: './note.component.html'
})
export class NoteComponent {
    notes;

    constructor(private db: AngularFireDatabase, private _router: Router){        
    }

  


    ngOnInit(){
        
         
         this.notes = this.db.list('/').valueChanges();        
         console.log(this.notes);    
    }

    add(){
        this._router.navigate(['add']);
    }  
  
      delete(note){  
        if (confirm("Are you sure you want to delete " + note.url + "?")){
          this.db.object(note.$key).remove()
            .then( x=> console.log("SUCCESS"))
            .catch( error => {
              alert("Could not delete the note.");
              console.log("ERROR", error)
            });
        }                  
      } 
}