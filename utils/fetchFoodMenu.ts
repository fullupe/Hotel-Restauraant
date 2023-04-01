import { FoodMenu } from "../typings";

export const  fetchFoodMenu = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getFoodMenu`)
    
    const data = await res.json();
    const foodMenus:FoodMenu[] = data.foodMenu;

    return foodMenus;
}