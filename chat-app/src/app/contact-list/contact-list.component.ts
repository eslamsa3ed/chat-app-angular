import { Component, OnInit } from "@angular/core";
import { Contact } from "../contact";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  constructor() {}
  myContact = [
    new Contact(1, "Olivia", "http://placehold.it/45"),
    new Contact(2, "Jake Oliver", "http://placehold.it/45"),
    new Contact(3, "Windstorm", "http://placehold.it/45"),
    new Contact(4, "Olivia2", "http://placehold.it/45"),
    new Contact(5, "Windstorm", "http://placehold.it/45"),
    new Contact(6, "Princess Amelia", "http://placehold.it/45"),
    new Contact(6, "Olivia1", "http://placehold.it/45")
  ];
  ngOnInit() {}
}
