import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.page.html',
  styleUrls: ['./guardados.page.scss'],
})
export class GuardadosPage implements OnInit {
  posts: Post[] = [];
  constructor(private dataLocal: DataLocalService) { }

  async ngOnInit() {
    this.posts = await this.dataLocal.cargarFavoritos();
  }

}
