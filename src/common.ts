import httpGetAsync from "./asyncAwaitVersion";
import httpGetCallback from "./callBackVersion";
import httpGetPromise from "./promiseVersion";
const weatherURL =
  "https://api.open-meteo.com/v1/forecast?latitude=-26.2041&longitude=28.0473&current_weather=true";
const newsURL = "https://dummyjson.com/posts";

function callbackExample() {
  console.log("[CALLBACK] Starting callback example...");

  httpGetCallback(weatherURL, (err, weatherData) => {
    if (err) return console.error("[CALLBACK] Weather error:", err.message);
    console.log("[CALLBACK] Weather fetched successfully.");

    httpGetCallback(newsURL, (err2, newsData) => {
      if (err2) return console.error("[CALLBACK] News error:", err2.message);
      console.log("[CALLBACK] News fetched successfully.");
      console.log("[CALLBACK] Both requests completed via nested callbacks!");
    });
  });
}

async function asyncAwaitExample() {
  console.log("[ASYNC/AWAIT] Starting async/await example...");
  try {
    const weather = await httpGetAsync(weatherURL);
    console.log("[ASYNC/AWAIT] Weather fetched successfully.");

    const news = await httpGetAsync(newsURL);
    console.log("[ASYNC/AWAIT] News fetched successfully.");

    console.log("[ASYNC/AWAIT] Both requests completed sequentially!");

    const [w,n] = await Promise.all([
      httpGetAsync(weatherURL),
      httpGetAsync(newsURL),
    ]);
    console.log("[ASYNC/AWAIT] Promise.all(): Both requests done together!");
    console.log(`${w} and ${n}`);

    const fastest = await Promise.race([
      httpGetAsync(weatherURL),
      httpGetAsync(newsURL),
    ]);
    console.log("[ASYNC/AWAIT] Promise.race(): Fastest response received!");
  } catch (err: any) {
    console.error("[ASYNC/AWAIT] Error:", err.message);
  }
}

function promiseExample() {
  console.log("[PROMISE] Starting promise example...");

  httpGetPromise(weatherURL)
    .then((weather) => {
      console.log("[PROMISE] Weather fetched successfully.");
      return httpGetPromise(newsURL);
    })
    .then((news) => {
      console.log("[PROMISE] News fetched successfully.");
      console.log("[PROMISE] Both requests completed with Promise chaining!");
    })
    .catch((err) => console.error("[PROMISE] Error:", err.message));

  // Promise.all example
  Promise.all([httpGetPromise(weatherURL), httpGetPromise(newsURL)])
    .then(() =>
      console.log("[PROMISE] Promise.all(): Both requests done together.")
    )
    .catch((err) =>
      console.error("[PROMISE] Promise.all() error:", err.message)
    );

  // Promise.race example
  Promise.race([httpGetPromise(weatherURL), httpGetPromise(newsURL)])
    .then(() =>
      console.log("[PROMISE] Promise.race(): Fastest request completed.")
    )
    .catch((err) =>
      console.error("[PROMISE] Promise.race() error:", err.message)
    );
}

asyncAwaitExample()
// promiseExample()
// callbackExample()


// Note that i could not display the results in the console because it is not easy to read when they are displayed