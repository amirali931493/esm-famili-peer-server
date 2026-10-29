const { PeerServer } = require("peer");

const server = PeerServer({
  port: process.env.PORT || 9000,
  path: "/peerjs",
  proxied: true
});

console.log("PeerJS server is running!");
