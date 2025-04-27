
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: false,
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formContato = this.fb.group({
      nome: ["", [
        Validators.minLength(4),
        Validators.required
      ]],
      assunto: ["", [
        Validators.minLength(10),
        Validators.required
      ]],
      telefone: ["", [
        Validators.minLength(11),
        Validators.required
      ]],
      email: ["", [
        Validators.email,
        Validators.required
      ]],
      mensagem: ["", [
        Validators.minLength(20),
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {}

  enviarFormulario(){
    alert("mensagem enviada!");
    this.formContato.reset();
  }
}


