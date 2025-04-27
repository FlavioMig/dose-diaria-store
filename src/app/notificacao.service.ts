import { Injectable, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService implements OnInit{

  constructor(
    private snackBar: MatSnackBar
  ) { }

  

  ngOnInit(): void {
    
  }

  notificar(mensagem:string){
    this.snackBar.open(mensagem, "OK",{
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    });

   

  }
}
