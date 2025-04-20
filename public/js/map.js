const map = L.map("map").setView([-12.9704, -38.5124], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; OpenStreetMap',
}).addTo(map);

fetch("/api/delegacias")
  .then(res => res.json())
  .then(delegacias => {
    delegacias.forEach(({ nome, endereco, telefone, latitude, longitude }) => {
      if (latitude && longitude) {
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup(`<strong>${nome}</strong><br>${endereco}<br>📞 ${telefone}`);
      }
    });
  });

