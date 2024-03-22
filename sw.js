self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("offline").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        // Add other essential static assets (CSS, JavaScript, images)
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request).then(function (matching) {
        return matching || caches.match("offline.html");
      });
    })
  );
});

self.addEventListener("push", function (event) {
  if (event && event.data) {
    var data = event.data.json();
    if (data.method == "pushMessage") {
      // console.log("Sync successful");
      console.log("Push notification sent");
      event.waitUntil(
        self.registration.showNotification("Ecommerce App", {
          body: data.message,
        })
      );
    }
  }
});
