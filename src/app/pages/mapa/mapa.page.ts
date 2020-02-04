import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostsService } from '../../services/posts.service';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {
  posts: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(pull: boolean = false) {
  //   this.postsService.getPosts(pull)
  //   .subscribe(resp => {
  //     console.log(resp);
  //     this.posts.push(...resp.posts);
  // });
  //   const latLng = this.posts[0].coords.split(',');
  //   console.log(latLng);
}

  ngAfterViewInit() {

  mapboxgl.accessToken = 'pk.eyJ1IjoicGFvbWludGEiLCJhIjoiY2szeGk2bHZ2MTNodDNvdDYxZGk5YXVxcSJ9.2kRLqmEg67ROgZSiD60kPQ';
  const map = new mapboxgl.Map({
  container: 'mapa',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-77.72006049593814, 0.8104170982511971],
  zoom: 14
});
// CODIGO ORIGINAL FIN ///////

  // tslint:disable-next-line: only-arrow-functions
  map.on('load', function() {
  // Add a layer showing the places.

  map.resize();

  map.addControl(new mapboxgl.NavigationControl());


  map.loadImage(
    '/assets/pin/lugares.png',
    function(error, image) {
    if (error) { throw error; }
    map.addImage('lugares', image);
    map.addLayer({
  id: 'places',
  type: 'symbol',
  source: {
  type: 'geojson',
  data: {
  type: 'FeatureCollection',
  features: [
  {
  type: 'Feature',
  properties: {
  description:
  // tslint:disable-next-line: max-line-length
  '<strong>MERCADO CENTRAL </strong><p><b>Dirección:</b>Boyacá, Tulcán</p><p><b>Horario:</b> De lunes a domingo de 7.00 am a 17:pm</p>',
  },
  geometry: {
  type: 'Point',
  coordinates: [-77.71585477881658, 0.8140013849371286]
  }
  },

  {
  type: 'Feature',
  properties: {
  description:
  '<strong>ECOPARQUE</strong><p><b>Dirección:</b>E182 a 7Km de Tulcán</p><p><b>Horario:</b> De lunes a domingo de 8:00 am a 18:00 pm</p>',
  },
  geometry: {
  type: 'Point',
  coordinates: [-77.767223, 0.825472]
  }
  },

  {
    type: 'Feature',
    properties: {
    description:
    '<strong>ESTADIO OLIMPICO </strong><p><b>Dirección:</b><b>Horario:</b> De lunes a domingo de 8:00 am a 18:00 pm</p>',
    },
    geometry: {
    type: 'Point',
    coordinates: [-77.7225566436413, 0.8121445647721544]
    }
    },

    {
      type: 'Feature',
      properties: {
      description:
      '<strong>HOTEL SAN ANDRÉS </strong><p><b>Dirección:</b><b>Horario:</b> De lunes a domingo de 8:00 am a 18:00 pm</p>',
      },
      geometry: {
      type: 'Point',
      coordinates: [-77.71919640802605, 0.8109535576072204]
      }
      },

  {
    type: 'Feature',
    properties: {
    description:
    '<strong>PARQUE ISIDRO AYORA</strong><p><b>Dirección:</b>Av Manabi 63, Tulcán</p><p><b>Horario: </b>Abierto las 24 horas</p>',
    },
    geometry: {
    type: 'Point',
    coordinates: [-77.71395918500266, 0.8167874873775105]
    }
    },
  ]
  }

  },
  layout: {
    'icon-image': 'lugares',
    'icon-size': 0.07
  }
  });

});

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'places', function(e) {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const description = e.features[0].properties.description;

  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }


  new mapboxgl.Popup()
  .setLngLat(coordinates)
  .setHTML(description)
  .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', function() {
  map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'places', function() {
  map.getCanvas().style.cursor = '';
  });
  });




// CODIGO ORINIGAL INICIO ///////

  // // tslint:disable-next-line: only-arrow-functions
  // map.on('load', () => {

  //   map.resize();

  // // Marker
  //   // this.postsService.getPosts()
  //   // .subscribe (resp => {
  //   //   const latLng = this.posts.push(...resp.posts[].coords.split(','));
  //   //   const lat = Number(latLng[0]);
  //   //   const lng = Number(latLng[1]);
  //   //   new mapboxgl.Marker()
  //   //  .setLngLat([lng, lat])
  //   //   .addTo(map);

  //   // });
  //   const marker2 = new mapboxgl.Marker().setLngLat([-77.70837679346927, 0.8310250778040328]).addTo(map);
  //   const marker3 = new mapboxgl.Marker().setLngLat([-77.71104290923007, 0.831030441657816]).addTo(map);
  //   const marker4 = new mapboxgl.Marker().setLngLat([-77.71111264666446, 0.831400547551089]).addTo(map);
  //   const marker5 = new mapboxgl.Marker().setLngLat([-77.71193876704105, 0.8298933044934645]).addTo(map);
  //   const marker6 = new mapboxgl.Marker().setLngLat([-77.71297946413883, 0.8291638201026762]).addTo(map);
  //   const marker7 = new mapboxgl.Marker().setLngLat([-77.71010413607486, 0.8189778439215734]).addTo(map);
  //   const marker8 = new mapboxgl.Marker().setLngLat([-77.7157475038422, 0.8189778439215734]).addTo(map);
  //   const marker9 = new mapboxgl.Marker().setLngLat([-77.71988883456119, 0.8210590249505497]).addTo(map);
  //   const marker10 = new mapboxgl.Marker().setLngLat([-77.72705569704898, 0.815523510138994]).addTo(map);
  //   const marker11 = new mapboxgl.Marker().setLngLat([-77.73812785586246, 0.8194713199335167]).addTo(map);
  //   const marker12 = new mapboxgl.Marker().setLngLat([-77.7126146837128, 0.7887684154961149]).addTo(map);
  //   // Insert the layer beneath any symbol layer.
  //   const layers = map.getStyle().layers;

  //   let labelLayerId;
  //   for (let i = 0; i < layers.length; i ++) {
  //     if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
  //       labelLayerId = layers[i].id;
  //       break;
  //     }
  //   }

  //   map.addLayer({
  //     id: '3d-buildings',
  //     source: 'composite',
  //     'source-layer': 'building',
  //     filter: ['==', 'extrude', 'true'],
  //     type: 'fill-extrusion',
  //     minzoom: 15,
  //     paint: {
  //       'fill-extrusion-color': '#aaa',

  //       // use an 'interpolate' expression to add a smooth transition effect to the
  //       // buildings as the user zooms in
  //       'fill-extrusion-height': [
  //         'interpolate', ['linear'], ['zoom'],
  //         15, 0,
  //         15.05, ['get', 'height']
  //       ],
  //       'fill-extrusion-base': [
  //         'interpolate', ['linear'], ['zoom'],
  //         15, 0,
  //         15.05, ['get', 'min_height']
  //       ],
  //       'fill-extrusion-opacity': .6
  //     }
  //   }, labelLayerId);
  // });
  }

}
