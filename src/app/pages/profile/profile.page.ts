import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonGrid,IonRow,IonCol, IonBackButton, IonButtons, IonButton } from '@ionic/angular/standalone';
import { LowernavbarComponent } from 'src/app/shared/components/lowernavbar/lowernavbar.component';
import { UppernavbarComponent } from 'src/app/shared/components/uppernavbar/uppernavbar.component';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar,IonRow,IonCol,IonTitle, IonButtons, IonButton, IonContent, IonBackButton, UppernavbarComponent, LowernavbarComponent, IonGrid],
})
export class ProfilePage {
  constructor() {}
}
