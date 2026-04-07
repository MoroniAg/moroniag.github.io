import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || ''


export function sendContact(payload) {
  const url = `${API_BASE}/contact_me`
  return axios.post(url, payload).catch((err) => {
    const error = new Error(err.message || 'Request failed')
    if (err.response) {
      error.status = err.response.status
      error.data = err.response.data
    } else if (err.request) {
      error.request = err.request
    }
    throw error
  })
}

export default { sendContact }
