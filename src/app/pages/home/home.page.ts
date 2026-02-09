import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton } from '@ionic/angular/standalone';
import { LowernavbarComponent } from 'src/app/shared/components/lowernavbar/lowernavbar.component';
import { UppernavbarComponent } from 'src/app/shared/components/uppernavbar/uppernavbar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, UppernavbarComponent,LowernavbarComponent],
})
export class HomePage {
  constructor() {}
}
