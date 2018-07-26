import { Component, OnInit } from '@angular/core';

import { CallWebAPIService } from '../providers/call-web-api.service'

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [CallWebAPIService]
})
export class MemberComponent implements OnInit {

  members = [];

  constructor(private call : CallWebAPIService) {
      // this.members = [{ id: 1 , name : "aaaa"},
      //                 { id: 2 , name : "bbb"}];
  }

  ngOnInit() {

    this.getMemberList();
  }

  getMemberList(){

    this.call.callMember()
    .subscribe(val => {
        // console.log(val);
        if(val.status){
          this.members = val.data;
        }
        
    });

  }

  showId(val){
    alert(val)
  }

}
