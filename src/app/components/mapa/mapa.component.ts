import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  // @Input() posActual: string;
  @ViewChild('mapa') mapa;

  constructor() { }

  ngOnInit() {

    // console.log(this.posActual);

    // const latLng1 = this.posActual.split(',');
    // const lat1 = Number(latLng1[0]);
    // const lng1 = Number(latLng1[1]);

    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoicGFvbWludGEiLCJhIjoiY2szeGk2bHZ2MTNodDNvdDYxZGk5YXVxcSJ9.2kRLqmEg67ROgZSiD60kPQ';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 15,
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      })
      );
      
    map.addControl(new mapboxgl.NavigationControl());
    // map.addControl(new mapboxgl.FullscreenControl(map.resize()));


    const marker = new mapboxgl.Marker()
      .setLngLat( [lng, lat] )
      .addTo(map);

    // const marker1 = new mapboxgl.Marker()
    //   .setLngLat( [lng1, lat1] )
    //   .addTo(map);

  }

}
