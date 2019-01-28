const apiCall = (url, method, body = {})=>{
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(resp=> resp.json())
}

export default apiCall