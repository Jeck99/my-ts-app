import "./Home.css";
import IUser from "../../../models/user-model";
import { getUsers } from "../../../services/user.service";
import { useEffect, useState } from "react";

let tempUsers: IUser[];
function Home() {
  const [usersArray, setUsers] = useState(tempUsers);
  useEffect(() => {
    getUsers().then((users: IUser[]) => {
      setUsers(users);
    });
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
      {/* {usersArray?.map((user) => (
        <h1>{user.email}</h1>
      ))}
      {usersArray
        ? Object.keys(usersArray[0]).map((key) => <h1>{key}</h1>)
        : ""} */}
      <table>
        <thead>
          <tr>
            {usersArray ? (
              Object.keys(usersArray[0]).map((key) => <td>{key}</td>)
            ) : (
              <td></td>
            )}
          </tr>
        </thead>
        <tbody>
          {usersArray?.map((user) => (
            <tr>
              {Object.values(user).map((value) => (
                typeof(value) =="string"?
                <td>{value}</td>:
                <td>{value.first+" "+ value.last}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
