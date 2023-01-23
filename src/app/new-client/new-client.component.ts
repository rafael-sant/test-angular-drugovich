import { ListarClientesService } from './../services/listarClientes.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  name: string
  cnpj: string
  status: string

  constructor(private service: ListarClientesService, private router: Router) { }

  ngOnInit() {
  }

  salvar() {

    const clientes = { name: this.name, cnpj: this.cnpj, status: this.status }

    this.service.adicionar(clientes).subscribe(resultado => {
      console.log(resultado)
      this.router.navigateByUrl('list-client')

    }, error => {
      console.error(error)
    })

  }
}
