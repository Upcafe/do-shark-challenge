async function main(args) {

  const name = 'Sharkooo';
  const type = 'dinosaur';
  const url = `https://functionschallenge.digitalocean.com/api/sammy?name=${name}&type=${type}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
  return response.json();
}
