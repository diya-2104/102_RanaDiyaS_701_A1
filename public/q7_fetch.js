const fetch = require('node-fetch');

async function func_fetch() {
  const res = await fetch('https://www.github.com');
  const html = await res.text();
  console.log(html);
}

func_fetch();