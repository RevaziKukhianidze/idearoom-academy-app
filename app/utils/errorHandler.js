// Error handling utilities

export class AppError extends Error {
  constructor(message, statusCode = 500, code = "INTERNAL_ERROR") {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Centralized error logger
export const logError = (error, context = {}) => {
  const errorLog = {
    timestamp: new Date().toISOString(),
    message: error?.message || "Unknown error",
    stack: error?.stack,
    code: error?.code,
    statusCode: error?.statusCode,
    context,
    userAgent:
      typeof window !== "undefined" ? window.navigator.userAgent : "server",
    url:
      typeof window !== "undefined"
        ? window.location.href
        : context.url || "unknown",
  };

  console.error("Application Error:", errorLog);

  // Send to external monitoring service if available
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "exception", {
      description: error?.message || "Unknown error",
      fatal: error?.statusCode >= 500,
    });
  }

  return errorLog;
};

// User-friendly error messages in Georgian
export const getErrorMessage = (error) => {
  if (error?.code === "NETWORK_ERROR") {
    return "ქსელის შეცდომა - შეამოწმეთ ინტერნეტ კავშირი";
  }

  if (error?.code === "TIMEOUT_ERROR") {
    return "მოთხოვნის დრო ამოიწურა - გთხოვთ სცადოთ ხელახლა";
  }

  if (error?.code === "DATABASE_ERROR") {
    return "ბაზის შეცდომა - გთხოვთ სცადოთ მოგვიანებით";
  }

  if (error?.code === "NOT_FOUND") {
    return "მონაცემები ვერ მოიძებნა";
  }

  if (error?.code === "VALIDATION_ERROR") {
    return error?.message || "მონაცემები არასწორია";
  }

  // Default message
  return error?.message || "დროებითი შეცდომა - გთხოვთ სცადოთ მოგვიანებით";
};

// Async error wrapper
export const withErrorHandling = (fn) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      logError(error, { function: fn.name, args });
      throw error;
    }
  };
};

// React component error boundary helper
export const handleComponentError = (error, errorInfo) => {
  logError(error, {
    componentStack: errorInfo?.componentStack,
    type: "COMPONENT_ERROR",
  });
};

export default {
  AppError,
  logError,
  getErrorMessage,
  withErrorHandling,
  handleComponentError,
};
