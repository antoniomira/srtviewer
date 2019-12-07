import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  @Output() messajeEvent = new EventEmitter();

  fileToUpload: File;

  constructor() { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    const reader = new FileReader();
    reader.readAsText(this.fileToUpload, 'UTF-8');
    reader.onload = (evt) => {
        //console.log(evt.target.result.toString());
        //console.log(evt.target.result);
        this.messajeEvent.emit(evt.target.result.toString());
    };

    reader.onerror = (evt) => {
        console.log('Fallo al leer el archivo');
    };
    //console.log(this.fileToUpload);
  }
}
