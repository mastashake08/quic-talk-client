let peer;
let transport;
self.onmessage = (ev) => {
    const message = ev.data;
    const data = message.data;
    switch (message.command) {
        case 'start':
            peer = data.peer;
            transport = data.transport;
            break;
        case 'call':
            const call = peer.call(data.id, data.stream);
           
            call.on('stream', function(remoteStream) {
                self.postMessage({
                    command: 'answer',
                    data: {
                        stream: remoteStream
                    }
                }, [remoteStream]);
            });
            break;
        case 'hangup':
            peer.hangup();
            break;
    }
}