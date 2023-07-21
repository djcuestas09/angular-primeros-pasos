import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman'];
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }

}
