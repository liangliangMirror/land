import React, { useState, useEffect, createContext, useContext } from 'react'
import { Layout, Form, Input } from 'antd'
import { querItem } from '@/utils/interfaceTstype.js'
import MyCreateContext from '@/utils/MyCreateContext.js'
import './indexScss.scss'
const FormItem = Form.Item

const QueryCondition = (props) => {
  const {querList,dispath} = useContext(MyCreateContext)
  const [form] = Form.useForm()
  const onChange = (e,data) =>{
    console.log(e,data)
    // dispath({
    //   type:'groupName'
    // })
  }
  const formItemReturn = (data) => {
    let Dom
    switch (data.type) {
      case 'input':
        Dom = (
          <FormItem key={data.props} label={data.label}>
            <Input value={data.value} onChange={
              even =>{
                dispath({
                  type:data.props,
                  data:even.target.value
                })
              }
            } allowClear placeholder={data.placeholder ? data.placeholder : ''} />
          </FormItem>
        )
        break
  
      default:
        break
    }
    return Dom
  }
  return (
    <div>
      <Form layout="inline" className="query-form">
        {querList.map((item) => {
          return formItemReturn(item)
        })}
      </Form>
    </div>
  )
}
export default QueryCondition
