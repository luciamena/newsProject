import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Subscription } from 'rxjs';
import { INews } from 'src/app/models/interfaces/News.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, OnDestroy {
  type: Boolean = true;
  newsList: INews[] = [];
  subscription: Subscription | undefined;
  constructor(private newsService: NewsService, private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe({
      next: (response) => {
        this.newsList = response;
      },
      error: error => this.openSnackBar(`An error has occurred.`),
      complete: () => console.log(`Request finished.`),

    });
  }

  ngOnDestroy(): void {
    //this.subscription?.unsubscribe();
    this.newsService.clearData();
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, "X", {
      duration: 3000
    });
  }
}
