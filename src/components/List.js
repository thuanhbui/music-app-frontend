import API from "../api"
import {useEffect, useState} from "react";

export function List() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.getUsers().then((res) => {
            setUsers(res.data);
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
            ))
            }
            </tbody>
        </table>
    )
}