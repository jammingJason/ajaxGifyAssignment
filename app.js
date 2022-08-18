async function searchGiphy(q) {
  const getImage = document.querySelector('#imageHolder');
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=OgpBJdchr9guqSd0bMzAIP6gsMZ04IJT&q=${q}&limit=1&offset=0&rating=r&lang=en`
  );
  for (let i = 0; i < res.data.data.length; i++) {
    console.log(res.data.data[i].images.original.url);
    const newImage = document.createElement('img');
    getImage.append(newImage);
    newImage.src = res.data.data[i].images.original.url;
    newImage.className = 'giphyImages';
    // console.log(newImage.src);
  }
}
const txtSearch = document.querySelector('#txtSearch');
const searchBtn = document.querySelector('#btnSearch');
searchBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchGiphy(txtSearch.value);
  //   alert();
});

const clearBtn = document.querySelector('#btnClear');
clearBtn.addEventListener('click', function (evt) {
  const getImages = document.querySelectorAll('.giphyImages');
  evt.preventDefault();
  getImages.forEach((image) => {
    image.remove();
  });
});
