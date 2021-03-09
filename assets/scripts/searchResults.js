const renderTopResult = (artist, targetDiv) => {
  const html = `<section class="top-result">
            <h3>Top result</h3>
            <div class="details">
              <img
                src="${artist.images[0].url}"
                alt="${artist.name}"
                width="32px"
                height="32px"
              />
              <a class="title" href="${artist.external_urls.spotify}" > ${artist.name} </a>
            </div>
          </section>`;
  targetDiv.innerHTML = html;
};

const renderTracks = (tracks, targetDiv) => {
  const songsHTML = tracks
    .map((song) => {
      return `
        <a class="song-item" data-id="${song.id}"href="${song.external_urls.spotify}">
          <img
            src="${song.album.images[0].url}"
            width="40px"
            height="40px"
          />
          <div class="song-details">
            <p>${song.name}</p>
            <p class="artist">${song.artists[0].name}</p>
          </div>
        </a>`;
    })
    .join(" ");
  targetDiv.innerHTML += `
      <section class="songs">
        <h3>Songs</h3>
        <div class="song-list">${songsHTML}</div>
      </section>`;
};

const renderArtists = (artists, targetDiv) => {
  const artistsHTML = artists.items
    .map((artist) => {
      return `
        <a class="artist-item" data-id="${artist.id}"href="${artist.external_urls.spotify}">
          <img
            src="${artist.images[0]?.url}"
            width="128px"
            height="128px"
          />
          <div class="artist-details">
            <p class="name">${artist.name}</p>
            <p class="category">Artist </p>
          </div>
        </a>`;
    })
    .join(" ");

  targetDiv.innerHTML += `
      <section class="artists">
        <h3>Artists</h3>
         <div class="artist-list">${artistsHTML}</div>
      </section>`;
};

const renderResults = (results, targetDiv) => {
  renderTopResult(results.artists.items[0], targetDiv);
  renderTracks(results.tracks.items.splice(0, 5), targetDiv);
  renderArtists(results.artists, targetDiv);
  // renderAlbums()
};

const search = async () => {
  const searchValue = document.querySelector("#search").value;
  // const searchValue = document.getElementById('search')
  console.log(searchValue);

  ///makeRequest(url).then().catch()
  try {
    const results = await SpotifyAPI.search(searchValue);
    console.log(results);
    const searchIndex = document.querySelector("#searchIndex");
    const resultsDiv = document.querySelector(".results");

    if (Object.keys(results).length > 0) {
      searchIndex.innerHTML = "";
      renderResults(results, resultsDiv);
    }
  } catch (e) {
    console.log(e);
  }
};
