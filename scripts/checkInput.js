


export const checkInput = function (Input, messageElement) {
  if (Input.value.trim()) {
    messageElement.textContent = '';
    return true;
  } else {
    messageElement.textContent = 'invalid input';
    return false;
  }
};
