import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http:HttpClient) {}

  users: User[] //Usado para visualizar a resposta da API no template

  ngOnInit() {
    let observable = this.http
    .get("https://randomuser.me/api/?page=1&results=10&inc=name,email,picture,cell")

    //results é o objeto da resposta que contem a lista de usuarios aleatorios
    observable.subscribe((response) => this.users = response.results)
  }
}
