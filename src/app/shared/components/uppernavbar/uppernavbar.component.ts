import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, IonMenu, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-uppernavbar',
  standalone:true,
  imports:[ CommonModule, RouterLink, IonicModule],
  templateUrl: './uppernavbar.component.html',
  styleUrls: ['./uppernavbar.component.scss'],
})
export class UppernavbarComponent  implements OnInit {
  @ViewChild('rightMenu') menu!: IonMenu;

  constructor(private menuController: MenuController) { }

  ngOnInit() {}

  openMenu() {
    this.menuController.open('rightMenu');
  }

}
