const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

async function run() {
  try {
    const issueNumber = core.getInput('issue_number');
    console.log(`Procesando la issue #${issueNumber}...`);

    // Llamada a la API
    const response = await axios.get('https://favqs.com/api/qotd');
    console.log('Respuesta completa de la API:', response.data);

    // Extraer la cita y el autor
    const quote = response.data.quote.body || 'No se pudo obtener la cita';
    const author = response.data.quote.author || 'Autor desconocido';

    // Imprimir la cita motivacional
    console.log(`🌟 Cita motivacional: "${quote}" - ${author}`);
  } catch (error) {
    core.setFailed(`Error ejecutando la Action: ${error.message}`);
  }
}

run();