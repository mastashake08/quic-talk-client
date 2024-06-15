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
       
        this.#worker = new Worker(new URL('./workers/main.js').toString(),{ type: "module" });

        this.#worker.postmessage({
            command: 'start',
            data: {
                peer: this.#peer,
                transport: this.#transport
            }

        },[this.#peer, this.#transport]);
        this.#worker.onmessage = (e) => {
            console.log('message');
        }
    }

    async call(id) {
        const stream = await navigator.getUserMedia({video: true, audio: true});
        this.#worker.postmessage({
            command: 'call',
            data: {
                id: id,
                stream: stream
            }
        }, [stream]);
    }

    hangup() {
        this.#worker.postmessage({
            command: 'hangup',
            data: {}
        });
    }
}