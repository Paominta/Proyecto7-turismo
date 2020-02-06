import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostsService } from '../../services/posts.service';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(pull: boolean = true) {
    mapboxgl.accessToken = 'pk.eyJ1IjoicGFvbWludGEiLCJhIjoiY2szeGk2bHZ2MTNodDNvdDYxZGk5YXVxcSJ9.2kRLqmEg67ROgZSiD60kPQ';
    const map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.72006049593814, 0.8104170982511971],
      zoom: 14,
      
    });

    map.on('load', () => {

      map.resize();
      map.addControl(new mapboxgl.NavigationControl());
    });
    
    this.postsService.getPosts(pull)
    .subscribe(resp => {
      console.log(resp);
      this.posts.push(...resp.posts);

      for (const post of this.posts) {
        const latLng = post.coords.split(',');
        const lat = Number(latLng[0]);
        const lng = Number(latLng[1]);
        console.log(latLng);
        new mapboxgl.Marker().setLngLat( [lng, lat] )
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h4>' + post.nombre + '</h4>'+ '<p><b>Dirección: </b>' + post.direccion + '</p>'))
        .addTo(map);
      }
      // map.addControl(new mapboxgl.NavigationControl());
  });

    // for (const post of this.posts) {
    //   const latLng = post.coords.split(',');
    //   const lat = Number(latLng[0]);
    //   const lng = Number(latLng[1]);
    //   console.log(latLng);

}


}
