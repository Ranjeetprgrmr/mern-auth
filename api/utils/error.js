export const errorHandler = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.messsage = message;
    return error;
}