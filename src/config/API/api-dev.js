const protocol = "https";
const host = "api.solar-energy.rejoicehub.com/api/v1";

// const protocolSocket = "https";
// const hostSocket = "api.photodepot.rejoicehub.com";

// const protocolSocket = "http";
// const hostSocket = "192.168.29.179:3003";

// const protocol = "http";
// const host = "abe7-2405-201-200d-1c68-e20d-9416-8bde-8139.ngrok.io/vorteli/api/v1";

const port = "";
const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/`;
// export const socketUrl = `${protocolSocket}://${hostSocket}${
//   port ? ":" + port : ""
// }/`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
  // socketUrl: socketUrl,
};
