// Autistem landing page

// ── QR code (generated locally, no network) ──────────────
// Change this to the real app / deep link the QR should point to.
const QR_DESTINATION = "https://autistem.ai";

(function renderQR() {
  const img = document.getElementById("qrImage");
  if (!img || typeof qrcode === "undefined") return;

  // typeNumber 0 = auto-fit to the data; "M" = ~15% error correction.
  const qr = qrcode(0, "M");
  qr.addData(QR_DESTINATION);
  qr.make();

  // 8px per module, no quiet-zone margin (the card frame provides padding).
  img.src = qr.createDataURL(8, 0);
  img.alt = "QR code linking to " + QR_DESTINATION;
})();
