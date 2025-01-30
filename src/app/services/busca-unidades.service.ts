import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnidadesResponse } from '../types/unidades-response.interface';
import { Unidade } from '../types/unidade.interface';

@Injectable({
    providedIn: 'root'
})
export class UnidadeService {

    readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

    private todasUnidadesSubject:BehaviorSubject<Unidade[]> = new BehaviorSubject<Unidade[]>([])
    private todasUnidades$: Observable<Unidade[]> = this.todasUnidadesSubject.asObservable();
    private todasUnidadesFiltradas: Unidade[] = [];

    constructor(private httpClient:HttpClient) {

        this.httpClient.get<UnidadesResponse>(this.apiUrl).subscribe(data =>{

            this.todasUnidadesSubject.next(data.locations);
            this.todasUnidadesFiltradas = data.locations;

        })

     }

     buscarTodasUnidades():Observable<Unidade[]> {

         return this.todasUnidades$;

     }

     buscarUnidadesFiltradas():Unidade[] {

         return this.todasUnidadesFiltradas;

     }

     setarUnidadesFiltradas(unidades:Unidade[]):void {

         this.todasUnidadesFiltradas = unidades;

     }

}
