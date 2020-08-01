import React, { useState,useEffect,useReducer } from 'react'
import { Layout } from 'antd'
import asyncComponent from '@/utils/asyncComponent'
import MyCreateContext from '@/utils/MyCreateContext.js'
import {querItem} from '@/utils/interfaceTstype.js'
const AsyncQueryCondition = asyncComponent(() =>
  import(`@/components/QueryCondition/index.js`)
)
const AndtTable = asyncComponent(() =>
  import(`@/components/AndtTable/index.js`)
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
  const getList = () => {
    console.log(1111)
  }
  const reducer = (state, action) => {
    
    switch (action.type) {
      case 'callBackQuery':
        getList()
        break;
    
      default:
        dispatchSetQuerList(action.type,action.data)
        break;
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
        type:'Input',
        props:'groupName',
        label:'标题',
        labelWidth:'',
        placeholder:'请输入集团名称名称',
        value:123,
        allowClear:false
      },
      {
        type:'RangePicker',
        props:'newsTitle',
        label:'发布时间',
        labelWidth:'',
        value:'',
        placeholder:'时间'
      },
      {
        type:'Button',
        genre:'primary',
        label:'查询',
        labelWidth:'',
        props:'callBackQuery',
      }
    ])
  },[])
  return (
    <div>
      <MyCreateContext.Provider value={{querList,dispath}}>
        <AsyncQueryCondition />
        <AndtTable/>
      </MyCreateContext.Provider></div>
  )
}
export default PolicyAnnouncements
