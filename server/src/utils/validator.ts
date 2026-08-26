// Email Regex
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export interface PasswordValidationResult {
  isValid: boolean;
  error?: string; 
}

/*** Strong Password Checker */
export const validatePasswordStrength = ( password: string): PasswordValidationResult => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number.");
  }
  if (!/[@$!%*?&#]/.test(password)) {
    errors.push(
      "Password must contain at least one special character (@$!%*?&#).",
    );
  }

  if (errors.length > 0) {
    return {
      isValid: false,
      error: errors.join(" "),
    };
  }

  return {
    isValid: true,
    error : errors.join(" ")
  };
};
