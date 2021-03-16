import { Product } from './models/products';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class productService  {
token
isAdmin=new BehaviorSubject<any>(!!localStorage.getItem('isAdmin'))



 constructor(private http:HttpClient){
   
 }
  
 
  
 

 
  
    
getToken() {
  return localStorage.getItem('access_token');
  
}
    
getProducts():Observable<any>{
  return this.http.get('home')

}

  getProduct(id):Observable<any>{
   return this.http.get<any>(`product/${id}`)
   
  }
getCart():Observable<any>{

  return this.http.get<any>(`cart`,{ headers: new HttpHeaders({'x-access-token':this.getToken()})})
}

getCartItem(id):Observable<any>{
  let productId=id

   return this.http.get<any>(`cart/${productId}`,{ headers: new HttpHeaders({'x-access-token':this.getToken()})})
 }

 deleteCartItem(id):Observable<any>{
  let cartId={cartId:id}

   return this.http.post<any>(`cart/delete`,cartId,{ headers: new HttpHeaders({'x-access-token':this.getToken()})})
 }
AddToCart(name,price,amount,productId):Observable<any>{
  let data={
    name,price,amount,productId
  }
   return this.http.post<any>(`cart`,data,{ headers: new HttpHeaders({'x-access-token':this.getToken()})})
 }

 decreaseItem(id):Observable<any>{
  let data={
    cartId:id
  }
   return this.http.post<any>(`cart/decrease`,data,{ headers: new HttpHeaders({'x-access-token':this.getToken()})})
 }
 deleteAllItems():Observable<any>{
  
   return this.http.delete<any>(`cart/deleteAll`,{ headers: new HttpHeaders({'x-access-token':this.getToken()})})
 }


 addProduct(name,price,description, category,file):Observable<any>{
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', name);
  formData.append('price',price);
  formData.append('description',description);

  formData.append('category',category);


   return this.http.post<any>(`admin/add`,formData,{ headers: new HttpHeaders({'x-access-token':this.getToken()})})
 }

 deleteProduct(id):Observable<any>{
  
  return this.http.delete<any>(`admin/delete/${id}`,{ headers: new HttpHeaders({'x-access-token':this.getToken()})})
}
}