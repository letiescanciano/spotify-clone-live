const clientId = "3a658dda1d4c40e0b7233d7c00b9855e";
const clientSecret = "637566ed0ca84e59a650cba35375c134";

const clientEncoded =
  "M2E2NThkZGExZDRjNDBlMGI3MjMzZDdjMDBiOTg1NWU6NjM3NTY2ZWQwY2E4NGU1OWE2NTBjYmEzNTM3NWMxMzQ=";

const api_token =
  "BQCqKIRiyUTR7lTE7GwrKQcMStoo7MmkcjkjW4SaR_0BNG0vi0kghgnCugWbiIokaNcmiLLxUcloMZMWasw";

const SpotifyAPI = {
  browseNewReleases: async () => {
    // fetch(url, config)
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(
      "https://api.spotify.com/v1/browse/new-releases",
      config
    );

    // fetch('https://api.spotify.com/v1/browse/new-releases')
    // .then(response=>{
    //     console.log("response", response)
    //     return response
    // })

    console.log("response", response);

    return response.json(); // parses JSON response into native JavaScript objects
  },
};
