import store from "../../store";

export default {
  get() {
    var url = "https://api.jsonbin.io/b/5c3ec57f05d34b26f20aa54a";
    //console.log(store.state.headers);
    return fetch(url, { headers: store.state.headers }).then(resp =>
      resp.json()
    );
  }
};
