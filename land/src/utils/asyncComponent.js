import React from 'react'

function asyncComponent(loadComponent){
    class AsyncComponent extends React.Component{
        static defaultProps = {
            loading: <p>Loading</p>,
            error: <p>Error</p>
        }
        constructor(props){
            super(props)
            this.loaad = this.load.bind(this)
            this.state = {
                module: null
            }
        }

        componentDidMount(){
            this.load(this.props)
        }
        load(props){
            this.setState({
                module: props.loading
            })
            loadComponent()
                .then( m=> {
                    let Module = m.default ? m.default: m
                    this.setState({
                        module: <Module {...props}/>
                    })
                }).catch((error)=>{
                    this.setState({
                        module: props.error
                    })
                    console.log(error)
                })
        }
        render(){
            return this.state.module
        }
    }
    
    return AsyncComponent
}

export default asyncComponent