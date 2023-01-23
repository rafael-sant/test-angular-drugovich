import { ListarClientesService } from './../services/listarClientes.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-client-listing",
  templateUrl: "./client-listing.component.html",
  styleUrls: ['./client-listing.component.css'],
})


export class ClientListing implements OnInit {

  clientes: Array<any> = new Array()

  constructor(private ListarClientesService: ListarClientesService) {

  }

  ngOnInit() {
    this.listarClientes()
  }

  listarClientes() {

    this.ListarClientesService.listarClientes().subscribe({
      next: (clientes) => {
        this.clientes = clientes
      },
      error: (erro) => {
        console.log("Erro ao listar clientes", erro)
      }
    })
  }
}

// A api funciona em um servidor local, para conseguir rodar, seguir o passo a passo à baixo
// npm install -g json-server
// json-server --watch db.json na pasta dados para rodar a api
// e após isso, rodar o projeto normalmente.
