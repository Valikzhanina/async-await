const button = document.querySelector('button');
console.log(button);

const DOMAIN = 'https://api.ipify.org/?format=json';
async function f(DOMAIN) {
  button.addEventListener('click', () => {
    // console.log('hello');
  });
  let response = await fetch(DOMAIN);
  let info = await response.json();
  console.log(info);
}
f(DOMAIN);

const serverUrl = 'https://ip-api.com/';
async function getPersonalInfo(serverUrl) {
  let response = await fetch(serverUrl);
  let address = await response.json();
  console.log(address);
}
getPersonalInfo(serverUrl);
