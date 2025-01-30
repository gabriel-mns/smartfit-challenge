import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnidadesResponse } from '../types/unidades-response.interface';

@Injectable({
    providedIn: 'root'
})
export class UnidadeService {

    readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

    constructor(private httpClient:HttpClient) { }

    buscaTodasUnidades(): Observable<UnidadesResponse>{

        return this.httpClient.get<UnidadesResponse>(this.apiUrl)

    }

}
