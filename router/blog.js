const handleBlogRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0]
  const query = url.split('?')[1]

  if(method === 'GET' && path === '/api/blog/list') {
    return  {
      msg: '这是获取博客的接口'
    }
  }

  if(method === 'GET' && path === '/api/blog/detail') {
    return  {
      msg: '这是获取博客详情的接口'
    }
  }

  if(method === 'POST' && path === '/api/blog/new') {
    return  {
      msg: '这是创建博客的接口'
    }
  }

  if(method === 'POST' && path === 'api/blog/del') {
    return  {
      msg: '这是删除博客的接口'
    }
  }
}

module.exports = handleBlogRouter;
