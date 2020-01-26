import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { ModalController } from '@ionic/angular';
import { PostComponent } from '../post/post.component';


@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.scss'],
})
export class LugarComponent implements OnInit {
  @Input() post: Post = {};

  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false,
   };

oculto = 100;
marcado = 'medium';
corazon = 'heart-empty';

  constructor(private dataLocal: DataLocalService,
              private modalCtrl: ModalController) { }

  ngOnInit() {

  this.dataLocal.existePost(this.post._id)
    .then(existe => this.marcado = (existe) ? 'primary' : 'medium');
  this.dataLocal.existeVisitado(this.post._id)
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

// async verPost(id: string) {
// const modal = await this.modalCtrl.create({
//   component: PostComponent,
//   componentProps: {
//     id
//   }
// });

// modal.present();

// }
}
