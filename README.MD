## Notice: at the current moment, RecNet.js is still in it's early stages of life. It is not recommend that you use this as your main server software.

<div align="center">
<img src="./rrjs.png" width="128px" height="140px" alt="A yellow Rec Room logo with the letters JS in the bottom right corner.">

# RecNet.js
</div>

A RecNet server replacement for old Rec Room builds

**Current supported builds**
- 2016

**Planned builds**
- 2017
- 2018

# Building

This project requires [Node.js](https://nodejs.org/) to be installed before you continue.

```bash
npm i # install requirements
npm run config # edit your configuration - TBA
npm run serve 2016 # play!
```

To get this working with builds, you will need to modify them yourself.

# Usage

To start a server, run the following command

```
npm run serve 2016
```

Running `npm run serve` by itself will throw an error
```
ERROR: No version specified!.
Example Usage: 'npm run serve 2016'.
```