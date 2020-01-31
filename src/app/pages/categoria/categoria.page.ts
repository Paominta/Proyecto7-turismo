import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {


    posts: Post[] = [];
    cat = '';

    //  cat = this.route.snapshot.paramMap.get('cat');

    habilitado = true;
    textoBuscar = '';

    slides = [
      {
        img: 'assets/naturaleza.jpg',
        categoria: 'Naturaleza'

      },
      {
        img: 'assets/parques.jpg',
        categoria: 'Parques'

      },
      {
        img: 'assets/iglesia.jpg',
        categoria: 'Iglesias'
      },
      {
        img: 'assets/piscinas.jpg',
        categoria: 'Piscinas'

      },
      {
        img: 'assets/restaurantes.jpg',
        categoria: 'Restaurantes'

      },
      {
        img: 'assets/hoteles.jpg',
        categoria: 'Hoteles'

      },
    ];

    constructor(private postsService: PostsService,
                private route: ActivatedRoute
                ) { }

    ngOnInit(event?) {
      this.siguientes(event, true);
      this.postsService.nuevoPost
        .subscribe(post => {
          this.posts.unshift(post);
        });

    }

    buscar(event) {
      this.cat = event.detail.value;
    }

    obtenerCategoria(categoria){
      this.cat = categoria;
    }


    recargar(event?) {
      this.siguientes(event, true);
      this.habilitado = true;
      this.posts = [];

    }

    siguientes(event?, pull: boolean = false) {

    this.postsService.getPosts(pull)
        .subscribe(resp => {
          console.log(resp);
          this.posts.push(...resp.posts);

          if (event) {
            event.target.complete();

            if (resp.posts.length === 0) {
              this.habilitado = false;
            }
          }

        });

    }

  }
