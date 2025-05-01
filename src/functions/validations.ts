export function Exactly10Digits(val: string){
  const regExp = /^[0-9]{10}$/;
  if (!regExp.test(val)) {
    return false;
  }
  return true;
};

export  function Exactly6Digits(val: string){
  const regExp = /^[0-9]{6}$/;
  if (!regExp.test(val)) {
    return false;
  }
  return true;
};
