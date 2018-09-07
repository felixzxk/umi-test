import _ from 'lodash';
import { connect as connectDva } from 'dva';
import uri from 'url';
import router from 'umi/router';

// // 为满足回调的参数要求，为createAction指定参数解析规则
// /**
//  * 创建payload为null，meta为第一个参数的action
//  * @param id action标识
//  * @returns actionCreator
//  */
// export function createAction1(id) {
//   return createAction(id.toUpperCase(), () => null, (...args) => args[0]);
// }

// /**
//  * 创建第一个参数为payload，第二个参数为meta的action
//  * @param id action标识
//  * @returns actionCreator
//  */
// export function createAction2(id) {
//   return createAction(
//     id.toUpperCase(),
//     (...args) => args[0],
//     (...args) => args[1]
//   );
// }

// const defaultMapDispatchToProps = dispatch => {
//   return {
//     dispatch,
//     action: (type, payload, ...args) => {
//       dispatch({ type, payload, exts: args });
//     }
//   };
// };

/**
 * 扩展redux中connect
 * 组件属性中会多一个action的fn,用法action(type,payload)
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @param mergeProps
 * @param args
 */
// export function connect(
//   mapStateToProps = _.noop,
//   mapDispatchToProps,
//   mergeProps,
//   ...args
// ) {
//   return connectDva(
//     mapStateToProps,
//     mapDispatchToProps || defaultMapDispatchToProps,
//     mergeProps,
//     ...args
//   );
// }

export const jump = (pathname, search, state) => {
  pathname = _.startsWith(pathname, '/') ? pathname : '/' + pathname;
  const path = uri.parse(pathname);
  path.query = search;
  router.push(uri.format(path), state);
};
export const goBack = router.goBack;

export function convertUnit(n) {
  const result = [];
  let data = n / 1024 / 1024;
  let unit = 'M';
  if (data > 1024) {
    data /= 1024;
    unit = 'G';
    if (data > 1024) {
      data /= 1024;
      unit = 'T';
    }
  }
  result[0] = _.round(data, 1);
  result[1] = unit;
  return result;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}
