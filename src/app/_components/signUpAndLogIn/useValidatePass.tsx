
const useValidatePass = () => {
    

  const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const validatePassword = (password: string) => {
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  } else if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter.";
  } else if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  } else if (!/[0-9]/.test(password)) {
    return "Password must contain at least one digit.";
  } else if (!/[!@#$%^&*]/.test(password)) {
    return "Password must contain at least one special character (!@#$%^&*).";
  } else if (!regPassword.test(password)) {
    return "Password is invalid.";
  } else {
    return "";
  }
};
  return validatePassword
}

export default useValidatePass
