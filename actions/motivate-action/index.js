const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

async function run() {
  try {
    const issueNumber = core.getInput('issue_number');
    console.log(`Procesando la issue #${issueNumber}...`);

    const response = await axios.get('https://favqs.com/api/qotd');
    const quote = response.data.quote.body;
    const author = response.data.quote.author;

    console.log(`🌟 Cita motivacional: "${quote}" - ${author}`);
  } catch (error) {
    core.setFailed(`Error ejecutando la Action: ${error.message}`);
  }
}

run();