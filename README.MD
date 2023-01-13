<div align="center">
<img src="./logo/LogoText.png" alt="A yellow Rec Room logo with text saying 'Rec.js'.">
</div>

## About Rec.js

Rec.js is RecNet server replacement for old Rec Room builds.

**Rec.js is...**

✅ a localhostable server for single person use ([It is possible to play with others however!](#q-is-it-possible-to-play-with-other-people-with-recnetjs))

✅ similar to [OpenRec](https://github.com/recroom2016/OpenRec) 

✅ backwards compatible with [OpenRec](https://github.com/recroom2016/OpenRec)

✅ fast, small, and portable (~650kb base download, ~9MB after package download)

**Rec.js is not...**

❌ a server that multiple people can connect to

❌ similar to OpenRec Live / OpenLabs

❌ slow and bloated

## Build support list

[Read this part of the FaQ before making an issue that your build doesn't work!](#q-my-build-doesnt-work)

| Year | Supported | Tested Builds      | Notes                                                    |
|------|------------|--------------------|---------------------------------------------------------|
| 2016 | ✅         | December 23rd 2016 | Image saving does not work as intended.                 |
| 2017 | ✅         | October 10th 2017  | If client is restarted, old session data still remains. |
| 2018 | ❌         |                    |                                                         |
| 2019 | ❌         |                    | Support for this build might never be officially added. |
| 2020 | ❌         |                    | Support for this build might never be officially added. |
| 2021 | ❌         |                    | Support for this build might never be officially added. |
| 2022 | ❌         |                    | Support for this build might never be officially added. |
| 2023 | ❌         |                    | Support for this build might never be officially added. |

## Building

**This step is required to use this program.**

This project requires [Node.js](https://nodejs.org/) to be installed before you continue.

To install the required components, run `npm i`. If you have yarn, run `yarn`.

Config files are created by themselves on first boot.

To get this working with your own builds, you will need to modify them yourself.

## Usage

**Edit your configurations**

To edit your user information and how the server operates, run `npm run config` (or `yarn run config` if you have yarn).

**Start the server**

To start your server, run `npm run serve` (or `yarn run serve` or `yarn serve`). When running this command, you have to specify what build you want to host a server for (Example: `npm run serve 2017` will start a 2017 server.) 

If you run this command without specifying what version you wish to launch, it will default to the version in your server configuration (default is 2016 if not modified)

## (not so) Frequently Asked Questions

### Q: How is Rec.js different than OpenRec?

**A:** At the moment, there's not much of a difference between OpenRec and Rec.js. They both do the same job, which is allowing old Rec Room builds to be playable again.

Since OpenRec is no longer being worked on, Rec.js exists to be an improvement of OpenRec to include more features and better support for old Rec Room builds.

### Q: Is it possible to play with other people with Rec.js?

**A:** Yes! Multiplayer is handled with a [Photon PUN server](https://www.photonengine.com/pun) and a [Photon Voice server](https://www.photonengine.com/en-us/Voice), not via the RecNet server.

### Q: Is it possible for someone using OpenRec and someone using Rec.js to play together?

**A:** It is indeed possible for the same reasons listed [here](#q-is-it-possible-to-play-with-other-people-with-recjs)

### Q: My build doesn't work!

**A:** There are multiple reasons why this might be happening.

- We do not support 2018, 2019, 2020, 2021, 2022, or 2023 builds (2018 will be coming soon).

- If there is no console output when you launch your build, that means the builds RecNet server domain has not been modified. 

- If there is console output but there is a "Failed to connect to RecNet!" error, [Submit an issue!](https://github.com/RealMCoded/Rec.js/issues)