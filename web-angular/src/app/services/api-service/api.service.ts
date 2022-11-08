import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private api: HttpClient
  ) { }

  getFishSpecies() {
    return this.api.get(environment.apiBase + 'species')
  }
}