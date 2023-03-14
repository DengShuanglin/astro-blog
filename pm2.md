启动命令

进入当前项目根目录 `/astro-blog`

```
pm2 start --name astro-blog pnpm --watch -- run start
```


```
package.json中
"scripts": {
    "start": "node ./bin/www",
    "dev": "cross-env EXPRESS_NODE_ENV=dev EXPRESS_PORT=3000 nodemon ./bin/www --exec babel-node",
    "sit": "cross-env EXPRESS_NODE_ENV=sit nodemon ./bin/www --exec babel-node",
  },
  
  
简单用法
1. npm run dev
2. pm2 start npm -- run dev
以上使用是等效的
  
pm2 start npm --watch --name nickname -- run sit
// 启动 npm run sit
eg: pm2 start npm --watch --name h5toolsit -- run sit
其中 --watch监听代码变化，--name 重命令任务名称，-- run后面跟脚本名字
```
