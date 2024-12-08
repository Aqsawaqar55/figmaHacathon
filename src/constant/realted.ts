export interface ourProduct
{
    discountbtn:boolean;
    discountprice:number;
   width:number,
   height:number,
   
    src:string;
    heading?:string;
    price?:number;
   reviews?:string,

    }

export const ourProduct: ourProduct[] =[  
 {
discountbtn:true,
discountprice:30,
width:285,
height:301,
src:"/product/img1.png",
heading:"Syltherine",

price:2500000,
reviews:"Stylish cafe chair",


},
{
    discountbtn:false,
    discountprice:30,
    width:285,
    height:494,
    src:"/product/img2.png",
   
   
    },
   { discountbtn:true,
discountprice:30,
width:285,
height:301,
src:"/product/img3.svg",
heading:"Syltherine",

price:2500000,
reviews:"Stylish cafe chair"
},
{ discountbtn:false,
    discountprice:30,
    width:285,
    height:301,
    src:"/product/img4.png",
    heading:"Syltherine",
    
    price:2500000,
    reviews:"Stylish cafe chair"
    }
    
          
                                                               
  
]
    
