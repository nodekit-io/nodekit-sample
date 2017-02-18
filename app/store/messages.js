/*
* OffGrid Talkie
*
* Copyright (c) 2017 OffGrid Networks. All Rights Reserved.
* SEE LICENSE
*/


global.com = global.com || {};
global.com.offgridn = global.com.offgridn || {};
global.com.offgridn.chat = global.com.offgridn.chat || {
  sendMessage: function(){ console.log("Not Implemented")},
  on: function() { console.log("Not Implemented")}
};
const offgridChat = global.com.offgridn.chat;

import { extendObservable, observable, computed } from "mobx"
import { toJS } from 'mobx';
const WELCOME = { "urn:consumer:message:text": "Hi there", "urn:consumer:id": "ai:offgrid" }

class MessagesStore {

  constructor() {
    try {
      this.mru = JSON.parse(sessionStorage.getItem("messages/mru"));
      this.mru.forEach((function (item, index) {
        if ((index !== this.mru.length - 1) && item.card && item.card.choices)
          item.card.choices = [];
      }).bind(this))
    } catch (ex) {
      this.mru = null;
    }

    this.mru = this.mru || [WELCOME]

    extendObservable(this, {
      items: this.mru
    });

    var self = this;

    offgridChat.on("recv", function (msg, sender) {
      var item = {
        "urn:consumer:message:text": msg,
        "urn:consumer:id": sender,
        "urn:consumer:timestamp": new Date().getTime()
      }

      self.store_(item);
    })
  }

  json = computed(() => {
    return toJS(this.items);
  });

  closeLastCard = () => {
    if ((this.items.length > 1) &&
      (this.items[this.items.length - 1].card) && (this.items[this.items.length - 1].card.type === "multi-choice"))
      this.items[this.items.length - 1].card.choices = [];
  }

  push = (item) => {
    offgridChat.sendMessage(item["urn:consumer:message:text"])

    return this.store_(item)
  };

   store_ = (item) => {

    this.items.push(observable(item));

    this.mru.push(toJS(item));

    if (this.mru.length > 9) this.mru.splice(0, 1);
    var blob = JSON.stringify(toJS(this.mru));
    sessionStorage.setItem("messages/mru", blob);

    return Promise.resolve(true);
  };

  clear = () => {
    this.items.splice(0);
    this.mru.push(0);
    this.push(WELCOME);
    sessionStorage.setItem("messages/mru", []);
    return Promise.resolve(true);
  };

}

const messages = new MessagesStore();
export default messages;
