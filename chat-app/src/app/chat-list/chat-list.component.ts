import { Component, OnInit } from '@angular/core';
import {Chats} from '../chats';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor() { }
  myChats = [
    new Chats(1, 'Olivia','http://placehold.it/45','10:00AM','hello this is test message'),
    new Chats(2, 'Jake Oliver','http://placehold.it/45','10:00AM','hello this is test message'),
    new Chats(3, 'Windstorm','http://placehold.it/45','10:00AM','hello this is test message'),
    new Chats(4, 'Olivia2','http://placehold.it/45','10:00AM','hello this is test message'),
    new Chats(5, 'Windstorm','http://placehold.it/45','10:00AM','hello this is test message'),
    new Chats(6, 'Princess Amelia','http://placehold.it/45','10:00AM','hello this is test message'),
    new Chats(6, 'Olivia1','http://placehold.it/45','10:00AM','hello this is test message')
  ]
  ngOnInit() {
  }

}
