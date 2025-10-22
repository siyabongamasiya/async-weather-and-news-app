import https from "https";

export default function httpGetCallback(url: string, callback: (err: Error | null, data?: any) => void) {
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
      try {
        callback(null, JSON.parse(data));
      } catch (e) {
        callback(e as Error);
      }
    });
  }).on("error", (err) => callback(err));
}


