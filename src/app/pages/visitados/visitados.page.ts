import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { Post } from '../../interfaces/interfaces';


@Component({
  selector: 'app-visitados',
  templateUrl: './visitados.page.html',
  styleUrls: ['./visitados.page.scss'],
})
export class VisitadosPage implements OnInit {

  visitados: Post[] = [];
  constructor(private dataLocal: DataLocalService) { }

 async ngOnInit() {

this.visitados = await this.dataLocal.cargarVisitados();

  }



}
