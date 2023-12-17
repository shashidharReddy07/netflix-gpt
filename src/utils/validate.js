export const checkValidateData = (email, password) => {
  const isValiateemail = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})$/.test(email);
  const isValiatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isValiateemail) return "Email Id is not valid";
  if (!isValiatePassword) return "Password is not valid";
  return null;
};
