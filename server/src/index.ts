import app from './app';
import serverUDP from './udp';

const port = 5000;
const UDPport = 5500;
const host = '0.0.0.0';

// Start server
app.listen(port, host);

serverUDP.bind(UDPport, host);
