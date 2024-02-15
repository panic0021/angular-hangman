import { Component, OnInit } from '@angular/core';
import { FileReadService } from '../servisi/file-read.service';
import { DataSharingService } from '../servisi/data-sharing.service';
import { DataCommunicationService } from '../servisi/data-communication.service';


@Component({
  selector: 'app-file-display',
  templateUrl: './file-display.component.html',
  styleUrl: './file-display.component.css'
})
export class FileDisplayComponent implements OnInit {
  fileContent: string = "";
  smisljenaRec: string;
  ulaz: string = "";
  crte: string = "";
  pokusaji: string = "";
  constructor(private fileService: FileReadService, private dataSharingService: DataSharingService, private dataCommunicationService: DataCommunicationService
  ) { }
  ngOnInit() {
    this.fileService.getFileContent().subscribe(
      (content) => (this.fileContent = content),
      (error) => console.error('Error fetching file content', error)
    );
  }

  randomRec(fajl: string) {
    const wordsRegex = /(?:^|\W)[\wščćđžŠČĆĐŽ'’`´]+(?:$|\W)/g;
    let reci = fajl.match(wordsRegex);
    let randomindeks = Math.floor(Math.random() * 35)
    this.smisljenaRec = reci[randomindeks];
    console.log(this.smisljenaRec);
    this.dataSharingService.setSharedData(this.smisljenaRec);
    this.ispisiCrte();
  }
  ispisiCrte() {
    this.crte = "";
    for (let i = 0; i < this.smisljenaRec.length - 2; i++) {
      this.crte = this.crte + "_ "
    }
  }
  proveriSlovo() {
    let rec: string = this.smisljenaRec.trim();
    let ima: boolean = false;
    if (this.ulaz.length > 1 || !(/^[a-zčćšđž]+$/.test(this.ulaz))) {
      alert('Greška, unesite jedno slovo.')
    } else {
      for (let i = 0; i < rec.length; i++) {
        if (rec[i] == this.ulaz) {
          this.crte = this.zameniSlovo(this.crte, i * 2, this.ulaz);
          ima = true;
        }
      }
      if (this.crte.replace(/ /g, "") == rec) {
        alert("Pogodili ste reč!");
        window.location.reload();
        return;
      }
      if (!ima) {
        // alert("Slovo ne postoji u reci.")
        this.dataCommunicationService.triggerMethod();
      }
      this.pokusaji = this.pokusaji + this.ulaz + ",";
    }
    this.ulaz = "";
  }
  provera() {
    if (this.ulaz == this.smisljenaRec.trim()) {
      alert("Pogodili ste reč!");
      this.crte=this.ulaz;
      window.location.reload();
    } else {
      alert("Pogrešna reč.")
      this.dataCommunicationService.triggerMethod();
    }
    this.ulaz = "";
  }
  zameniSlovo(ulazniString: string, indeks: number, novoSlovo: string): string {
    let izlazniString =
      ulazniString.substring(0, indeks) + novoSlovo + ulazniString.substring(indeks + 1);

    return izlazniString;
  }
}
