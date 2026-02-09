import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lowernavbar',
  standalone:true,
  imports:[ CommonModule, RouterLink, IonicModule],
  templateUrl: './lowernavbar.component.html',
  styleUrls: ['./lowernavbar.component.scss'],
})
export class LowernavbarComponent  implements OnInit {
  constructor() {}
  ngOnInit() {}

  openModal() {
    // Aquí puedes agregar la lógica para abrir un modal
  }

}
