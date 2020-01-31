import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;


  loginUser = {
    email: 'test@gmail.com',
    password: '12345'
  };

  registerUser: Usuario = {
    email: '',
    password: '',
    nombre: '',
    avatar: 'usuario.png',
    edad: '',
    genero: '',
    pais: '',
    ciudad: '',
    intereses: ''

  };

  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uiService: UiServiceService) { }

  ngOnInit() {
    this.slides.lockSwipes( true);
  }

  async login( flogin: NgForm ){

    if (flogin.invalid){return;}

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password);

    if (valido) {
      //navegar al tabs
      this.navCtrl.navigateRoot('main/tabs/categoria',{animated: true})
    }else{
      //mostrar alerta de usuario y contraseña incorrectos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos');
    }

  }
  
  async registro(fRegistro: NgForm){

    if (fRegistro.invalid){return;}

    const valido = await this.usuarioService.registro(this.registerUser);

    if (valido){
      //navegar al tabs
      this.navCtrl.navigateRoot('main/tabs/tab1',{animated: true})
    }else{
      //mostrar alerta de usuario y contraseña incorrectos
      this.uiService.alertaInformativa('El correo ingresado ya existe');
    }
    
  }

 

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
