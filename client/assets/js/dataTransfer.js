"use strict";

// DataTransfer is used to transfer data (JSON) from and to server, using
// native browsers Fetch API.
class DataTransfer {
  static intializeConnection() {
    console.log("DataTransfer intializeConnection");
  }
}

// Loading library after loading all elements in html
window.addEventListener("DOMContentLoaded", DataTransfer.intializeConnection);
