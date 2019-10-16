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

const newBlog = (newData = {}) => {
  return {
    id: 1,
  }
}

const updataBlog = (data = {}) => {
  console.log(111)
  const { id, ...others } = data;
  console.log(others)
  return {
    id: 11,
  }
}

module.exports = {
  getList,
  newBlog,
  getDetail,
  updataBlog
}