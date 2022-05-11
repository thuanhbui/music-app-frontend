import {useState} from "react";
import API from "../api"

export function Input() {

    const [name, setName] = useState();
    const [age, setAge] = useState();

    const submit = () => {
        const user = {
            name: name,
            age: age,
        }
        API.postUser(user).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group my-1">
                <label htmlFor="exampleInputPassword1">Age</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your age"
                onChange={(e) => setAge(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary mt-2" onSubmit={submit}>Submit</button>
        </form>
    );
}