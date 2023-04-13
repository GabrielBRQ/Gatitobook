import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { environment } from 'src/environments/environment';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post(`http://localhost:3000/user/signup`, novoUsuario);
  };

  verificaUsuarioExistente(nomeUsuario: string){
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}
