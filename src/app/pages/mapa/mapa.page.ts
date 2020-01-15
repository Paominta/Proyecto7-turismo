import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  mapboxgl.accessToken = 'pk.eyJ1IjoicGFvbWludGEiLCJhIjoiY2szeGk2bHZ2MTNodDNvdDYxZGk5YXVxcSJ9.2kRLqmEg67ROgZSiD60kPQ';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-77.72006049593814, 0.8104170982511971],
  zoom: 13
});

  // tslint:disable-next-line: only-arrow-functions
  map.on('load', () => {

    map.resize();

  // Marker
    // new mapboxgl.Marker()
    //   .setLngLat([this.lng, this.lat])
    //   .addTo(map);
    const marker2 = new mapboxgl.Marker().setLngLat([-77.70837679346927, 0.8310250778040328]).addTo(map);
    const marker3 = new mapboxgl.Marker().setLngLat([-77.71104290923007, 0.831030441657816]).addTo(map);
    const marker4 = new mapboxgl.Marker().setLngLat([-77.71111264666446, 0.831400547551089]).addTo(map);
    const marker5 = new mapboxgl.Marker().setLngLat([-77.71193876704105, 0.8298933044934645]).addTo(map);
    const marker6 = new mapboxgl.Marker().setLngLat([-77.71297946413883, 0.8291638201026762]).addTo(map);
    const marker7 = new mapboxgl.Marker().setLngLat([-77.71010413607486, 0.8189778439215734]).addTo(map);
    const marker8 = new mapboxgl.Marker().setLngLat([-77.7157475038422, 0.8189778439215734]).addTo(map);
    const marker9 = new mapboxgl.Marker().setLngLat([-77.71988883456119, 0.8210590249505497]).addTo(map);
    const marker10 = new mapboxgl.Marker().setLngLat([-77.72705569704898, 0.815523510138994]).addTo(map);
    const marker11 = new mapboxgl.Marker().setLngLat([-77.73812785586246, 0.8194713199335167]).addTo(map);
    const marker12 = new mapboxgl.Marker().setLngLat([-77.7126146837128, 0.7887684154961149]).addTo(map);
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;

    let labelLayerId;
    for (let i = 0; i < layers.length; i ++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
        labelLayerId = layers[i].id;
        break;
      }
    }

    map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': '#aaa',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          'interpolate', ['linear'], ['zoom'],
          15, 0,
          15.05, ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate', ['linear'], ['zoom'],
          15, 0,
          15.05, ['get', 'min_height']
        ],
        'fill-extrusion-opacity': .6
      }
    }, labelLayerId);
  });
  }

}
