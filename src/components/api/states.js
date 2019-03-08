export default {
  get() {
    var url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9/2";
    return fetch(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "secret-key":
          "$2a$10$036UXxSL9oiSYBbeDqdNd.frX7BvsGTNNDekEX2iUKfHj7U1p1k6G"
      }
    })
      .then(resp => resp.json()) // Transform the data into json
      .then(json => {
        let results = {};
        for (let i in json.DATA) {
          results[json.DATA[i][1]] = json.DATA[i][0];
        }
        return results;
      });
  }
};
