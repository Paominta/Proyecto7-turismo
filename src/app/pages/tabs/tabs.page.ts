import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private postsService: PostsService,
              private usuarioService : UsuarioService) {}

  logout() {
    this.postsService.paginaPosts = 0;
    this.usuarioService.logout();
  }

}
