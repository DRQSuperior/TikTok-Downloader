function download() {
    var url = document.getElementById("url").value;
    const options = {
        method: 'GET',
        url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
        params: {url: url},
        headers: {
          'X-RapidAPI-Key': 'b9ab437e9amshd1177093a109ec5p19a1f3jsnbd62e18af13a',
          'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log("worked", response.status);
        url = response.data.video[0];
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
            var blob = xhr.response;
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'download.mp4';
            a.click();
        }
        xhr.send();
      }).catch(function (error) {
        console.log(error);
      });
}

