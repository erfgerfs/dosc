import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "2024你好",
  base: "/dosc",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    logo: "风车.svg",
   
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', link: '/' },
      { text: '公共', link: '/markdown-examples' },
      { text: '军火库',
      items: [
        { text: '直升机', link: '/scos/ppp/zsj' },
        { text: '武装坦克', link: '/item-2' },
        { text: '手榴弹', link: '/item-3' }
      ]
     }
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/scos/fx': [
        {
          text: '分享',
          items: [
            { text: '分享', link: '/scos/fx/fx.md' },
            { text: '分享1', link: '/scos/fx/fx1.md' },
           
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/scos/ppp': [
        {
          text: 'ppp',
          items: [
            
            { text: '直升机', link: 'scos/ppp/zsj.md' },
            { text: '武装', link: 'scos/ppp/wzzsj.md' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/erfgerfs">Evan You</a>'
    }
  },
  head: [["link", { rel: "icon", href: "/风车.svg" }]],
})


