
export interface FoodMenu extends FoodMenuBody {
    _id:string
    _createdAt:string
    _updatedAt:string
   _type:string
    _rev:"food"
    Isproductavailable:boolean

}

interface Image{
    _type:'image';
    asset:Reference
}

interface Reference{
    _ref:string;
    _type:"reference";
}

export type FoodMenuBody = {
    foodtype:string
    price:number
    img:Image
    categories:any
}

export interface Users {
    _id:string
    contact:string
    name:string
    roomnumber:any
}