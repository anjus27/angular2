import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Student} from './Student';
import { store } from '@angular/core/src/render3';
import { Observable, throwError } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewservService {
  Student: Student[];
  constructor(private http:HttpClient) {
    
   }
   store(Student:Student):Observable<Student[]> {
     return this.http.post(`http://localhost/reg.php`, {data:Student }).pipe(map((res) =>{
       this.Student=(res['data']);
       return this.Student;
     }),
    catchError(this.handleError));
   }
   private handleError(error:HttpErrorResponse){
     console.log(error);
     return throwError('error....');
   }
   
}
