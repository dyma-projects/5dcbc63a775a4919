import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public exos1:string = 'lien wiki';
  public lien:string = 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal'
  constructor() { }

  ngOnInit(): void {
  }

  public success(){
    alert('Vous avez réussi exo 1')
  }

}
