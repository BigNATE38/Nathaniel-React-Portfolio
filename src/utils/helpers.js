export function validUser(input) {
    return input.length > 0;
}

export function validMessage(input) {
    return input.length > 0;
}

export function validEmail(email) {
    const expression = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    return expression.test(String(email).toLowerCase());
}