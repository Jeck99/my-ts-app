import "./Add-User.css";
import {  useState } from "react";
import IUser from "../../../models/user-model";
import {postUser} from "../../../services/user.service"

let tempUser: IUser;
function AddUser() {
  const [user, setUser] = useState(tempUser);
  // const changeInput = (e: any) => {
  //   setUser((user: IUser): IUser => {
  //     return { ...user, [e.target.name]: e.target.value };
  //   });
  // };
  const changeInput = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="add-user">
      <h1>Add-User</h1>
      {user?Object.keys(user).map((key) => <input type="text" name={key} onChange={changeInput} />):""}

      
      <button onClick={()=>postUser(user)}>SAVE</button>
    </div>
  );
}

export default AddUser;
