# callingapi-s-using-service
calling api's using service
EXAMPLE API:
https://jsonplaceholder.typicode.com/posts

stepno1:create a new angular app using below command
       ng new callapi-through-service
stepn02:crete a servie
       ng g service posts  
stepn03:a.import httpclint in service and app module.ts also 
           import {HttpClient}   from '@angular/common/http'
        c.in constructor create http instant
           private http:HttpClient 

           in app.module.ts:
           two steps:
             1.import {HttpClientModule}   from '@angular/common/http'
             2.place HttpClientModule under imports

stepno4: go to the ts file  and import service file

         import:

             import { PostsService } from './posts.service';

        constuctor:

         constructor(private postData:PostsService){} 

         ngOnInit:

         ngOnInit(){
         this.postData.getposts().subscribe(
            (result)=>{
            console.warn("result",result)
                       }
                                            ); 


STEPN05:Calling the things   in html       
        code in html:
        <ul>
  <li *ngFor="let post of data">
    {{post.title}}

  </li>
</ul>                                        
 tsfile:
 create variable
   data:any; 

   and write logic inside arrow fuction to store the result

   this.data=result;