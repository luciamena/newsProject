import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Subscription } from 'rxjs';
import { INews } from 'src/app/models/interfaces/News.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.scss']
})
export class ArchivePageComponent implements OnInit, OnDestroy {
  type: Boolean = false;
  archiveList: INews[] = [];
  subscription: Subscription | undefined;

  constructor(private newsService: NewsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.newsService.getAllArchive().subscribe({
      next: (response) => {
        this.archiveList = response;
      },
      error: error => this.openSnackBar(`An error has occurred.`),
      complete: () => console.log(`Request finished.`),

    });
  }
  ngOnDestroy(): void {
    this.newsService.clearData();
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, "X", {
      duration: 3000
    });
  }
}
