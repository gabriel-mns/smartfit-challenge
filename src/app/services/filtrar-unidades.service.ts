import { Injectable } from '@angular/core';
import { Unidade } from '../types/unidade.interface';
import { UnidadeService } from './busca-unidades.service';




@Injectable({
	providedIn: 'root'
})
export class FiltrarUnidadesService {

	unidades: Unidade[] = [];

	constructor(private unidadeService:UnidadeService) { 

		this.inicializarUnidades();

	}

	private inicializarUnidades(): void {

        this.unidadeService.buscaTodasUnidades().subscribe( data => {
            this.unidades = data.locations;
        });

    }

	transformarDiaSemana(weekday: number):string{

        switch(weekday){
            case 0:
                return "Dom.";
            case 6:
                return 'Sáb.'
            default:
                return 'Seg. à Sex.'
        }

    }

	buscarTodasUnidades(){

		return this.unidades;

	}

	filtrarUnidades(horarioInicioCliente:number, horarioFimCliente: number, mostrarFechadas: boolean){

		let unidadesFiltradas = this.unidades.filter(unidade => unidade.opened || mostrarFechadas);

		unidadesFiltradas = unidadesFiltradas.filter(
			unidade => this.filtrarUnidadeHorario(
										unidade,
										horarioInicioCliente, 
										horarioFimCliente
									));

		return unidadesFiltradas;

	}

    filtrarUnidadeHorario(unidade:Unidade, horarioInicioCliente:number, horarioFimCliente: number): boolean{

        let dia_semana_atual = this.transformarDiaSemana(new Date().getDay());

        if(!unidade.schedules) return true;

        for(let i = 0; i < unidade.schedules.length; i++){

            let horario_academia    = unidade.schedules[i].hour;
            let dia_semana_academia = unidade.schedules[i].weekdays;


            if( dia_semana_atual === dia_semana_academia){
                
                //vai retornar true pq vai ser filtrado pelo outro filtro de unidades fechadas
                if(!unidade.opened) return true;

                let [unidade_horario_inicio_str, unidade_horario_fim_str] = horario_academia.replace('h','').split(' às ');
                let unidade_horario_inicio = parseInt(unidade_horario_inicio_str,10);
                let unidade_horario_fim = parseInt(unidade_horario_fim_str,10);

                // Se o cliente chega depois do ou no horário de início
                // e sai antes do ou no horário de fim
                return horarioInicioCliente >= unidade_horario_inicio && horarioFimCliente <= unidade_horario_fim;

            }

        }

        return false;

    }

}
