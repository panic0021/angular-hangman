import { Component } from '@angular/core';
import { DataCommunicationService } from '../servisi/data-communication.service';
import { DataSharingService} from '../servisi/data-sharing.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-hang',
  templateUrl: './hang.component.html',
  styleUrl: './hang.component.css'
})
export class HangComponent {
  slike: string[] = ["s9.jpg", "s8.jpg", "s7.jpg", "s6.jpg", "s5.jpg", "s4.jpg", "s3.jpg", "s2.jpg", "s1.jpg"]
  indeks: number = 0;
  private subscription: Subscription;
  methodTriggered: boolean = false;
  smisljenaRec: string;
  private subscriptionWord: Subscription;
  constructor(private dataCommunicationService: DataCommunicationService,private dataSharingService: DataSharingService
  ) {
    this.subscription = this.dataCommunicationService.methodTriggered$.subscribe(() => {
      this.methodTriggered = true;
      this.changePic();
    });
    this.subscriptionWord = this.dataSharingService.sharedData$.subscribe(data => {
      this.smisljenaRec = data;
    });
  }
  refreshPage() {
    window.location.reload();
  }
  changePic() {
    this.indeks = this.indeks + 1
    if (this.indeks == 8) {
      alert("Nemate više pokušaja, reč je bila: "+this.smisljenaRec);
      this.refreshPage();
    }
  }
}
