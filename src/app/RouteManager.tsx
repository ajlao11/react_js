import React from "react"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserList from "./pages/user/UserList"

const RouteManager = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/users" component={UserList} />
                <Redirect from="*" to="/users" />
            </Switch>
        </Router>
    )
}

export default RouteManager
