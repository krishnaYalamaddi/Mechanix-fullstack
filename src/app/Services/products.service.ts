// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'; 
// // import { Observable, throwError } from 'rxjs';
// // import { catchError, retry} from 'rxjs/operators';

import { Product } from "../classes/product";

// // @Injectable()

export class ProductsService{
    constructor(){}

    getProductDetails(){
        return fetch("http://localhost:3000/products").then(res =>res.json()); 
    }


    addProductDetails(data:Product){
        let options = {
            method:'POST',
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data)
        }
        return fetch("http://localhost:3000/products", options).then(res => res.json());
    }
    
}