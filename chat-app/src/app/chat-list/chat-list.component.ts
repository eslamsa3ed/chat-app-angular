import { Component, OnInit } from "@angular/core";
import { Chats } from "../chats";
import * as $ from "jquery";
import "bootstrap-notify";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.css"]
})
export class ChatListComponent implements OnInit {
  constructor() {}
  myChats = [
    new Chats(
      1,
      "Olivia",
      "http://placehold.it/45",
      "10:00AM",
      "hello this is test message"
    ),
    new Chats(
      2,
      "Jake Oliver",
      "http://placehold.it/45",
      "11:00AM",
      "hello this is test message"
    ),
    new Chats(
      3,
      "Windstorm",
      "http://placehold.it/45",
      "12:00AM",
      "hello this is test message"
    ),
    new Chats(
      4,
      "Olivia2",
      "http://placehold.it/45",
      "1:00AM",
      "hello this is test message"
    ),
    new Chats(
      5,
      "Windstorm",
      "http://placehold.it/45",
      "2:00AM",
      "hello this is test message"
    ),
    new Chats(
      6,
      "Princess Amelia",
      "http://placehold.it/45",
      "3:00AM",
      "hello this is test message"
    ),
    new Chats(
      6,
      "Olivia1",
      "http://placehold.it/45",
      "4:00AM",
      "hello this is test message"
    )
  ];

  ngOnInit() {
    var ul = $("ul#chat-list");
    window.setInterval(function() {
      var li = ul.children().eq(1); // in production we will replace with new sender id
      li.removeClass("fadeInLeft");
      li.addClass("fadeOutLeft");
      setTimeout(function() {
        li.detach();
        li.removeClass("fadeOutLeft");
        li.addClass("fadeInLeft");
        ul.prepend(li);
        $.notify(
          {
            title: li.find(".usr-name").text(),
            icon: "fa fa-flag fa-stack-1x fa-inverse",
            message: li.find(".last-msg").text()
          },
          {
            animate: {
              enter: "fadeInRight",
              exit: "fadeOutRight"
            },
            placement: {
              from: "top",
              align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            template:
              '<div data-notify="container" class="col-xs-11 col-sm-3 alert notify-container" role="alert">' +
              '<span class="fa-stack fa-lg notify-icon">' +
              '<i class="fa fa-circle fa-stack-2x"></i>' +
              '<i data-notify="icon" ></i>' +
              "</span>" +
              '<span class="notify-title" data-notify="title">{1}</span> <br> ' +
              '<span class="notify-msg" data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              "</div>" +
              "</div>"
          }
        );
      }, 600);
    }, 60600);
  }
}
