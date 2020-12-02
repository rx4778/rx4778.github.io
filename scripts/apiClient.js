import { setLoading } from "./DOMChanges.js";

class ApiClient {
  url = "api2.tiematcher.dev" // 94.180.57.190
  port = ":6006"
  protocol = "http://"
  path = "api/v1/tie_matching"

  constructor(endpointData) {
    const { url, port, protocol, path } = endpointData;

    if (url) this.url = url;
    if (port) this.port = port;
    if (protocol) this.protocol = protocol;
    if (path) this.path = path;
  }

  async sendRequest(body, endpoint = "", method = "POST") {
    const answer = await fetch(`${this.protocol}${this.url}${this.port}/${this.path}${endpoint}`, {
      method,
      body
    });

    return answer.json();
  }

  async sendGetRequest(body, endpoint = "") {
    const answer = await fetch(`${this.protocol}${this.url}${this.port}/${this.path}${endpoint}?template_id=${body}`);

    return answer.json();
  }
}

const apiClient = new ApiClient({});

export default apiClient;
