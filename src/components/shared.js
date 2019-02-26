export default {
  getIT: async function(name, url) {
    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "secret-key":
          "$2a$10$036UXxSL9oiSYBbeDqdNd.frX7BvsGTNNDekEX2iUKfHj7U1p1k6G"
      }
    });
    let json = await response.json();

    var results = {};
    switch (name) {
      case "States":
        for (let i in json.DATA) {
          results[json.DATA[i][1]] = json.DATA[i][0];
        }
        return results;
        break;
      case "Districts":
        for (let i in json) {
          if (Object.keys(results).indexOf(json[i].district) != 1) {
            results[json[i].district] = json[i].district;
          }
        }
        return results;
        break;

      default:
        break;
    }
  }
};
