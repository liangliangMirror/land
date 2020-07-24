// import React from 'react'
// import { notification, Avatar } from 'antd'
import { requestGet } from '@/utils/ajax'

export const SET_USER = 'SET_USER'
export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}
export function getUser() {
    return async function (dispatch){
        const res = await requestGet('/general/getUserTNMenu')
        dispatch(setUser(res || {}))
    }
}