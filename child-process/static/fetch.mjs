// XHR
async function makeRequest (resource, method, payload = false) {
  const opts = {
    method: method,
    headers: {
      'Accept': 'application/json'
    }
  }
  if (payload) {
    opts.body = JSON.stringify(payload)
    opts.headers['Content-Type'] = 'application/json'
  }

  const res = await fetch(`http://localhost:51052/${resource}`, opts)
  try {
    return await res.json()
  } catch {
    return {}
  }
}

function XHRPost (url, payload) {
  return makeRequest(url, 'POST', payload)
}

function XHRDelete (url) {
  return makeRequest(url, 'DELETE')
}

function XHRPut (url, payload) {
  return makeRequest(url, 'PUT', payload)
}

function XHRGet (url) {
  return makeRequest(url, 'GET')
}

export {
  XHRPost as Post,
  XHRDelete as Delete,
  XHRPut as Put,
  XHRGet as Get
}
