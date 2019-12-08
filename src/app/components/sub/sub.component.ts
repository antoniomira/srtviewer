import { Component, OnInit, Input } from '@angular/core';
import { Subtitulo } from 'src/app/clases/subtitulo';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {

  @Input() subtitulos: Array<Subtitulo>;

  constructor() { }

  ngOnInit() {
  }

}
