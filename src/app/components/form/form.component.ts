import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UnidadeService } from '../../services/busca-unidades.service';
import { Unidade } from '../../types/unidade.interface';
import { FiltrarUnidadesService } from '../../services/filtrar-unidades.service';

type HORARIO_INDICES = 'manha' | 'tarde' | 'noite';

const HORARIO_FUNCIONAMENTO = {
    manha:{
        inicio: 6,
        fim: 12
    },
    tarde:{
        inicio: 12,
        fim: 18
    },
    noite:{
        inicio: 18,
        fim: 23
    }
}


@Component({
    selector: 'app-form',
    imports: [ReactiveFormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{

    @Output() submitEvent = new EventEmitter();
    formularioAcademias !: FormGroup;
    unidades: Unidade[] = [];

    constructor(private formBuilder:FormBuilder, private filtrarUnidadesService:FiltrarUnidadesService){ }

    private setarTodasUnidades():void {
        this.unidades = this.filtrarUnidadesService.buscarTodasUnidades();
    }

    ngOnInit():void {

        this.formularioAcademias = this.formBuilder.group({
            periodo: '',
            mostrarFechadas: false
        })

        this.setarTodasUnidades();
        
    }

    onSubmit():void {

        // Filtro por horário
        const horarioEscolhido = HORARIO_FUNCIONAMENTO[this.formularioAcademias.value.periodo as HORARIO_INDICES];
        const mostrarFechadas  = this.formularioAcademias.value.mostrarFechadas;   

        this.unidades = this.filtrarUnidadesService
            .filtrarUnidades(
                horarioEscolhido.inicio,
                horarioEscolhido.fim,
                mostrarFechadas
            );

        this.submitEvent.emit();

    }

    onClean():void {

        this.formularioAcademias.reset();

    }


}