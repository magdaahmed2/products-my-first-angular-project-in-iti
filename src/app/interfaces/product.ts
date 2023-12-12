export interface Product {

    id:  Number;
    title:string;
    description: string;
    stock:number;
    discountPercentage:number;
    rating: number;
    price: number;
    brand:string;
    category:string;
    
      
    thumbnail:string;
    images : string[];
    createdAt:string| Date;
    
  }
  