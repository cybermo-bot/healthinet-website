export async function sendMessage(message) {
  try {
    const res = await fetch('http://127.0.0.1:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })

    const data = await res.json()
    return data.response
  } catch (err) {
    console.error('Error talking to Flask bot:', err)
    return 'Sorry, something went wrong.'
  }
}
