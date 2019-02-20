export default {
  getURL: async function(ddn) {
    var url = "";
    alert("changed");
    console.log("shared " + ddn);
    switch (ddn) {
      case "State":
        url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9/2";
        this.results = await this.getIT(this.theurl);
        this.rows = await this.mapDropDown(ddn, this.results);

        break;
      case "District":
        this.url = "https://api.jsonbin.io/5c3ec57f05d34b26f20aa54a";
        break;
    }
    this.results = await this.getIT(this.theurl);
    console.log(this.results);
    return this.rows;
  }
};
