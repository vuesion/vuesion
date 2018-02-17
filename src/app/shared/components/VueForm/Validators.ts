export const isEmailValid = (email: string) => {
  return /\S+@\S+/.test(email);
};

export const isPhoneNumberValid = (phone: string) => {
  return /^[\+ 0-9()-]+$/.test(phone);
};
