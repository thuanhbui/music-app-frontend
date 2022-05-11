export function Input() {

    const submit = () => {
        console.log("post user")
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter your name"/>
            </div>
            <div className="form-group my-1">
                <label htmlFor="exampleInputPassword1">Age</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your age"/>
            </div>
            <button type="submit" className="btn btn-primary mt-2" onSubmit={submit}>Submit</button>
        </form>
    );
}