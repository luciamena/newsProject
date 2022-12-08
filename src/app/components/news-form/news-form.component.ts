import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from "@angular/forms";
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { INews } from 'src/app/models/interfaces/News.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  newsForm: FormGroup = new FormGroup({});
  postNews: INews | undefined;
  subscription: Subscription | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    private _snackBar: MatSnackBar,

  ) {
  }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group(
      {
        title: ["", Validators.required],
        description: ["", Validators.required],
        content: ["", Validators.required],
        author: ["", Validators.required]
      }
    );

    //this.newsForm.valueChanges.subscribe((value) => console.log(value));
  }


  sendForm(formDirective: FormGroupDirective) {
    if (this.newsForm.valid) {
      this.subscription = this.newsService.addNews(this.newsForm.value).subscribe({
        next: (response) => {
          if (!response.success) {
            this.openSnackBar(response.message)
            return;
          }
          formDirective.resetForm();
          this.newsForm.reset();
          //ToDo correcto recargar
          //ToDo correcto recargar
          this.reloadList();
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
  reloadList(): void {
    this.newsService.resetAllNews();
  }
}
