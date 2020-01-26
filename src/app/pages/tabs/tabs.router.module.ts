import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },

      {
        path: 'mapa',
        children: [
          {
            path: '',
            loadChildren: '../mapa/mapa.module#MapaPageModule'
          }
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: '../menu/menu.module#MenuPageModule'
          },
          {
            path: 'categoria/:cat',
            loadChildren: '../categoria/categoria.module#CategoriaPageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          },
          {
            path: 'tab2',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          },
          {
            path: 'perfil',
            loadChildren: '../perfil/perfil.module#PerfilPageModule'
          },
          {
            path: 'guardados',
            loadChildren: '../guardados/guardados.module#GuardadosPageModule'
          },
          {
            path: 'visitados',
            loadChildren: '../visitados/visitados.module#VisitadosPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
