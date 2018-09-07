// import { getAuthority, checkAuthority } from '../../utils/authority';

export const mainMenu = [
  {
    name: '概览',
    icon: 'icon-dengji',
    path: 'application/overview',
  },
  {
    name: '监控',
    icon: 'icon-jiaohao',
    path: 'application/watch_hos',
  },
  {
    name: '影像',
    icon: 'icon-paipian',
    path: 'application/image',
  },
  {
    name: '统计',
    icon: 'icon-baogao',
    path: 'application/statistics_hos',
  },
  {
    name: '商业智能',
    icon: 'icon-shenqing',
    path: 'application/intelligence',
  },
  {
    name: '患者360',
    icon: 'icon-huanzhe',
    path: 'application/patient',
  },
  {
    name: '文件',
    icon: 'icon-huanzhe',
    path: 'application/document',
  },
  {
    name: '报表',
    icon: 'icon-huanzhe',
    path: 'application/report',
  },
  {
    name: '日志',
    icon: 'icon-huanzhe',
    path: 'application/log_hos',
  },
  {
    name: '设置',
    icon: 'icon-huanzhe',
    path: 'application/setting_hos',
  }
];

export default [
  ...mainMenu,
];
