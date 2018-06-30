import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * 1. Avoid injecting *store* to a service
 * 2. Service does not need to know if we are using NGRX
 * 3. Keep functions simple, one task one function
 * 4. Keep functions which needs to accessed from Effects as public
 */

@Injectable()
export class {{ properCase name }}Service {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get('https://yourapi.com');
  }

}
