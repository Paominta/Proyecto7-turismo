import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
@Input() id;
@Input() post: Post = {};


  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false,
   };

oculto = 100;
marcado = 'medium';
corazon = 'heart-empty';


  constructor(private dataLocal: DataLocalService) { }

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

}
