import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  constructor(private appComponent: AppComponent) { }
  editing = false; //Variavel responsavel por habilitar os inputs

  @ViewChild('cell') cell: ElementRef //<input> que contém o numero de telefone
  @ViewChild('email') email: ElementRef//<input> que contém o email
  @ViewChild('fullName') fullName: ElementRef //<input> que contém o nome

  @Input() user: User;

  //Habilitar e desabilitar os <input> quando clickar no botão Editar
  toggleEdit() {
    this.editing = !this.editing 

    //Se for falso, significa que o usuario apertou o botão para salvar
    if (!this.editing)
      this.updateUserInfo()
  }

  //Atualiza os dados do usuario baseado nos valores informados nos <input>
  updateUserInfo() {
    this.user.cell = this.cell.nativeElement.value
    this.user.email = this.email.nativeElement.value
    //O nome completo é recebido em um campo só
    //Separa o primeiro nome do resto
    let fullName: string = this.fullName.nativeElement.value
    let division = fullName.indexOf(' ')
    this.user.name.first = fullName.substring(0, division)
    //+1 porque sem ele o espaço é incluido como parte do sobrenome
    this.user.name.last = fullName.substring(division+1)

    console.log(this.user)
  }

  //Remover o usuario da lista quando clickar no botao X
  deleteUser() {
    this.appComponent.users = this.appComponent.users.filter(obj => obj !== this.user);
    console.log(this.appComponent.users)
  }

}
