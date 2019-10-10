const getList = (author, keyWord) => {
  return [
    {
      id: 1,
      title: 'qwe!!!',
      author: '展示',
      time: 123123123122,
      content: 'sdfsdfsd'
    },
    {
      id: 2,
      title: 'qwe@@@',
      author: '展示',
      time: 123123123122,
      content: 'sdfsdfsd'
    }
  ]
}

const getDetail = id => {
  return {
    id: 1,
    title: 'qwe!!!',
    author: '展示',
    time: 123123123122,
    content: 'sdfsdfsd'
  }
}

module.exports = {
  getList,
  getDetail
}