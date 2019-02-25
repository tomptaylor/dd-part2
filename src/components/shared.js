export default {
  getIT: async function(url) {
    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "secret-key":
          "$2a$10$036UXxSL9oiSYBbeDqdNd.frX7BvsGTNNDekEX2iUKfHj7U1p1k6G"
      }
    });
    let json = await response.json();
    console.log(json);
    var results = {};
    for (let i in json.DATA) {
      results[json.DATA[i][1]] = json.DATA[i][0];
    }
    return results;
  }
};
