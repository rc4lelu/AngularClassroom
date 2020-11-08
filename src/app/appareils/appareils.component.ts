import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : string;
  @Input() indexOfAppareil : number;
  @Input() id: number;

  constructor(private appareilService: AppareilService){

  }

  ngOnInit(): void {
  }

  public getStatus(): string{
    return this.appareilStatus;
  }

  public getColor(): string{
    if (this.appareilStatus === 'Allumer'){
      return 'green';
    }
    else if (this.appareilStatus === 'Eteint'){
        return 'red';
    }
  }

  public onSwitchOne(): void {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  public onSwitchOff(): void{
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
