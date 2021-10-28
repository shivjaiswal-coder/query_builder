import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor(private httpclient: HttpClient) { }

  getallRules(){
    return this.httpclient.get('http://localhost:3000/getrules')
  }
}
