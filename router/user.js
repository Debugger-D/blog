const handleUserRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0]
  const query = url.split('?')[1]

  if(method === 'POST' && path === '/api/user/login') {
    return  {
      msg: '这是登录的接口'
    }
  }

  if(method === 'POST' && path === '/api/blog/del') {
    return  {
      msg: '这是删除博客的接口'
    }
  }
}

module.exports = handleUserRouter;
