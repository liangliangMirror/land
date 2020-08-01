import React, { useState, useEffect, createContext, useContext } from 'react'
import { Layout, Form, Input, Cascader, DatePicker ,Button } from 'antd'
import { querItem } from '@/utils/interfaceTstype.js'
import moment from 'moment';
import MyCreateContext from '@/utils/MyCreateContext.js'
import './indexScss.scss'
const FormItem = Form.Item
const { RangePicker } = DatePicker
const QueryCondition = (props) => {
  const { querList, dispath } = useContext(MyCreateContext)
  const [form] = Form.useForm()
  const onChange = (e, data) => {
    dispath({
      type: e,
      data
    })
  }
  const returnBooleData = (data,defaultData) => {
    return data?data:defaultData
  }
  const formItemReturn = (data) => {
    let Dom
    switch (data.type) {
      case 'Input':
        Dom = (
          <FormItem key={data.props} label={data.label}>
            <Input
              value={data.value}
              onChange={(even) => {
                onChange(data.props, even.target.value)
              }}
              allowClear={ returnBooleData(data.allowClear,true)}
              placeholder={returnBooleData(data.placeholder,'')}
            />
          </FormItem>
        )
        break
      case 'Button':
        let genre = data.genre?data.genre:'primary'
        Dom = (
          // <FormItem key={data.props} label={data.label}>
            <Button
              key={data.props} 
              type={genre}
              shape={returnBooleData(data.shape,null)}
              onClick={
                ()=>{onChange(data.props, '查询')}
              }
            >
              {data.label}
              </Button>
          // </FormItem> 
        )
        break
      case 'RangePicker':
        let dateFormat = data.dateFormat?data.dateFormat:'YYYY/MM/DD'
        Dom = (
          <FormItem key={data.props} label={data.label}>
            <RangePicker
              format={dateFormat}
              picker={data.picker?data.picker:'year'}
              value={data.value}
              size={data.size?data.size:'default'}
              disabledDate={data.disabledDate?data.disabledDate:null}
              disabledTime={data.disabledDateTime?data.disabledDateTime:null}
              showTime={{ defaultValue:data.moment? moment(data.moment[0], data.moment[1]):null }}
              onChange={(even) => {
                onChange(data.props, even)
              }}
              allowClear
            />
          </FormItem>
        )
        break

      default:
        break
    }
    return Dom
  }
  return (
      <Form layout="inline" className="query-form">
        {querList.map((item) => {
          return formItemReturn(item)
        })}
      </Form>
  )
}
export default QueryCondition
