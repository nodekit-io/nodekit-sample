module.exports = { contents : "'use strict';\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = require('react-dom');\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _App = require('./App');\n\nvar _App2 = _interopRequireDefault(_App);\n\nrequire('./index.css');\n\nvar _store = require('./store');\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _mobxReact = require('mobx-react');\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n* OffGrid Talkie\n*\n* Copyright (c) 2017 OffGrid Networks. All Rights Reserved.\n* SEE LICENSE\n*/\n\n_reactDom2.default.render(_react2.default.createElement(\n    _mobxReact.Provider,\n    { store: _store2.default },\n    _react2.default.createElement(_App2.default, null)\n), document.getElementById('root'));", 
dependencies : ["react","react-dom","./App","./index.css","./store","mobx-react"], 
sourceMap : "{\"version\":3,\"sources\":[\"index.js\"],\"names\":[\"render\",\"document\",\"getElementById\"],\"mappings\":\";;AAOA;;;;AACA;;;;AACA;;;;AACA;;AAEA;;;;AACA;;;;AAbA;;;;;;;AAeA,mBAASA,MAAT,CAAgB;AAAA;AAAA,MAAU,sBAAV;AACZ;AADY,CAAhB,EAEaC,SAASC,cAAT,CAAwB,MAAxB,CAFb\",\"file\":\"index.js\",\"sourcesContent\":[\"/*\\n* OffGrid Talkie\\n*\\n* Copyright (c) 2017 OffGrid Networks. All Rights Reserved.\\n* SEE LICENSE\\n*/\\n\\nimport React from 'react';\\nimport ReactDOM from 'react-dom';\\nimport App from './App';\\nimport './index.css';\\n\\nimport store from './store';\\nimport { Provider } from 'mobx-react';\\n\\nReactDOM.render(<Provider store={store}>\\n    <App />\\n</Provider>, document.getElementById('root'));\"]}",
headerContent : undefined, 
mtime : 1485808069000
};