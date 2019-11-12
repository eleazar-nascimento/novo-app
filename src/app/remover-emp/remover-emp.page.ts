import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-remover-emp',
  templateUrl: './remover-emp.page.html',
  styleUrls: ['./remover-emp.page.scss'],
})
export class RemoverEmpPage implements OnInit {

  constructor(public popoverController: PopoverController) { }
  
  ngOnInit() {
  }
  
  
  customAlertOptions: any = {
    header: 'Remover Emp da UA',
    subHeader: 'Selecione um ou vários',
    message: 'Remoção rápida',
    translucent: true
  };
  }
  
  




