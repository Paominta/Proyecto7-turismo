import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {

  usuario: Usuario = {};

  constructor(private usuarioService: UsuarioService,
              private uiService: UiServiceService,
              private navCtrl: NavController) {}




  ngOnInit() {

    this.usuario = this.usuarioService.getUsuario();

  }

  async actualizar(fActualizar: NgForm) {

    if (fActualizar.invalid) { return; }

    const actualizado = await this.usuarioService.actualizarUsuario(this.usuario);


    if (actualizado) {
      // toast con el mensaje exitoso
      this.uiService.presentToast('Registro actualizado correctamente');
      this.navCtrl.navigateForward('/main/tabs/tab3');
    } else {
      // toast con el mensaje de error
      this.uiService.presentToast('No se puedo actualizar el registro');
    }
  }


}
