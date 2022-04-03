const buildApiClient = gateway => {
  return {
    get: (url, query) => gateway.get(url, { params: query }),
    post: (url, body, options = {}) => gateway.post(url, body, options),
    put: (url, body) => gateway.put(url, body),
    patch: (url, body) => gateway.patch(url, body),
    del: (url, body) => gateway.delete(url, body),
  }
}

export default buildApiClient
