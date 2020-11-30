class ApiClient {
  url = "127.0.0.1"
  port = ":5500"
  protocol = "http://"

  constructor(endpointData) {
    const { url, port, protocol } = endpointData;

    if (url) this.url = url;
    if (port) this.port = port;
    if (protocol) this.protocol = protocol;
  }

  async sendRequest(body, path = "", method = "POST") {
    const answer = await fetch(`${this.protocol}${this.url}${this.port}/${path}`, {
      method,
      body,
      headers: {
        "Content-Type": "application/json"
      }
    });

    return answer.json();
  }
}

const apiClient = new ApiClient({});

export default apiClient;