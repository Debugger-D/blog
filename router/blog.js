const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList, getDetail, newBlog, updataBlog } = require('../controller/blog')

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0]

  if(method === 'GET' && path === '/api/blog/list') {
    const author = req.query.author;
    const keyWord = req.query.keyWord;
    const listData = getList(author, keyWord);

    return new SuccessModel(listData);
  }

  if(method === 'GET' && path === '/api/blog/detail') {
    const id = req.query.id;
    const detail = getDetail(id);
    return new SuccessModel(detail);
  }

  if(method === 'POST' && path === '/api/blog/new') {
    const postData = req.body
    const blog = newBlog(postData)
    return new SuccessModel(blog)
  }

  if(method === 'POST' && path === '/api/blog/updata') {
    const postData = req.body
    const result = updataBlog(postData)
    if(result) {
      return new SuccessModel(blog)
    } else {
      return new ErrorModel('更新博客失败')
    }
  }

  if(method === 'POST' && path === 'api/blog/del') {
    return  {
      msg: '这是删除博客的接口'
    }
  }
}

module.exports = handleBlogRouter;
