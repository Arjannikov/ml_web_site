
document.addEventListener("DOMContentLoaded", function(event) {
  const element = document.createElement('h1')
  element.innerHTML = "-- ML --"
  document.body.appendChild(element)
})


/*
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// Amplify storage (S3) stuff
Amplify.configure({
    Storage: {
        AWSS3: {
            bucket: 'mwb-product-matching',
            region: 'ap-southeast-2',
        },
        customPrefix: {
            private: ''
        },
    },
})
Storage.configure({level: 'private'})

async function StorageList() {
    const result = await Storage.list('')
    console.log(result)
}

Storage.list('request_a_human_csv/') // for listing ALL files without prefix, pass '' instead
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.list('')
    .then(result => console.log(result))
    .catch(err => console.log(err));
*/
    
    