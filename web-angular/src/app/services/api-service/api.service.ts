import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private api: HttpClient
  ) { }

  getFishSpecies() : Observable<any[]> {
    return this.api.get<any>(environment.apiBase + 'species').pipe(map((el) => el.slice(0,30)))
  }
}
