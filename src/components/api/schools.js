import store from "../../store";

export default {
  get(data) {
    //var url = "https://api.jsonbin.io/";
    var url = "https://api.jsonbin.io/b/";
    // 5c9bf1af1bdf051e853cf5e7";
    url += data;
    //    var url = "https://api.jsonbin.io/b/5c96b7d69c83133c027c04fc/2";
    //url += "5c9bf1b01c56bb1ec38f37cd";
    //console.log(store.state.headers);
    return fetch(url, { headers: store.state.headers }).then(resp =>
      resp.json()
    );
  }
};
