async function fetchQuote() {
    try {
      const response = await fetch('https://cita-ol19.onrender.come');
      const data = await response.json();
      document.getElementById('quote').innerText = `"${data.quote}"`;
      document.getElementById('author').innerText = `- ${data.author}`;
    } catch (error) {
      document.getElementById('quote').innerText = 'No se pudo obtener una cita en este momento.';
      document.getElementById('author').innerText = '';
    }
  }
  
  document.getElementById('new-quote').addEventListener('click', fetchQuote);