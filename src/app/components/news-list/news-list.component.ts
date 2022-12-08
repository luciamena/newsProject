import { Component, OnInit, Input } from '@angular/core';
import { INews } from 'src/app/models/interfaces/News.interface';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {


  @Input() typeOfNews: Boolean | undefined;
  @Input() newsList: INews[] | undefined;
  subscription: Subscription | undefined;
  constructor(
    private newsService: NewsService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {


  }
  archiveNews(news: INews) {
    if (confirm(`Do you want to archive the news ${news.title}?`) == true) {

      this.subscription = this.newsService.updateArchive(news._id).subscribe({
        next: (response) => {
          if (!response.success) {
            this.openSnackBar(response.message)
            return;
          }

          this.reloadListNews();
          this.openSnackBar(response.message)
        },
        error: error => this.openSnackBar(`An error has occurred.`),
        complete: () => console.log(`Request finished.`),

      });
    }

  }

  deleteNews(news: INews) {
    if (confirm(`Do you want to remove the news ${news.title}?`) == true) {

      this.subscription = this.newsService.deleteNew(news._id).subscribe({
        next: (response) => {
          if (!response.success) {
            this.openSnackBar(response.message)
            return;
          }
          this.reloadListArchive();
          this.openSnackBar(response.message)
        },
        error: error => this.openSnackBar(`An error has occurred.`),
        complete: () => console.log(`Request finished.`),
      });

    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "X", {
      duration: 3000
    });
  }
  reloadListNews(): void {
    this.newsService.resetAllNews();
  }
  reloadListArchive(): void {
    this.newsService.resetAllArchive();
  }
}


