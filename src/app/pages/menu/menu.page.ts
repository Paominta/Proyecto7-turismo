import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  slides = [
    {
      img: 'assets/lagunasVerdes.jpg',
      titulo: 'Lagunas Verdes'

    },
    {
      img: 'assets/ayora.jpg',
      titulo: 'Parque Ayora'

    },
    {
      img: 'assets/cementerio.jpg',
      titulo: 'Cementerio José María Azaél'
    },
    {
      img: 'assets/letras.jpg',
      titulo: 'Letras en 3D'

    },
    {
      img: 'assets/tufiño.jpg',
      titulo: 'Piscinas en Tufiño'

    }
  ];
  constructor(public dataLocal: DataLocalService) { }

  ngOnInit() {
  }

  abrirCategoria(categoria) {
    console.log ('categoria', categoria);
    this.dataLocal.abrirCategoria(categoria);

  }

}
