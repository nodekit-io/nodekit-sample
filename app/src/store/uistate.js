/*
* OffGrid Talkie
*
* Copyright (c) 2017 OffGrid Networks. All Rights Reserved.
* SEE LICENSE
*/

import { extendObservable, asStructure, transaction, observable, computed } from "mobx"

class UIStateStore {

    constructor() {

        extendObservable(this, {
            screenSize: {
              width: window.innerWidth,
                height: window.innerHeight
            },
            minSize: {
                width: 400,
                height: 300
            },
            viewPortSize: asStructure(function () {
                return {
                    width: Math.max(this.screenSize.width, this.minSize.width),
                    height: Math.max(this.screenSize.height, this.minSize.height)
                }
            })
        });

        var self = this;

        window.addEventListener("resize",  function () {
            transaction(function () {
                self.screenSize.width = window.innerWidth;
                self.screenSize.height = window.innerHeight;
            });
        }
        );
    }
}

const uiState = new UIStateStore();
export default uiState;
