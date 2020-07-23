class SuccessModel{
    constructor({data,message}){
        this.status = 0
        this.code = 200
        this.message = message || '请求成功'
        this.data = data || {}
    }
}
class ErrorModel{
    constructor({message,code}){
        this.status = 1
        this.code = code || 500
        this.message = message || '网络错误'
    }
}


module.exports = {
    SuccessModel,
    ErrorModel
}