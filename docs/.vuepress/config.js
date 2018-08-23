module.exports = {
  title: 'bbx',
  description: '𝕓𝕓𝕩 是一个极其简单高效的 React 状态管理方式',
  themeConfig: {
    repo: 'bbxjs/bbx',
    lastUpdated: 'Last Updated',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsDir: 'docs',
    nav: [
      { text: '开始使用', link: '/start/' },
    ],

    sidebar: {
      '/start/': [
        {
          title: '开始使用',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'state',
            'connect',
            'use',
            'async',
            'loading'
          ],
        },
        {
          title: '进阶',
          collapsable: false,
          children: [
            'principles',
            'latest',
            'update',
            'state-flow',
            'method-flow',
            'custom-state',
            'combine'
          ],
        },
      ],
    },
  },
}



