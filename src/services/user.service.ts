import { wait } from "@testing-library/user-event/dist/utils";
import IUser from "../models/user-model";
const API: string =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users";
export const getUsers = async (): Promise<any> => {
  try {
    return await fetch(API)
      .then((res: Response) => res.json())
      .then((result) =>{
        let usersArray:IUser[] = result;
        return usersArray
      })
  } catch (error) {}
};

export const postUser = async(newUser:IUser): Promise<any>=>{
  const options = {
    body:JSON.stringify(newUser), 
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    }
  }
  try {
    return await fetch(API,options)
    .then((res:Response):Promise<any>=>res.json())
  } catch (error) {
    console.log(error);
    
  }
}