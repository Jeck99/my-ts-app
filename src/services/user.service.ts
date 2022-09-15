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
