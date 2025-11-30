'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    error?: Error;
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div style={{
                    padding: '2rem',
                    display: 'flex',
                    minHeight: '400px',
                    textAlign: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <h2 style={{ color: 'var(--color-white, #fff)', marginBottom: '1rem' }}>
                        Something went wrong
                    </h2>
                    <p style={{ color: 'var(--color-gray, #b1b1b1)', marginBottom: '2rem' }}>
                        We&apos;re sorry, but something unexpected happened.
                    </p>
                    <button
                        onClick={() => {
                            this.setState({ hasError: false, error: undefined });
                            window.location.reload();
                        }}
                        style={{
                            color: 'white',
                            border: 'none',
                            fontWeight: 500,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            borderRadius: '35px',
                            padding: '0.75rem 2rem',
                            transition: 'transform 0.2s',
                            backgroundColor: 'var(--color-primary, #7B9A56)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

