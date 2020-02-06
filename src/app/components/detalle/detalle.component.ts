import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Post } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})


  export class DetalleComponent implements OnInit  {
  @Input() id;

     post: Post = {};
     cargandoGeo = false;

     slideSoloOpts = {
      allowSlideNext: false,
      allowSlidePrev: false,
     };

     postActual = {
      cordenada: null,
      posicion: false
    };


  oculto = 100;
  marcado = 'medium';
  corazon = 'heart-empty';



    constructor(private dataLocal: DataLocalService,
                private postService: PostsService,
                private modalCtrl: ModalController,
                private inAppBrowser: InAppBrowser,
                private geolocation: Geolocation
                ) { }

    ngOnInit() {
    console.log('id', this.id);
    this.postService.getPostId(this.id)
    .subscribe(resp => {
      this.post = resp.post;
      console.log(this.post);
    });

    this.geolocation.getCurrentPosition().then((resp) => {
      const lat = resp.coords.latitude;
      const lng = resp.coords.longitude;
      const coordenada = lat + ',' + lng;
     //  console.log(coordenada);
      this.postActual.cordenada = coordenada;
      }).catch((error) => {
        console.log('Error getting location', error);
      });

    this.dataLocal.existePost(this.id)
      .then(existe => this.marcado = (existe) ? 'primary' : 'medium');

    this.dataLocal.existeVisitado(this.id)
      .then(existe1 => this.corazon = (existe1) ? 'heart' : 'heart-empty');
    }

    favorito() {
      const existe = this.dataLocal.guardarPost(this.post);
      this.marcado = (existe) ? 'primary' : 'medium';
    }

    visitado() {
      const existe1 = this.dataLocal.guardarVisitado(this.post);
      this.corazon = (existe1) ? 'heart' : 'heart-empty';
    }

    regresar() {
      this.modalCtrl.dismiss();
    }

    abrirUrl(url: string) {
      this.inAppBrowser.create(this.post.recorrido);
    }

    // getGeo() {

    //   this.geolocation.getCurrentPosition().then((resp) => {
    //    const lat = resp.coords.latitude;
    //    const lng = resp.coords.longitude;
    //    const coordenada = lat + ',' + lng;
    //   //  console.log(coordenada);
    //    this.postActual.cordenada = coordenada;
    //    }).catch((error) => {
    //      console.log('Error getting location', error);
    //    });

      // let watch = this.geolocation.watchPosition();
      // watch.subscribe((data) => {
      //   // data can be a set of coordinates, or an error (if an error occurred).
      //   // data.coords.latitude
      //   // data.coords.longitude
      //  });

    // }

  }

