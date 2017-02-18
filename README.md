![http://nodekit.io](https://raw.githubusercontent.com/nodekit-io/nodekit/master/docs/images/banner.png?v02)
*{NK} NodeKit* is the universal, open-source, embedded engine that provides a full Node.js instance inside desktop and mobile applications for OS X, iOS, Android, and Windows.  

For application developers, the backend can be written in pure Node javascript code, the front-end in the architecture of your choice including but not limited to Atom Electron API, Facebook React, Express, etc.)

# NodeKit Sample Application

Sample Node.js application used by nodekit-cli 

## Installation using global nodekit command line

Make sure you have version >6 of Node.js and npm >3 installed (just to run the command line build tool, there is no Node backend)

``` bash
npm install -g nodekit-cli
nodekit create myapp io.nodekit.myapp myapp
cd myapp
nodekit add platform macos
nodekit build macos
nodekit run macos
```

## Installation without installing global packages

``` bash
git clone https://github.com/nodekit-io/nodekit-sample.git
cd nodekit-sample
npm install
npm run platform -- macos
npm run build 
npm start
```

## Platforms

Android
Android Fire OS including Fire TV, Stick and Tablet
iOS
macOS
Windows 10 / Universal Windows Platform
NodeJS (for browser)

## License

Apache 2.0