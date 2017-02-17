module.exports = { contents : "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mobx = require(\"mobx\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } } /*\n                                                                                                                                                          * OffGrid Talkie\n                                                                                                                                                          *\n                                                                                                                                                          * Copyright (c) 2017 OffGrid Networks. All Rights Reserved.\n                                                                                                                                                          * SEE LICENSE\n                                                                                                                                                          */\n\nvar UIStateStore = function UIStateStore() {\n    _classCallCheck(this, UIStateStore);\n\n    (0, _mobx.extendObservable)(this, {\n        screenSize: {\n            width: window.innerWidth,\n            height: window.innerHeight\n        },\n        minSize: {\n            width: 400,\n            height: 300\n        },\n        viewPortSize: (0, _mobx.asStructure)(function () {\n            return {\n                width: Math.max(this.screenSize.width, this.minSize.width),\n                height: Math.max(this.screenSize.height, this.minSize.height)\n            };\n        })\n    });\n\n    var self = this;\n\n    window.addEventListener(\"resize\", function () {\n        (0, _mobx.transaction)(function () {\n            self.screenSize.width = window.innerWidth;\n            self.screenSize.height = window.innerHeight;\n        });\n    });\n};\n\nvar uiState = new UIStateStore();\nexports.default = uiState;", 
dependencies : ["mobx"], 
sourceMap : "{\"version\":3,\"sources\":[\"store/uistate.js\"],\"names\":[\"UIStateStore\",\"screenSize\",\"width\",\"window\",\"innerWidth\",\"height\",\"innerHeight\",\"minSize\",\"viewPortSize\",\"Math\",\"max\",\"self\",\"addEventListener\",\"uiState\"],\"mappings\":\";;;;;;AAOA;;0JAPA;;;;;;;IASMA,Y,GAEF,wBAAc;AAAA;;AAEV,gCAAiB,IAAjB,EAAuB;AACnBC,oBAAY;AACVC,mBAAOC,OAAOC,UADJ;AAERC,oBAAQF,OAAOG;AAFP,SADO;AAKnBC,iBAAS;AACLL,mBAAO,GADF;AAELG,oBAAQ;AAFH,SALU;AASnBG,sBAAc,uBAAY,YAAY;AAClC,mBAAO;AACHN,uBAAOO,KAAKC,GAAL,CAAS,KAAKT,UAAL,CAAgBC,KAAzB,EAAgC,KAAKK,OAAL,CAAaL,KAA7C,CADJ;AAEHG,wBAAQI,KAAKC,GAAL,CAAS,KAAKT,UAAL,CAAgBI,MAAzB,EAAiC,KAAKE,OAAL,CAAaF,MAA9C;AAFL,aAAP;AAIH,SALa;AATK,KAAvB;;AAiBA,QAAIM,OAAO,IAAX;;AAEAR,WAAOS,gBAAP,CAAwB,QAAxB,EAAmC,YAAY;AAC3C,+BAAY,YAAY;AACpBD,iBAAKV,UAAL,CAAgBC,KAAhB,GAAwBC,OAAOC,UAA/B;AACAO,iBAAKV,UAAL,CAAgBI,MAAhB,GAAyBF,OAAOG,WAAhC;AACH,SAHD;AAIH,KALD;AAOH,C;;AAGL,IAAMO,UAAU,IAAIb,YAAJ,EAAhB;kBACea,O\",\"file\":\"store/uistate.js\",\"sourcesContent\":[\"/*\\n* OffGrid Talkie\\n*\\n* Copyright (c) 2017 OffGrid Networks. All Rights Reserved.\\n* SEE LICENSE\\n*/\\n\\nimport { extendObservable, asStructure, transaction, observable, computed } from \\\"mobx\\\"\\n\\nclass UIStateStore {\\n\\n    constructor() {\\n\\n        extendObservable(this, {\\n            screenSize: {\\n              width: window.innerWidth,\\n                height: window.innerHeight\\n            },\\n            minSize: {\\n                width: 400,\\n                height: 300\\n            },\\n            viewPortSize: asStructure(function () {\\n                return {\\n                    width: Math.max(this.screenSize.width, this.minSize.width),\\n                    height: Math.max(this.screenSize.height, this.minSize.height)\\n                }\\n            })\\n        });\\n\\n        var self = this;\\n\\n        window.addEventListener(\\\"resize\\\",  function () {\\n            transaction(function () {\\n                self.screenSize.width = window.innerWidth;\\n                self.screenSize.height = window.innerHeight;\\n            });\\n        }\\n        );\\n    }\\n}\\n\\nconst uiState = new UIStateStore();\\nexport default uiState;\\n\"]}",
headerContent : undefined, 
mtime : 1485808069000
};