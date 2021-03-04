import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshUser } from "../../redux/User/User.actions"
import { UserProps, User } from "../../redux/User/User.types"

interface RootState {
    users: any
}

const UserList = ({ users }: UserProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshUser)
    }
    return (
        <div className="flex">
            <div>
                <button onClick={handleClick}>Refresh</button>
                <h1>User List</h1>
                <ul>
                    {Object.entries(users).length === 0 ? (
                        <li>No Users Found</li>
                    ) : (
                        users.map((user: User) => (
                            <div key={user.id}>
                                <p>
                                    <img key={user.avatar} src={user.avatar} />
                                </p>
                                <p>
                                    <strong>First Name: {user.first_name}</strong>
                                </p>
                                <p>
                                    <strong>Last Name: {user.last_name}</strong>
                                </p>
                                <p>
                                    <strong>ID: {user.id}</strong>
                                </p>
                                <p>
                                    <strong>Email: {user.email}</strong>
                                </p>
                            </div>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log("Users state", state.users)
    return {
        users: state.users.users,
    }
}

export default connect(mapStateToProps)(UserList)
