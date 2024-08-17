export const getTypeQuery = function (usersInputElement) {
  let typeQuery;
  if (usersInputElement.checked) {
    return (typeQuery = '+type:user');
  } else {
    return (typeQuery = '+type:org');
  }
};
