# 为生产构建你的应用

现在,你希望将应用程序上线,应该快速&最优化.你想要完整的包,PWA包.

在开发模式中,你有非优化代码,源映射以及编写优秀代码所需的所有好东西.

但是在生产中你不希望有不必要的代码,它应该尽可能小.

## 优化构建

要优化你的应用程序以进行生产,请运行命令 `npm run build`.

这将如下优化你的应用程序:

- 它运行webpack [生产模式](https://webpack.js.org/guides/production/)
- 它为你的应用程序添加了一个[服务工作线程提供离线代理服务](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API) 来制作PWA
- 它压缩所有资源

## 分析你的包

有时你的包太大了,你不知道为什么会发生这种情况.

用于查找包的哪些部分太大的工具是webpack插件[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 

要使用此工具并获得包的概述,请运行 `npm run analyze-bundle`.

这将显示以下概览:

<img :src="$withBase('/analyzer.png')" alt="foo">
