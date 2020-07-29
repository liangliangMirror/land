import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRoute = ({comment:Component,...rest}) =>(
    <Route {...rest} render={(props) =>(
        <Component {...props} />
    )}></Route>
)
export default PrivateRoute