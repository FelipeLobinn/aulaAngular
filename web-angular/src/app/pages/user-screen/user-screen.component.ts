import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }
  irMenu(){
    this.route.navigate(['menu-page'])
  }

  abrirLogin() {
    let div = document.getElementById('loginForm');
    
    this.fecharCadastro()
    div!.style.display = "inline";
  }

  abrirCadastro() {
    let div = document.getElementById('cadastroForm');
    
    this.fecharLogin()

    div!.style.display = "inline";
  }

  fecharLogin() {
    let div = document.getElementById('loginForm');
    
    div!.style.display = "none";
  }

  fecharCadastro() {
    let div = document.getElementById('cadastroForm');
    
    div!.style.display = "none";
  }
}
