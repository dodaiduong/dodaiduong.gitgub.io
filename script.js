window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
 return [
     {
        url: 'assets/buster_drone/scene.gltf',
        scale: '0.08 0.08 0.08',
        name: 'Magnemite',
        location: {
            lat: 21.008313,
            lng: 105.850525,
        }
     },
 ];
}

function renderPlaces(places) {
 let scene = document.querySelector('a-scene');

 places.forEach((place) => {
     let latitude = place.location.lat;
     let longitude = place.location.lng;

     let model = document.createElement('a-entity');
     model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
     model.setAttribute('gltf-model', place.url);
     model.setAttribute('rotation', '0 180 0');
     model.setAttribute('scale', place.scale);

     model.addEventListener('loaded', () => {
         window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
     });

     scene.appendChild(model);
 });
}
