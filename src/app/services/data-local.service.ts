import { Injectable } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Post } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

post: Post[] = [];
visitados: Post[] = [];

  constructor(private navCtrl: NavController,
              private storage: Storage,
              private toastCtrl: ToastController,
              ) {
                this.cargarFavoritos();
                this.cargarVisitados();
               }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'top',
      duration: 1500
    });
    toast.present();
  }

  abrirCategoria(categoria: string) {
  this.navCtrl.navigateForward(`/main/tabs/menu/categoria/${categoria}`);
  }

  guardarPost(post: Post ) {
    let existe = false;
    let mensaje = '';

    for (const pos of this.post) {
      if (pos._id === post._id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.post = this.post.filter(pos => pos._id !== post._id );
      mensaje = 'Removido de guardados';
    } else {

      this.post.push(post);
      mensaje = 'Guardado en el dispositivo';
    }

    this.presentToast(mensaje);
    this.storage.set('post', this.post);

    return !existe;
  }



guardarVisitado(visitado: Post) {

  let existe1 = false;
  let mensaje = '';

  for (const vis of this.visitados) {
      if (vis._id === visitado._id) {
        existe1 = true;
        break;
      }
    }

  if (existe1) {
      this.visitados = this.visitados.filter(vis => vis._id !== visitado._id );
      mensaje = 'Removido de visitados';
    } else {

      this.visitados.push(visitado);
      mensaje = 'Agregado a visitados';
    }

  this.presentToast(mensaje);
  this.storage.set('visitados', this.visitados);

  return !existe1;

}


  async cargarFavoritos() {
  const post = await this.storage.get('post');
  this.post = post || [];
  return this.post;
  }


async cargarVisitados() {
const visitado = await this.storage.get('visitados');
this.visitados = visitado || [];
return this.visitados;
}

  async existePost( id: string) {
    await this.cargarFavoritos();
    const existe = this.post.find(pos => pos._id === id);
    return (existe) ? true : false;
  }

  async existeVisitado(id: string) {
    await this.cargarVisitados();
    const existe1 = this.visitados.find(vis => vis._id === id);
    return (existe1) ? true : false;
  }
}
