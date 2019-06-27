import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i2-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  autor:string="";
  comentario:string="";
  incremento:number=1;

  comments:Array<Object> = [
    {id:this.incremento,
     name:"Juanito",
     comment:"Esto es el principio"}
  ];

  constructor() { }

  ngOnInit() {
  }

  AnadirComentario() {
    this.comments.push({
      id:++this.incremento,
      name:this.autor,
      comment:this.comentario});
    this.autor="";
    this.comentario="";
  }

  TrackerFunction(index:number, coment:any) {
    return coment.id;
  }
}
