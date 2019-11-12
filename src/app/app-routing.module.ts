import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule) },
  { path: 'consulta-etiqueta', loadChildren: './consulta-etiqueta/consulta-etiqueta.module#ConsultaEtiquetaPageModule' },
  { path: 'remover-emp', loadChildren: './remover-emp/remover-emp.module#RemoverEmpPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
