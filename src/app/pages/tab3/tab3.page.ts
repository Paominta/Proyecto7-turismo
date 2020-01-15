import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { PostsService } from 'src/app/services/posts.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario= {};

  constructor(private usuarioService : UsuarioService,
              private uiService: UiServiceService,
              private postsService: PostsService,
              private navCtrl: NavController) {}




  ngOnInit() {

    this.usuario = this.usuarioService.getUsuario();

  }

  async actualizar(fActualizar: NgForm){

    if (fActualizar.invalid){return;}

    const actualizado = await this.usuarioService.actualizarUsuario(this.usuario);


    if (actualizado) {
      // toast con el mensaje exitoso
      this.uiService.presentToast('Registro actualizado correctamente');
    } else {
      // toast con el mensaje de error
      this.uiService.presentToast('No se puedo actualizar el registro');
    }
  }

  logout() {
    this.postsService.paginaPosts = 0;
    this.usuarioService.logout();
  }
}
