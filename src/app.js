import Amplify, { Auth, Storage } from 'aws-amplify'

import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

const getElement = document.getElementById.bind(document)

const statusDiv = getElement('signin-status')

async function refreshFiles() {
  const filesDiv = getElement('files')

  filesDiv.innerHTML = ''

  const files = await Storage.list('')

  for (let file of files) {
    const item = document.createElement('img')

    item.src = await Storage.get(file.key)
    
    filesDiv.appendChild(item)
  }
}
    
refreshFiles()

getElement('signup-button').addEventListener('click', async () => {
  const username = getElement('signup-username').value
  const email = getElement('signup-email').value
  const password = getElement('signup-password').value

  await Auth.signUp({ username, password, attributes: { email } })

  statusDiv.innerText = `Check "${email}" inbox for a confirmation code.`
})

getElement('confirm-signup-button').addEventListener('click', async () => {
  const code = getElement('signup-confirmation-code').value
  const username = getElement('signup-username').value

  await Auth.confirmSignUp(username, code)

  statusDiv.innerText = 'Sinup confirmed. You can sign in now.'
})

getElement('signin-button').addEventListener('click', async () => {
  const username = getElement('signin-username').value
  const password = getElement('signin-password').value

  const result = await Auth.signIn(username, password)

  statusDiv.innerText = 'Signed in as ' + result.username
})

getElement('upload-input').addEventListener('change', async (e) => {
  const [file] = e.target.files

  await Storage.put(file.name, file)

  await refreshFiles()
})