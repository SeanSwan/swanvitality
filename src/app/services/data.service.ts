import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
    users:string[];

    constructor(){
        this.users = ['Sean','Jazzypoo', 'Saniya', 'Kai' ,'Mom'];
    }


getUsers(){
    return this.users;
    }

}