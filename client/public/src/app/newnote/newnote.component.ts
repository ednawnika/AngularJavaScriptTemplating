import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.css']
})
export class NewnoteComponent implements OnInit {
  private task

  constructor(private _ns:NoteService) { 

      this.task = {
      title: '',
      description: ''

      }
  }

  ngOnInit() {

  }

  createNote(){
    this._ns.create(this.task, (data) => {
      console.log(data)
    })
   
  }

}
