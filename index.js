 const imagesJSON = fetch(new Request('images.json'))
 .then(resp => {
    console.log(resp);
 })