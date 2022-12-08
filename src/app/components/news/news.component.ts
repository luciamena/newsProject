import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { INews } from 'src/app/models/interfaces/News.interface';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() news: INews | undefined;
  @Input() newsArray: INews[] | undefined;
  @Input() typeNews: Boolean | undefined;
   @Output() delete: EventEmitter<INews> = new EventEmitter<INews>();
  @Output() archive: EventEmitter<INews> = new EventEmitter<INews>();
  constructor() { }

  ngOnInit(): void {
  }

  archiveNews() {
    console.log("archivar noticia");
    this.archive.emit(this.news)

  }

  deleteNews() {
    console.log("eliminar noticia", this.news?.title);
    this.delete.emit(this.news)

  }


}
