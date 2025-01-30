import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UnidadeService } from '../../services/busca-unidades.service';

@Component({
    selector: 'app-form',
    imports: [ReactiveFormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

    resultados = [];
    formularioAcademias !: FormGroup;

    constructor(private formBuilder:FormBuilder, private unidadeService:UnidadeService){ }

    ngOnInit(): void {
        
        console.log("hey");

        this.unidadeService.buscaTodasUnidades().subscribe(data => console.log(data));

        this.formularioAcademias = this.formBuilder.group({
            periodo: '',
            mostrarFechadas: false
        })

    }

    onSubmit(){

        console.log("submit");

    }

    onClean(){

        this.formularioAcademias.reset();

    }


}
