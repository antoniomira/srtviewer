import { Component, OnInit, Input } from '@angular/core';
import { Meta } from '../../clases/subtitulo';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss']
})
export class MetaComponent implements OnInit {

  @Input() meta: Meta;

  constructor() { }

  ngOnInit() {
  }

}
