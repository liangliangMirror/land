import React from 'react'
import {  } from 'antd'
import { withRouter } from 'react-router-dom'

// const logoImg = import()

@withRouter
class header extends React.Component{
    render(){
        return (
            <div className="nav">
                <div className="logo">
                    <img src={require('@/assets/logo_nav.png')} alt="logo" />
                </div>
            </div>
        )
    }
}
export default header