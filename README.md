# Autistem AI — Web

Landing page for **Autistem AI**, a mobile app that helps caregivers manage the care of an autistic or neurodivergent child — care circle, daily logs, documents, and appointments & medication, all in one calm place.

The page invites visitors to scan a QR code to get the app on iOS or Android.

## Stack

Static site — no build step.

- `index.html` — markup
- `styles.css` — styles (Newsreader + Inter, "Care Wave" brand mark)
- `script.js` — generates the QR code locally (offline-capable)
- `qrcode.js` — vendored QR generator ([Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator), MIT)

## Develop

Just open `index.html` in a browser:

```bash
open index.html
```

## Configure the QR destination

Edit the top of `script.js`:

```js
const QR_DESTINATION = "https://autistem.ai"; // app URL or deep link
```

The QR code is generated in-browser, so it works with no network.
