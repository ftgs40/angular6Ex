import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CallWebAPIService {

  linkGetmember : string = "http://nel008.dcs.corp/workshopAngular6/getMember.php";

  constructor(public http: Http) { 
    console.log('CallWebAPIService Provider');
  }

  callMember(){
    return this.http.get(this.linkGetmember).pipe(
      map((response:Response) => response.json())
    );
  }
}
