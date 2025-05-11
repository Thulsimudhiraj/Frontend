import { useState } from "react"
var usersdata = [
    {
        id: 1,
        name: "Thulasi"
    },
    {
        id: 2,
        name: "Ashwini"
    },
    {
        id: 3,
        name: "Ashwitha"
    },
    {
        id: 4,
        name: "Shivani"
    },
    {
        id: 5,
        name: "Sindhu"
    },
    {
        id: 6,
        name: "Anusha"
    },
]
function UsersSearchPage() {
    const [users, setUsers] = useState(usersdata);

    const[searchKey,setSearchKey]=useState("")
    const searchUser=(e)=>{
        setSearchKey(e.target.value)
        filteredUsers()
    }
    const filterUsers=()=>{
        if(searchKey){
            const filteredUsers=users.filter((user)=>{
                return user.name.toLowerCase().includes(searchKey.toLowerCase())
            })
            setUsers(filteredUsers)
        }else{
            setUsers(users)
        }
    }
    return (
        <div className="container">
            <h1>From users Search Component</h1>
            <div className="row">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search User"
                        value={searchKey}
                        onChange={(e)=>searchUser(e)}
                    />
                    <span className="input-group-text" 
                    style={{background:"green",color:"#fff"}} 
                    id="basic-addon2"
                    onClick={filterUsers}>Search</span>
                </div>
                <div className="row">
                    {users.length===0 &&<h1>No result found</h1>}
                    <ul style={{ listStyle: "none" }}>
                        {users.map((user) => {
                            return (
                                <li key={user.id}>
                                    <span>{user.id} {user.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default UsersSearchPage