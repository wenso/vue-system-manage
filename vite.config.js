import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import viteSvgIcons from 'vite-plugin-svg-icons'

export default ({command,mode}) => defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [
      vue(),
      viteMockServe({
        mockPath:'mock',
        supportTs: false,
        localEnabled: command === 'serve'||'dev',
        logger:true
      }),
      viteSvgIcons({
        // 配置路劲在你的src里的svg存放文件
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
      })
  ],
  resolve:{
    alias:[
      { find: "@", replacement: path.resolve(__dirname, 'src') },
      { find: "@views", replacement: path.resolve(__dirname, 'src/views')},
      { find: "@theme", replacement: path.resolve(__dirname, 'src/theme')},
      { find: "@router", replacement: path.resolve(__dirname, 'src/router')},
      { find: "@utils", replacement: path.resolve(__dirname, 'src/utils')},
      { find: "@comps", replacement: path.resolve(__dirname, 'src/components')},
      { find: "@apis", replacement: path.resolve(__dirname, 'src/apis')}
    ],
    extensions: ['.vue', '.js', '.json','.mjs']
  },
  server:{
    open:true,
    host:'0.0.0.0',
    port:80,
    https:false,
    proxy:{
      '/api':{
        target:'http://127.0.0.1',
        changeOrigin:true,
        rewrite:path => path.replace(/^\/api/, '')
      }
    }
  }
})
