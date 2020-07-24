export const api =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8086' : ''
const urlList = {
    announcementsGetList: '/announcements/getList', // 获取通知列表
    announcementsSave: '/announcements/save', // 通知保存或修改
    announcementsSelect: '/announcements/select', // 查看通知
    announcementsRemove: '/announcements/remove', // 删除通知
    announcementsPublish: '/announcements/publish', // 发布通知
    announcementsBack: '/announcements/back', // 撤回通知
    announcementsRead: '/announcements/read', // 阅读通知
}

export const ajaxUrl = urlList