import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    // canActivate: [ UsuarioGuard] 
    canLoad: [UsuarioGuard]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main/tabs/menu'
  },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'mapa', loadChildren: './pages/mapa/mapa.module#MapaPageModule' },






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
