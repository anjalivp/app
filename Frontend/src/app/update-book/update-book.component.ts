import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookItem={
    book:'',
    author:'',
    genre:'',
    imageUrl:''
  }

  constructor(private router:Router, private bookService:BookService) { }

  ngOnInit(): void {
    let bookId=localStorage.getItem("editBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
    })
  }

  editBook()
  {
    this.bookService.editBook(this.bookItem);
    localStorage.removeItem('editBookId')
    alert("Update Successful");
    this.router.navigate(['booklist']);
  }

}
