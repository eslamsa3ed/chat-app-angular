import { Component, OnInit } from "@angular/core";
import { Conversation } from "../chat-conver";
import * as $ from "jquery";

@Component({
  selector: "app-chat-box",
  templateUrl: "./chat-box.component.html",
  styleUrls: ["./chat-box.component.css"]
})
export class ChatBoxComponent implements OnInit {
  constructor() {}
  myConversation = [
    new Conversation("10:00 AM", "this is test message 1 ", "self"),
    new Conversation("10:05 AM", "this is test message 2 ", "self"),
    new Conversation("10:06 AM", "this is test message 3 ", "other"),
    new Conversation("10:07 AM", "this is test message 4 ", "other"),
    new Conversation(
      "10:08 AM",
      "this is test message this is test messagethis is test message 5  ",
      "self"
    ),
    new Conversation("10:10 AM", "this is test message 1 ", "self")
  ];
  msg = "";
  // send function
  onSend(msg: string) {
    if (msg) {
      var time = new Date();
      this.myConversation.push(
        new Conversation(
          time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          }),
          msg,
          "self"
        )
      );
      $(".messages").animate(
        { scrollTop: $(".messages").prop("scrollHeight") },
        1000
      );
      $("#msg_box").val(null);
      this.msg = null;
      msg = null;
    }
  }

  ngOnInit() {
    //scroll to latest messsages
    $(".messages").animate(
      { scrollTop: $(".messages").prop("scrollHeight") },
      1000
    );
  }
}
