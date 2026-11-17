 const map = L.map('map').setView(
      [49.8941, 2.2958], 12
    );

    L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; OpenStreetMap contributors'
      }
    ).addTo(map);

    L.marker([49.8941, 2.2958])
      .addTo(map)
      .bindPopup("Centre d'Amiens");