# QUIC Talk Client

[![NPM](https://nodei.co/npm/@mastashake08/quic-talk-client.png)](https://nodei.co/npm/@mastashake08/quic-talk-client/)

[![NPM version](https://img.shields.io/npm/v/@mastashake08/quic-talk-client.svg)](https://www.npmjs.com/package/@mastashake08/quic-talk-client)
[![Build Status](https://travis-ci.org/mastashake08/quic-talk-client.svg?branch=master)](https://travis-ci.org/mastashake08/quic-talk-client)
[![Coverage Status](https://coveralls.io/repos/github/mastashake08/quic-talk-client/badge.svg?branch=master)](https://coveralls.io/github/mastashake08/quic-talk-client?branch=master)

A WebRTC calling package that uses WebTransport as the signaling server. Powered by [PeerJS](https://github.com/peers/peerjs) and [QUIC Talk Server]()

## Installation

Clone repository with Git:

```sh
npm install @mastashake08/quic-talk-client
```

## Usage
Using QUIC Talk is very straight forward! Simply import and choose an ID if you desire else one will be assigned for you. You can optionally give the constructor a WebTransport URL by default it will use a free version I provide for the #HackerGang 

```javascript
import { QuckTalk } from '@mastashake08/quic-talk-client';

const qt = new QuicTalk()
// or
const qt = new QuicTalk({
    id: 'my-custom-id', 
    serverUrl: 'my-custom-quic-talk-server-url'
})
```

## Support

- [Patreon](https://patreon.com/mastashake08)

## License

[MIT](https://github.com/mastashake08/quic-talk-client/blob/master/LICENSE)
