import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface menuItems {
  cols : number;
  rows : number;
  text : string;
  color : string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }

  menuItems : menuItems[] = [
    {text: "Home", cols : 1, rows: 1, color: '#D9D7D7'},
    {text: "Albums", cols : 1, rows: 1, color: '#D9D7D7'},
    {text: "Band", cols : 1, rows: 1, color: '#D9D7D7'},
    {text: "Tour", cols : 1, rows: 1, color: '#D9D7D7'},
    {text: "Socials", cols : 1, rows: 1, color: '#D9D7D7'},
    {text: "Contact", cols : 1, rows: 1, color: '#D9D7D7'}
  ];
  
  ngOnInit() {

  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
