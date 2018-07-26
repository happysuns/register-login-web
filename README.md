# register-login-web
单点登录项目



## 技术

react前端框架 + animejs动画



## 启动

可以直接打开html进行开发，静态页面推荐使用BrowserSync

```
npm install -g browser-sync
// --files 路径是相对于运行该命令的项目（目录） 
browser-sync start --server --files "css/*.css"

// --files 路径是相对于运行该命令的项目（目录） 
browser-sync start --server --files "css/*.css, *.html"
// 如果你的文件层级比较深，您可以考虑使用 **（表示任意目录）匹配，任意目录下任意.css 或 .html文件。 
browser-sync start --server --files "**/*.css, **/*.html"
```

