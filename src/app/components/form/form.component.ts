import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UnidadeService } from '../../services/busca-unidades.service';
import { Unidade } from '../../types/unidade.interface';

@Component({
    selector: 'app-form',
    imports: [ReactiveFormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

    resultados: Unidade[] = [];
    resultadosFiltrados: Unidade[] = [];
    formularioAcademias !: FormGroup;

    constructor(private formBuilder:FormBuilder, private unidadeService:UnidadeService){ }

    ngOnInit(): void {
        
        console.log("hey");

        this.unidadeService.buscaTodasUnidades().subscribe(data =>{
            this.resultados = data.locations;
            this.resultadosFiltrados = data.locations;
        });

        this.formularioAcademias = this.formBuilder.group({
            periodo: '',
            mostrarFechadas: false
        })

    }

    onSubmit(){

        if(!this.formularioAcademias.value.mostrarFechadas){

            this.resultadosFiltrados = this.resultados;

        } else {

            this.resultadosFiltrados = this.resultados.filter(unidade => unidade.opened);

        }

    }

    onClean(){

        this.formularioAcademias.reset();

    }


}
