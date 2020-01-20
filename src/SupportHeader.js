import store from './store';
const SupportHeader = extraMetadata => {
  const { token } = store.getState().authentication;
  let header = {};

  header = {
    headers: {
      ...extraMetadata,
      Authorization: `Bearer ${token}`
    }
  };
  return header;
};
export default SupportHeader;

// instance.interceptors.request.use(config => {
//   const { token } = store.getState().authentication;
//   if (token) {
//     return {
//       ...config,
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     };
//   }

//   return config;
// });
