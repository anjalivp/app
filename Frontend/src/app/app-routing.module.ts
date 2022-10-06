import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NewBookComponent } from './new-book/new-book.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [{path:'booklist',component:BookListComponent},
{path:'add',component:NewBookComponent},
{path:'update',component:UpdateBookComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'',component:HomeComponent},
{path:'landingpage',component:LandingPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
