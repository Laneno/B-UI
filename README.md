B-UI	 基于 Vue 的组件库

作者：Brave

使用本框架前，请在 css 中开启 boarder-box

```
*{box-sizing: border-box;}
```


安装问题
    ----1
    Npm安装报错 RollbackFailedOptional Verb Npm-Session解决办法
    该问题一般情况是因为npm源问题，更换为淘宝的源
    npm config set registry http://registry.npm.taobao.org

    ----2
    This is probably not a problem with npm. There is likely additional logging output above.
    npm i -D webpack-dev-server@3.0.0

    ----3
    Error: ENOENT: no such file or directory, scandir '..\node_modules\node-sass\vendor'
    大概率是升级node后，项目中的node-sass报错，需要rebuild
    可以先将node-sass更新到最新版本
    cnpm i -D node-sass 
    然后
    npm rebuild node-sass

运行
    npx parcel
    npx parcel index.html