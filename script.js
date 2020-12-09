// Асинхронность  - это выполнение различных задач одновременно
const button = document.querySelector('button');

const DOMAIN = 'https://api.ipify.org/?format=json';
async function f(DOMAIN) {
  let response = await fetch(DOMAIN);
  let info = await response.json();
  const ip = info.ip;

  const serverUrl = 'http://ip-api.com/';
  button.addEventListener('click', () => {
    getPersonalInfo(serverUrl);
    async function getPersonalInfo() {
      const url = `${serverUrl}json/${ip}?fields=continent,country,region,city,district`;
      let response = await fetch(url);
      let address = await response.json();
      const ul = document.querySelector('ul');

      function createinfoList(address) {
        for (let key in address) {
          if (address[key] !== '') {
            const li = document.createElement('li');
            li.textContent = `${key} : ${address[key]}`;
            ul.appendChild(li);
          }
        }
      }
      createinfoList(address);
    }
  });
}
f(DOMAIN);
