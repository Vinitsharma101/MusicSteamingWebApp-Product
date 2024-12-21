async playById(id) {
      const songDetails = await this.request(
        `song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=${id}`
      );
      const token = songDetails[id].encrypted_media_url;
      var authTokenData = await this.request(
        `song.generateAuthToken&url=${encodeURIComponent(token)}&bitrate=160&api_version=4&_format=json&ctx=web6dot0&_marker=0`
      );
      authTokenData.auth_url = authTokenData.auth_url.replace("ac.cf.", "aac.");
      const result = {
        ...songDetails[id],
        streamurl: authTokenData,
      };
  
      return result;
    }

// https://www.jiosaavn.com/api.php?__call=




// left here upto playlist and there inside data alubm is left and still this comp. is not complete...............:)