// ref: https://umijs.org/config/
export default {
  history: 'hash',
  routes: [
    { path: '/', component: './index.js' },
    {
      path: '/application',
      redirect: '/application/overview'
    },
    {
      component: './application/_layout.js',
      routes: [
        { path: '/application/overview', component: './application/overview/index.js' },
        { path: '/application/watch_hos', component: './application/watch_hos/index.js' }
      ],
    },
  ],
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        title: 'umitest',
        dll: true,
        pwa: false,
        routes: {
          exclude: [],
        },
        hardSource: false,
      },
    ],
  ],
};
