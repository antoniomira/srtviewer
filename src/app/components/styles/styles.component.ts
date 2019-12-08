import { Component, OnInit, Input } from '@angular/core';
import { Style } from '../../clases/subtitulo';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {

  @Input() styles: Array<Style>;

  constructor() { }

  ngOnInit() {
  }

}
