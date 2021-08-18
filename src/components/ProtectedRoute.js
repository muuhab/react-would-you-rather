import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({Component,exact,path,authedUser}) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={(props)=>
                authedUser?<Component {...props} />:<Redirect to={{
                    pathname:'/login',
                    state:{
                        from:props.location
                    }
                }}/>
            }
        />
            
    )
}

export default ProtectedRoute
