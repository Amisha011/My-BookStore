import axios from "axios";
import React, { useEffect, useState } from "react";
import "../getAllUsers/getUsers.css"

const GetAllUser = () => {

    const [state, setState] = useState([])

    const getUsers = async () => {
        const response = await axios.get("http://localhost:8001/api/user/getAllUsers");
        console.log("res", response);
        var users = response.data;
        setState(users);
    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="getUsers">
            <table className="getUsers-table">
                <thead >
                    <th>S.No</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>User-type</th>
                    <th>Created at</th>
                </thead>
                {
                    state.map((data, index) => {
                        return (<tbody>

                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.userType}</td>
                            <td>{new Date(data.createdAt).toLocaleString()}</td>
                        </tbody>)

                    })
                }
            </table>
        </div>
    )
}
export default GetAllUser;