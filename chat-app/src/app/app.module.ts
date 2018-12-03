import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatSearchComponent } from './chat-search/chat-search.component';
import { FilterPipe} from './chat-search/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ChatListComponent,
    ContactListComponent,
    ChatSearchComponent,
    FilterPipe 
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
