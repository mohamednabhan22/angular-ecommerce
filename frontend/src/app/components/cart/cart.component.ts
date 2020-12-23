import { Router } from '@angular/router';
import { Component, OnInit,AfterViewInit, ElementRef, OnDestroy} from '@angular/core';
import { productService } from'../products/products.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,AfterViewInit,OnDestroy  {
  subscription: Subscription;
  decSubscription: Subscription;
  addSubscription: Subscription;

  cartItems:any
  totalPrice:any=0

  constructor(public productService: productService, private Router:Router
   ) {
     // this.productCart=this.productService.getProductsCart()

      
     

}
check(){
this.Router.navigate(['./checkout'])
}
shop(){
  this.Router.navigate(['./products'])

}




ngAfterViewInit(){
  

}


  ngOnInit(): void {
    this.subscription = this.productService.getCart().subscribe((res)=>{
      console.log(res.items)
    this.cartItems=res.items
 for(let p of this.cartItems){
 this.totalPrice+=p.totalPrice;
 //this.totalPrice=this.totalPrice.toFixed(2)
}

    
    
    },(err)=>{
      console.log(err)
    })
    

    
  }
  decreaseItem(id){
   this.decSubscription= this.productService.decreaseItem(id).subscribe((res)=>{
      console.log(res)
      let item =this.cartItems.find(item=>item._id=id)
     
        this.totalPrice-=item.price;
        
     
    },(err)=>{console.log(err)})
    }  
  AddToCart(name,price,amount,productId){
    this.addSubscription= this.productService.AddToCart(name,price,amount,productId).subscribe((res)=>{
      console.log(res)
  
      this.totalPrice+=price;
    },(err)=>{
      console.log(err)
    })

}

clear(){
  this.productService.deleteAllItems().subscribe(res=>console.log(res))
  this.cartItems=[]
  this.totalPrice=0
}
ngOnDestroy() {
  this.subscription.unsubscribe();
 if(this.decSubscription){this.decSubscription.unsubscribe();} 
 if(this.addSubscription){this.addSubscription.unsubscribe();}

}
}
