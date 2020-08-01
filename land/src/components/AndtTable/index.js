import { Table, Tag, Space } from 'antd'
import React, { useState,useEffect,useReducer } from 'react'
const AndtTable = (props) =>{
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];
    //   const pagination = {
    //     currentPage: 1,
    //     pageSize: 10,
    //     total:10,
    //     pageSizeOptions:["5","10","15","20"]
    //   }
    return (
        <Table columns={columns}  dataSource={dataSource} />
    )
}
export default AndtTable