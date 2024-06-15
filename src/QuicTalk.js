import Peer from "peerjs";
export class QuicTalk {
    #worker;
    #peer;
    #transport;
    constructor({
        id = crypto.randomUUID,
        serverUrl = ''
    }) {
        this.#peer = new Peer(id);
        this.#transport = new WebTransport(serverUrl);
        this.#worker = SharedWorker('workers/main.js');
        this.#worker.port.start();
        this.#worker.port.postmessage({
            command: 'start',
            data: {
                peer: this.#peer,
                transport: this.#transport
            }

        },[this.#peer, this.#transport]);
        this.#worker.port.onmessage = (e) => {
            console.log('message');
        }
    }

    async call(id) {
        const stream = await navigator.getUserMedia({video: true, audio: true});
        this.#worker.port.postmessage({
            command: 'call',
            data: {
                id: id,
                stream: stream
            }
        }, [stream]);
    }

    hangup() {
        this.#worker.port.postmessage({
            command: 'hangup',
            data: {}
        });
    }
}