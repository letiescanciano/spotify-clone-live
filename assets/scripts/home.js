const newCard = (album, artist) => {
  return `
        <div class="col-md-2">
          <div class="card text-truncate">
            <img class="card-img-top" src="${album.img.url}" alt="${album.name}" />
            <div class="card-body">
              <a href="${album.href}"><h5 class="card-title">${album.name}</h5></a>
              <a href="${artist.href}"><h6 class="card-subtitle mb-2 text-muted">${artist.name}</h6></a>
            </div>
          </div>
        </div>
    `;
};

const fetchNewReleases = () => {
  SpotifyAPI.browseNewReleases()
    .then((data) => {
      console.log("data", data);
      const albums = data?.albums?.items
        .map((item) => {
          const img = item.images.filter(
            (image) => image.height === 300 && image.width === 300
          )[0];
          // console.log("img", img);
          const album = {
            name: item.name,
            href: item.external_urls.spotify,
            img: img,
          };
          const artist = {
            name: item.artists[0].name,
            href: item.artists[0].external_urls.spotify,
          };
          return newCard(album, artist);
        })
        .join(" ");
      //   console.log("albums", albums);
      const targetDiv = document.querySelector(".row.app");
      //   console.log("targetDiv", targetDiv);
      targetDiv.innerHTML += albums;
    })
    .catch((e) => {
      console.log(e);
    });
};

window.onload = () => {
  fetchNewReleases();
};
