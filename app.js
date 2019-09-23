const handleUserRouter = require('./router/user')
const handleBlogRouter = require('./router/blog')

const serverHandle = (req, res) => {
  console.log(req)
  // 设置返回格式
  res.setHeader('Content-type', 'application/json');

  const blogData = handleBlogRouter(req, res);
  const userData = handleUserRouter(req, res);

  if(blogData) {
    console.log(blogData, 44)
    res.end(JSON.stringify(blogData));
    return;
  }

  if(userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  //未命中路由
  res.writeHead(404,{'Content-type': 'text/plain'})
  res.write('404');
  res.end()
}

module.exports = serverHandle
