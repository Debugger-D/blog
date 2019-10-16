const querystring = require('querystring')
const handleUserRouter = require('./router/user')
const handleBlogRouter = require('./router/blog')

const getPostData = req => {
  return  new Promise((res, rej) => {
    if(req.method !== 'POST') {
      res({})
      return
    }
    console.log(req.headers['content-type'])
    if(req.headers['content-type'] !== 'application/json') {
      res({})
      return
    }

    let postData = '';
    req.on('data', chunk => {
      postData += String(chunk)

    })

    req.on('end', () => {
      if(!postData){
        res({})
        return
      }
      console.log(postData, 9090)
      res(JSON.parse(postData))
    })
  })
}
const serverHandle = (req, res) => {
  // 设置返回格式
  res.setHeader('Content-type', 'application/json');

  const url = req.url;
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1]);

  getPostData(req).then( data => {
    req.body = data;
    const blogData = handleBlogRouter(req, res);
    const userData = handleUserRouter(req, res);
    
    if(blogData) {
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
  })
}

module.exports = serverHandle
