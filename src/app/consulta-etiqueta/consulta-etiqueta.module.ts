import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultaEtiquetaPage } from './consulta-etiqueta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaEtiquetaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultaEtiquetaPage]
})
export class ConsultaEtiquetaPageModule {}
