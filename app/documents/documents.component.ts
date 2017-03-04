import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "description here adfasdf",
      file_url: "http://google.com",
      updated_at: "03/02/17",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Polarlicht_2.jpg/1280px-Polarlicht_2.jpg",
    },
    {
      title: "My Second Doc",
      description: "description here adfasdf",
      file_url: "http://google.com",
      updated_at: "03/02/17",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Polarlicht_2.jpg/1280px-Polarlicht_2.jpg",
    },
    {
      title: "My Last Doc",
      description: "description here adfasdf",
      file_url: "http://google.com",
      updated_at: "03/02/17",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Polarlicht_2.jpg/1280px-Polarlicht_2.jpg",
    }
  ]
}