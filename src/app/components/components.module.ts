import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { MapaComponent } from './mapa/mapa.component';
import { LugaresComponent } from './lugares/lugares.component';
import { LugarComponent } from './lugar/lugar.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    DetalleComponent,
    AvatarSelectorComponent,
    MapaComponent,
    LugarComponent,
    LugaresComponent
  ],
  exports: [
    PostsComponent,
    AvatarSelectorComponent,
    LugaresComponent,
    PostComponent,
    DetalleComponent,
    LugarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ]
})
export class ComponentsModule { }
