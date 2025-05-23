import { useEffect, useState } from "react"

function UserCrud() {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    function getUsersFromServer() {
        fetch("http://localhost:5000/users/")
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                setUsers(data)
            })
    }
    useEffect(() => {
        getUsersFromServer();
    }, []);

    const handleIdChange = (event) => {
        setUser((prev) => ({
            ...prev,
            id: event.target.value
        }))
    }
    const handleNameChange = (event) => {
        setUser((prev) => ({
            ...prev,
            name: event.target.value
        }))
    }
    const handleAgeChange = (event) => {
        setUser((prev) => ({
            ...prev,
            age: event.target.value
        }))
    }
    const handlePhoneChange = (event) => {
        setUser((prev) => ({
            ...prev,
            phone: event.target.value
        }))
    }
    const createUser = (event) => {
        console.log(user);
        event.preventDefault()
        if (isEdit) {
            fetch(`http://localhost:5000/users/${user.id}/update`, {
                method: "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: user.id, name: user.name, age: user.age, phone: user.phone })
            }).then(function (res) {
                console.log("user updated successfully");
                getUsersFromServer();
            })
        } else {
            fetch("http://localhost:5000/users/create", {
                method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: user.id, name: user.name, age: user.age, phone: user.phone })
            }).then(function (res) {
                console.log("user created successfully");
                getUsersFromServer();
            })
        }

        setUser((prev) => ({
            ...prev,
            phone: "",
            id: "",
            name: "",
            age: ""
        }))
    }
    const deleteUser = (user) => {
        console.log("user to be deleted=", user)
        let tempusers = users;
        tempusers.filter(function (item) {
            return item.id != user.id
        })
        console.log(tempusers);
        setUsers(tempusers)

        //    fetch(`http://localhost:5000/users/${user.id}delete`, { method:"delete"}).then(function (res) {
        //         console.log("user created successfully");
        //         getUsersFromServer();
        //     })
    }
    const editUser = (user) => {
        console.log("clicked user=", user)
        // setUser((prev) => ({
        //     ...prev,
        //     ...user
        // }))
        setUser(user);
        setIsEdit(true)
    }
    return (
        <div>
            <div className="container">
                <div className="mb-3">
                    <label className="form-label">Id</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter user id"
                        name="id"
                        value={user.id}
                        onChange={(e) => handleIdChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter user Name"
                        name="instructorName"
                        value={user.name}
                        onChange={(e) => handleNameChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter phone"
                        name="phone"
                        value={user.phone}
                        onChange={(e) => handlePhoneChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter Age"
                        name="age"
                        value={user.age}
                        onChange={(e) => handleAgeChange(e)}
                    />
                </div>
                <button
                    onClick={(event) => {
                        createUser(event)
                    }}
                    className="btn btn-success"
                >
                    Create
                </button>
            </div>

            <h1>Welcome to Users Crud App</h1>
            <table className="table table-primary" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button onClick={() => deleteUser(user)} className="btn btn-danger">delete</button>
                                <button onClick={() => editUser(user)} className="btn btn-primary">edit</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default UserCrud