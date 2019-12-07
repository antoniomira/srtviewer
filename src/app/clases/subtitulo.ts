export class Meta {
    public Title: string;
    public ScriptType: string;
    public WrapStyle: number;
    public PlayResX: number;
    public PlayResY: number;
    public ScaledBorderAndShadow: string;
    public VideoZoom: number;
    public LastStyleStorage: string;
    public Collisions: string;
    public AudioFile: string;
    public VideoZoomPercent: number;
    public ScrollPosition: number;
    public ActiveLine: number;

    constructor() {}
}

export class Style {
    public Name: string;
    public FontName: string;
    public FontSize: number;
    public PrimaryColour: string;
    public SecondaryColour: string;
    public OutlineColour: string;
    public BackColour: string;
    public Bold: number;
    public Italic: number;
    public Underline: number;
    public StrikeOut: number;
    public ScaleX: number;
    public ScaleY: number;
    public Spacing: number;
    public Angle: number;
    public BorderStyle: number;
    public Outline: number;
    public Shadow: number;
    public Alignment: number;
    public MarginL: number;
    public MarginR: number;
    public MarginV: number;
    public Encoding: number;

    constructor() {}
}


export class Time {
    public Hours: number;
    public Minutes: number;
    public Seconds: number;
    public MiliSeconds: number;

    constructor() {}

    // Este método actuará como constructor ya que no se pueden tener dos constructores.
    setTime(timeString: string) {
        console.log(timeString);
    }
}

export class Subtitulo {
    public Layer: number;
    public Start: Time;
    public End: Time;
    public Style: Style;
    public Name: string;
    public MarginL: number;
    public MarginR: number;
    public MarginV: number;
    public Effect: number;
    public Text: string;
    constructor() {}

    setStyle(nameStyle: string, styles: Array<Style>) {
        styles.forEach(estilo => {
            if ( nameStyle === estilo.Name) {
                this.Style = estilo;
                return;
            }
        });
    }
}

export class ArchivoSubtitulo {
    public meta: Meta;
    public styles: Array<Style>;
    public subtitulos: Array<Subtitulo>;
}





// Leer un fichero subido a Angular y parsear su contenido
// https://stackoverflow.com/questions/47581687/angular-read-a-file-and-parse-its-content

// Formato de los estilos
// Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
// Formato de cada línea del subtítulo
// Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text

/*
    let primeraCabecera = false;
    let segundaCabecera = false;
    let terceraCabecera = false;

    // Reconocimiento de cabeceras
    //Si se lee el texto todo de una
    let texto = `Aqui va el texto`;
    // El texto se pasa a un array
    let lineas = texto.split("\n");
    // Quito las líneas vacías
    lineas = lineas.filter( (cadena) => cadena );
    for(let i = 0; i < lineas.length; i++){
      if(lineas[i][0] === '[') {
          if(!primeraCabecera) {
              primeraCabecera = true;
              console.log("Primera cabecera encontrada");
          } else if (!segundaCabecera) {
              segundaCabecera = true;
              console.log("Segunda cabecera encontrada");
          } else if (!terceraCabecera) {
              terceraCabecera = true;
              console.log("Tercera cabecera encontrada");
          }
          continue;
      }

      if(primeraCabecera && !segundaCabecera && !terceraCabecera) {
        lineas[i] = lineas[i].split(": ");
        console.log(lineas[i]);

        switch (lineas[i][0]) {
            case "Title": {
                
                break;
            }

            case "ScriptType": {
                
                break;
            }
            
            case "WrapStyle": {
                
                break;
            }

            case "PlayResX": {
                
                break;
            }
            

            case "PlayResY": {
                
                break;
            }
            

            case "ScaledBorderAndShadow": {
                
                break;
            }
            

            case "Video Zoom": {
                
                break;
            }
            

            case "Last Style Storage": {
                
                break;
            }
            

            case "Collisions": {
                
                break;
            }
            

            case "Audio File": {
                
                break;
            }
            

            case "Video Zoom Percent": {
                
                break;
            }
            

            case "Scroll Position": {
                
                break;
            }
            

            case "Active Line": {
                
                break;
            }
            
                
        }
      }

      if(segundaCabecera && !terceraCabecera) {
        console.log(lineas[i]);
      }

      if(terceraCabecera) {
        console.log(lineas[i]);
      }
    }

    primeraCabecera = segundaCabecera = terceraCabecera = false

    // Reconozco primera cabezera
    // Hago cosas de la primera cabecera

    // Reconozco cosas de la segunda cabecera
    // Hago cosas de la segunda cabecera

    // Reconozco la cabecera de los subtitulos
    // Trato cada línea de los subtítulos
*/

/*
    // Tratamiento de cada línea del subtitulo

    // Meto una línea de prueba del archivo de subtítulos.
    let sub = 'Dialogue: 0,0:00:04.28,0:00:08.66,Steins,,0,0,0,,El universo tuvo un comienzo, pero no tiene fin.';
    // Separo todos los parametros separados con comas se vuelven un array.
    let partesSub = sub.split(',');
    // Quito la palabra 'Dialogue del principio'
    partesSub[0] = (partesSub[0].split(" "))[1];
    // Junto el posible subtitulo que tiene una coma.
    partesSub[9]= (partesSub.slice(9, partesSub.length)).join(",");
    // El texto ya está tratado
*/
