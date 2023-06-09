import { Users } from "../typings";

export const  fetchUsers = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getUsers`)
    
    const data = await res.json();
    const user:Users[] = data.user;

    return user;
}