export default {
    srcDir: './src',
    css:[
        '~/style/index.scss',
        './node_modules/normalize.css/normalize.css'
    ], // 公共样式
    plugins: [
        // { src: '~/plugins/polyfill', ssr: false },
        '~/plugins/normalize.js',
    ] // 插件注册
}
