import store from "../../store";

export default {
  get() {
    //var url = "https://api.jsonbin.io/";
    var url = "https://api.jsonbin.io/b/";
    // 5c9bf1af1bdf051e853cf5e7";
    url += "5c9d7d6e1c56bb1ec390de6c";
    //    var url = "https://api.jsonbin.io/b/5c96b7d69c83133c027c04fc/2";
    //url += "5c9bf1b01c56bb1ec38f37cd";
    //console.log(store.state.headers);
    return fetch(url, { headers: store.state.headers }).then(resp => {
      resp.json();
    });
  }
};
