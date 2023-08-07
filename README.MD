<div align="center">
<img src="./logo/LogoText.png" alt="A yellow Rec Room logo with text saying 'Rec.js'.">
</div>

## About Rec.js

Rec.js is a server for old Rec Room builds!

This project is similar to OpenRec or Vault Server. If you're looking for a server that is more like OpenRec Live or OpenLabs, check out [LunarRec](https://github.com/RealMCoded/LunarRec).

> *Note: LunarRec is not production ready software. Use at your own risk!*

## Disclaimer

This project is not affiliated with [Rec Room](https://recroom.com/) in any way, nor intends to infringe on their copyrights. Distributing old versions of Rec Room is copyright infringement, so that's why Rec.js does not come bundled with Rec Room at all.

**Rec.js is...**

✅ a localhostable server for single person use ([It is possible to play with others however!](#q-is-it-possible-to-play-with-other-people-with-recnetjs))

✅ similar to [OpenRec](https://github.com/recroom2016/OpenRec) and VaultServer

✅ a server for 2016, 2017, and early 2018 builds

✅ fast, small, and portable (~650kb base download, ~9MB after package download)

**Rec.js is not...**

❌ a server that multiple people can connect to *(if you are looking for a server like that, check out **[LunarRec](https://github.com/RealMCoded/LunarRec)**!)*

❌ similar to OpenRec Live / OpenLabs

❌ a server for builds from late 2018 and onwards

❌ slow and bloated

## Build support list

[Read this part of the FaQ before making an issue that your build doesn't work!](#q-my-build-doesnt-work)

| Year | Supported | Tested Builds                  | Notes                                             |
|------|-----------|--------------------------------|---------------------------------------------------|
| 2016 | ✅         | December 23rd 2016           |                                                   |
| 2017 | ✅         | January to October 10th 2017 | The computer does not work properly.              |
| 2018 | ✅         | March 2018                   | Late 2018 builds (like September) won't work yet. |
| 2019 | ❌         |                              | Support for this might never be officially added. |
| 2020 | ❌         |                              | Support for this might never be officially added. |
| 2021 | ❌         |                              | Support for this might never be officially added. |
| 2022 | ❌         |                              | Support for this might never be officially added. |
| 2023 | ❌         |                              | Support for this might never be officially added. |

## Download

- [Latest Stable Release](https://realmcoded.github.io/Rec.js/download/stable.html) - The current stable release of Rec.js. The most stable offering. **Recommended** 
- [Latest Pre Release](https://realmcoded.github.io/Rec.js/download/pre.html) - The next version of Rec.js. Contains new features and is not as stable as Stable.
- [Latest Developer Release](https://github.com/RealMCoded/Rec.js/archive/refs/heads/master.zip) - Contains features that come out as soon as they are added. The least stable version with untested code. **Use at your own risk!**

## Usage

Check out [this wiki page](https://github.com/RealMCoded/Rec.js/wiki/Installation-Guide) for the installation guide!

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

- We do not support late 2018, 2019, 2020, 2021, 2022, or 2023 builds.

- If there is no console output when you launch your build, that means the builds RecNet server domain has not been modified. 

- If there is console output but there is a "Failed to connect to RecNet!" error, [Submit an issue!](https://github.com/RealMCoded/Rec.js/issues)

## Credits

- stuartt_mcoded ([mcoded.xyz](https://mcoded.xyz)) - Lead Developer

- andry6702 ([Twitter: @andry6702](https://twitter.com/andry6702)) - Help with getting more 2017 builds working

## License

This project is under the [**GNU AGPL v3** license](https://github.com/RealMCoded/Rec.js/blob/master/LICENSE). 

*tl;dr: You cannot distribute closed source versions, and if you modify this software you **must** link back to the original project which can be found [here](https://github.com/RealMCoded/Rec.js).*
