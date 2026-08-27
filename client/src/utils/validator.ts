export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export interface AuthValidationResult {
    isValid: boolean;
    email: ValidationResult;
    password: ValidationResult;
}


export const validateEmail = (email: string): ValidationResult => {
    const errors: string[] = [];
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
        errors.push("Email is required.");
        return { isValid: false, errors };
    }
    // RFC 5322 compliant standard email regex pattern
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
        errors.push("Please enter a valid email address.");
    }
    return {
        isValid: errors.length === 0,
        errors,
    };
};

export const validatePassword = (
    password: string,
    minLength: number = 8
): ValidationResult => {
    const errors: string[] = [];
    if (!password) {
        errors.push("Password is required.");
        return { isValid: false, errors };
    }
    if (password.length < minLength) {
        errors.push(`Password must be at least ${minLength} characters long.`);
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
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        errors.push("Password must contain at least one special character.");
    }
    return {
        isValid: errors.length === 0,
        errors,
    };
};

export const validateAuthCredentials = (
    email: string,
    password: string,
    element: any
): AuthValidationResult => {
    const emailResult = validateEmail(email);
    const passwordResult = validatePassword(password);

    if (!emailResult.isValid) {
        showMessage(element, false, emailResult.errors[0])
        return {
            isValid: false,
            email: emailResult,
            password: passwordResult,
        };
    }
    if (!passwordResult.isValid) {
        showMessage(element, false, passwordResult.errors[0])
        return {
            isValid: false,
            email: emailResult,
            password: passwordResult,
        };
    }

    element.textContent = ""
    element.removeAttribute("class")

    return {
        isValid: emailResult.isValid && passwordResult.isValid,
        email: emailResult,
        password: passwordResult,
    };
};

export const showMessage = (element: any, isError: boolean, msg: string): void => {
    if (!element || !element.classList) return;

    const className = isError ? "success" : "error";
    element.classList.add(className);
    element.textContent = msg;

    setTimeout(() => {
        if (element && element.classList) {
            element.textContent = "";
            element.className = "";
        }
    }, 2500);
};