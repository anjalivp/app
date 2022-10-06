import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from './book.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:BookModel[];

  imageWidth:number = 60;
  imageMargin:number = 2;

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
    .subscribe((data:any) =>{
      this.books=this.books.filter(b=>b!==book);
    })
  }

  editBook(book:any)
  {
    localStorage.setItem("editBookId",book._id.toString());
    this.router.navigate(['update']);
  }

}
