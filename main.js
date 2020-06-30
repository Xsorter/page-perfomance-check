(function () {
  "use strict";
  const observer = new PerformanceObserver((list) => {
    list.getEntries().map((entry) => {
      console.log(entry);
    });
  });
  observer.observe({
    entryTypes: [
      "largest-contentful-paint",
      "paint",
      "resource",
      "mark",
      "measure",
    ],
  });

  performance.mark("registered-observer");

  function loaded() {
    performance.measure("Document Loaded");
  }

  window.addEventListener("load", loaded);
})();
