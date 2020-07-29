import React, { useState,useEffect,useReducer } from 'react'
import { Layout } from 'antd'
import asyncComponent from '@/utils/asyncComponent'
import MyCreateContext from '@/utils/MyCreateContext.js'
import {querItem} from '@/utils/interfaceTstype.js'
const AsyncQueryCondition = asyncComponent(() =>
  import(`@/components/QueryCondition/index.js`)
)

const PolicyAnnouncements =  () => {
  const dispatchSetQuerList = (type,data) =>{
    let arr = querList.map((item,index) =>{
      if (item.props == type) {
        item.value = data
      }
      return item
    })
    setQuerList(arr)
  }
  const reducer = (state, action) => {
    switch (action.type) {
        case 'groupName': 
        dispatchSetQuerList(action.type,action.data)
        return Object.assign({}, state, { step: state.groupName + 1 });
        case 'numberInc': return Object.assign({}, state, { number: state.number + 1 });
        case 'count': return Object.assign({}, state, { count: state.step + state.number });
        default: return state;
    }
  }
  const initState = {
    groupName:''
  }
  const [querList,setQuerList] = useState([])
  const [state,dispath] = useReducer(reducer,initState)
  useEffect(()=>{
    setQuerList([
      {
        type:'input',
        props:'groupName',
        label:'集团名称',
        labelWidth:'',
        placeholder:'请输入集团名称名称',
        value:123
      }
    ])
  },[])
  return (
    
      <MyCreateContext.Provider value={{querList,dispath}}>
        <AsyncQueryCondition />
      </MyCreateContext.Provider>
  )
}
export default PolicyAnnouncements
