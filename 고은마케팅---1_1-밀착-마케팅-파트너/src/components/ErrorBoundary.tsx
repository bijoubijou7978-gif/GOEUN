import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-ivory p-6 text-center">
          <div className="max-w-md bg-white p-8 rounded-3xl shadow-xl">
            <h1 className="text-2xl font-bold text-navy mb-4">문제가 발생했습니다</h1>
            <p className="text-charcoal/60 mb-6">
              앱을 실행하는 도중 오류가 발생했습니다. 아래 내용을 확인해 주세요.
            </p>
            <div className="bg-red-50 p-4 rounded-xl text-left mb-6 overflow-auto max-h-40">
              <code className="text-xs text-red-600">
                {this.state.error?.toString()}
              </code>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-navy text-white px-6 py-3 rounded-full font-bold hover:bg-navy/90 transition-all"
            >
              페이지 새로고침
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
