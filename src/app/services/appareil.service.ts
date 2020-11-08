import { Subject } from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService{

  appareilSubject = new Subject<any[]>();

  appareils = [
    {
      id: 1,
      name: 'Machine a laver',
      status: 'Eteint'
    },
    {
      id: 2,
      name: 'Televiseur',
      status: 'Allumer'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'Allumer'
    }
  ];

  constructor(private httpClient: HttpClient) {}

  emitAppareilSubject(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll(){
    for (let appareils of this.appareils){
      appareils.status = "Allumer";
    }
  }

  switchOffAll(){
    for (let appareils of this.appareils){
      appareils.status = "Eteint";
    }
  }

  switchOnOne(index: number){
    this.appareils[index].status = 'Allumer';
  }

  switchOffOne(index: number){
    this.appareils[index].status = 'Eteint';
  }

  addAppareil(name: string, status: string){
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
  }
  saveAppareilToServer(){
    this.httpClient.put('https://http-client-demo-e5f1e.firebaseio.com/appareils.json',
      this.appareils).subscribe(
      () => {
        console.log('Enregistrement termine');
      },
      (error) => {
        console.log('Erreur de sauvegarde', +error);
      }
    );
  }
  getAppareilFromServeur(){
    this.httpClient.get<any[]>('https://http-client-demo-e5f1e.firebaseio.com/appareils.json').subscribe(
      (response) => {
        this.appareils = response;
      },
      (error) => {
        console.log('Erreur de chargement', +error);
      }
    );
  }
}
