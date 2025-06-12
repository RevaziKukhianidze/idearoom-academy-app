"use client";

import React from "react";
import { Button } from "./ui/button";
import { handleComponentError, getErrorMessage } from "../utils/errorHandler";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error
    handleComponentError(error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="container max-w-[95%] mx-auto px-4 py-10 mt-[128px]">
          <div className="bg-white min-h-[475px] rounded-[20px] p-8 flex flex-col items-center justify-center text-center">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-secondary-500 mb-4">
                კომპონენტის შეცდომა
              </h1>
              <p className="text-secondary-400 mb-6 max-w-md">
                {getErrorMessage(this.state.error)}
              </p>
            </div>

            {/* Show error details in development */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-2xl w-full">
                <details className="text-left">
                  <summary className="text-red-800 font-semibold cursor-pointer mb-2">
                    Error Details (Development Only)
                  </summary>
                  <pre className="text-red-700 text-xs overflow-auto max-h-40">
                    {this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              </div>
            )}

            <div className="flex gap-4">
              <Button
                onClick={() => {
                  this.setState({
                    hasError: false,
                    error: null,
                    errorInfo: null,
                  });
                }}
                className="px-6 py-2"
              >
                ხელახლა ცდა
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="px-6 py-2"
              >
                გვერდის განახლება
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/")}
                className="px-6 py-2"
              >
                მთავარ გვერდზე დაბრუნება
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
