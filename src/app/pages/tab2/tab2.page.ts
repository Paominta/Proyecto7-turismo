import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;
declare var mapboxgl: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  tempImages: string[] = [];
  cargandoGeo = false;

  post = {
    nombre: '',
    mensaje: '',
    categoria: '',
    direccion: '',
    horario: '',
    costo: '',
    contactos: '',
    coords: null,
    posicion: false
  };

  constructor(private postService: PostsService,
              private route: Router,
              private geolocation: Geolocation,
              private camera: Camera) {}


  ngOnInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoicGFvbWludGEiLCJhIjoiY2szeGk2bHZ2MTNodDNvdDYxZGk5YXVxcSJ9.2kRLqmEg67ROgZSiD60kPQ';
    const map = new mapboxgl.Map({
    container: 'map',
                  style: 'mapbox://styles/mapbox/streets-v11',
                  center: [-77.72006049593814, 0.8104170982511971],
                  zoom: 15
                });

    const marker = new mapboxgl.Marker ({
                  draggable: true
                })
                .setLngLat([-77.72006049593814, 0.8104170982511971])
                .addTo(map);

    marker.on('drag', () => {
      const coord = marker.getLngLat();
      const coords = `${coord.lat},${coord.lng}`;
      console.log(coords);
      this.post.coords = coords;
    });
 }



  async crearPost() {
    console.log(this.post);
    const creado = await this.postService.crearPost(this.post);

    this.post = {
      nombre: '',
      mensaje: '',
      categoria: '',
      direccion: '',
      horario: '',
      costo: '',
      contactos: '',
      coords: null,
      posicion: false
    };

    this.tempImages = [];

    this.route.navigateByUrl('/main/tabs/tab1');

  }


  getGeo() {

    if ( !this.post.posicion ) {
      this.post.coords = null;
      return;
    }

    this.cargandoGeo = true;

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.cargandoGeo = false;

      const coords = `${resp.coords.latitude},${resp.coords.longitude}`;

      console.log(coords);

      this.post.coords = coords;

    }).catch((error) => {
      console.log('Error getting location', error);
      this.cargandoGeo = false;
     });

  }


  camara() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.procesarImagen(options);
  }


  libreria() {

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.procesarImagen(options);

  }


  procesarImagen(options: CameraOptions) {
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

       const img = window.Ionic.WebView.convertFileSrc( imageData );

       this.postService.subirImagen(imageData);
       this.tempImages.push(img);

     }, (err) => {
      // Handle error
     });
  }

}
