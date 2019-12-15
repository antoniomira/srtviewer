import { Component } from '@angular/core';
import { Meta, Subtitulo, Style } from './clases/subtitulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'srtviewer';
  fileToUpload: File = null;
  text: string;
  public subs: Array<Subtitulo> = [];
  public meta: Meta;
  public styles: Array<Style> = [];
  archivoCargado = false;

  constructor() {}

  recieveMessage($event: string) {
    this.archivoCargado = false;
    this.subs = [];
    this.styles = [];

    this.text = $event;
    console.log(this.text);

    this.meta = new Meta();

    let primeraCabecera = false;
    let segundaCabecera = false;
    let terceraCabecera = false;

    // Reconocimiento de cabeceras
    // Si se lee el texto todo de una
    const texto = this.text;

    // El texto se pasa a un array
    let lineas: any[] = texto.split('\n');
    // Quito las líneas vacías
    lineas = lineas.filter( (cadena) => cadena );
    for (let i = 0; i < lineas.length; i++) {
      if (lineas[i][0] === '[') {
          if (!primeraCabecera) {
              primeraCabecera = true;
              // console.log('Primera cabecera encontrada');
          } else if (!segundaCabecera) {
              segundaCabecera = true;
              // console.log('Segunda cabecera encontrada');
          } else if (!terceraCabecera) {
              terceraCabecera = true;
              // console.log('Tercera cabecera encontrada');
          }
          continue;
      }

      if (primeraCabecera && !segundaCabecera && !terceraCabecera) {
        lineas[i] = lineas[i].split(': ');

        switch (lineas[i][0]) {
            case 'Title': {
              this.meta.Title = lineas[i][1];
              break;
            }
            case 'ScriptType': {
              this.meta.ScriptType = lineas[i][1];
              break;
            }
            case 'WrapStyle': {
              this.meta.WrapStyle = lineas[i][1];
              break;
            }
            case 'PlayResX': {
              this.meta.PlayResX = lineas[i][1];
              break;
            }
            case 'PlayResY': {
              this.meta.PlayResY = lineas[i][1];
              break;
            }
            case 'ScaledBorderAndShadow': {
              this.meta.ScaledBorderAndShadow = lineas[i][1];
              break;
            }
            case 'Video Zoom': {
              this.meta.VideoZoom = lineas[i][1];
              break;
            }
            case 'Last Style Storage': {
              this.meta.LastStyleStorage = lineas[i][1];
              break;
            }
            case 'Collisions': {
              this.meta.Collisions = lineas[i][1];
              break;
            }
            case 'Audio File': {
              this.meta.AudioFile = lineas[i][1];
              break;
            }
            case 'Video Zoom Percent': {
              this.meta.VideoZoomPercent = lineas[i][1];
              break;
            }
            case 'Scroll Position': {
              this.meta.ScrollPosition = lineas[i][1];
              break;
            }
            case 'Active Line': {
              this.meta.ActiveLine = lineas[i][1];
              break;
            }
        }
      }



      if (segundaCabecera && !terceraCabecera) {
        lineas[i] = lineas[i].split(': ');
        if (lineas[i][0] === 'Style') {
          lineas[i] = lineas[i][1].split(',');
          if (lineas[i].length === 23) {
            const style = new Style();
            style.Name = lineas[i][0];
            style.FontName = lineas[i][1];
            style.FontSize = lineas[i][2];
            style.PrimaryColour = lineas[i][3];
            style.SecondaryColour = lineas[i][4];
            style.OutlineColour = lineas[i][5];
            style.BackColour = lineas[i][6];
            style.Bold = lineas[i][7];
            style.Italic = lineas[i][8];
            style.Underline = lineas[i][9];
            style.StrikeOut = lineas[i][10];
            style.ScaleX = lineas[i][11];
            style.ScaleY = lineas[i][12];
            style.Spacing = lineas[i][13];
            style.Angle = lineas[i][14];
            style.BorderStyle = lineas[i][15];
            style.Outline = lineas[i][16];
            style.Shadow = lineas[i][17];
            style.Alignment = lineas[i][18];
            style.MarginL = lineas[i][19];
            style.MarginR = lineas[i][20];
            style.MarginV = lineas[i][21];
            style.Encoding = lineas[i][22];
            this.styles.push(style);
          }
        }
      }

      if (terceraCabecera) {
        lineas[i] = lineas[i].split('Dialogue: ');
        if (lineas[i][0] === '') {
          lineas[i] = lineas[i][1].split(',');
          lineas[i][9] = (lineas[i].slice(9, lineas[i].length)).join(',');
          lineas[i].splice(10, lineas[i].length - 10);
          const sub: Subtitulo = new Subtitulo();
          sub.Layer = lineas[i][0];
          sub.Start = lineas[i][1];
          sub.End = lineas[i][2];
          sub.setStyle(lineas[i][3], this.styles);
          sub.Name = lineas[i][4];
          sub.MarginL = lineas[i][5];
          sub.MarginR = lineas[i][6];
          sub.MarginV = lineas[i][7];
          sub.Effect = lineas[i][8];
          sub.Text = lineas[i][9];
          this.subs.push(sub);
        }
      }
    }

    this.archivoCargado = true;
    console.log(this.meta);
    console.log(this.styles);
    console.log(this.subs);
  }
}
