import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Type } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chat-search',
  templateUrl: './chat-search.component.html',
  styleUrls: ['./chat-search.component.css']
})
export class ChatSearchComponent implements OnInit {

  constructor() { 
   
  }
 
  Contacts = [
      'Olivia',
      'Jake Oliver',
      'Princess Amelia',
      'Lumpy Harry',
      'Olivia1',
      'Lumpy Harry',
      'Olivia2'
    ]
  ngOnInit() {
  }

}
