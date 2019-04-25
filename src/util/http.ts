const http = {
  get: (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log("ERROR:", e);
      }); 
  }
};

export default http;