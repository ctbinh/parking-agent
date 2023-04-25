const saveLoginLocalStorage = () => {
  const authenticate = window.localStorage.setItem(
    'authenticated',
    JSON.stringify(true)
  );
  return authenticate;
};

const getLoginLocalStorage = () => {
  const authenticate = window.localStorage.getItem('authenticated');
  return authenticate;
};

const deleteLoginLocalStorage = () => {
  window.localStorage.clear('authenticated');
};

export const authentication = {
  saveLoginLocalStorage,
  getLoginLocalStorage,
  deleteLoginLocalStorage,
};
