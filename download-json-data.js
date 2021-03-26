function downloadJSON(data, name) {
  var _myArray = JSON.stringify(data, null, 4); //indentation in json format, human readable

  var filename = name + ".json";

  var vLink = document.createElement("a"),
    vBlob = new Blob([_myArray], { type: "octet/stream" }),
    vUrl = window.URL.createObjectURL(vBlob);
  vLink.setAttribute("href", vUrl);
  vLink.setAttribute("download", filename);
  vLink.click();
}
