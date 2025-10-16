import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console or external service
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    // Optionally integrate with Sentry or other logging here
  }

  handleResetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const error = this.state.error;
      const message = error.message.toLowerCase();
      const isSanityError =
        message.includes('sanity') ||
        message.includes('projectid') ||
        message.includes('dataset') ||
        message.includes('cors') ||
        message.includes('fetch');

      if (isSanityError) {
        return (
          <div style={{ padding: 32, textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c00' }}>
              Sanity CMS Connection Error
            </h1>
            <p style={{ marginTop: 16, marginBottom: 16 }}>
              The application could not connect to the Sanity Content Management System. This is
              likely due to missing or incorrect environment variables.
            </p>
            <div
              style={{
                background: '#f3f3f3',
                border: '1px solid #ddd',
                padding: 16,
                borderRadius: 4,
                textAlign: 'left',
                display: 'inline-block',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
              }}
            >
              <p>Please ensure the following environment variables are set in your <code>.env</code> file:</p>
              <ul style={{ paddingLeft: 20, marginTop: 8, listStyle: 'disc' }}>
                <li><code>VITE_SANITY_PROJECT_ID</code></li>
                <li><code>VITE_SANITY_DATASET</code></li>
              </ul>
              <p style={{ marginTop: 12 }}>
                You can find these values in your project's{' '}
                <strong>sanity.io/manage</strong> page.
              </p>
            </div>
            <p style={{ marginTop: 24 }}>
              After updating your <code>.env</code> file, please restart the development server.
            </p>
            <div style={{ marginTop: 24 }}>
              <button
                onClick={() => window.location.reload()}
                style={{ padding: '8px 16px', marginRight: 12, cursor: 'pointer', border: '1px solid #ccc', borderRadius: 4 }}
              >
                Reload Page
              </button>
              <button
                onClick={this.handleResetError}
                style={{ padding: '8px 16px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: 4 }}
              >
                Continue with Demo Data
              </button>
            </div>
            {import.meta.env.DEV && (
              <pre style={{ color: 'red', marginTop: 16, textAlign: 'left', background: '#fff0f0', padding: 8, borderRadius: 4, whiteSpace: 'pre-wrap' }}>
                <strong>Error Details:</strong>
                <br />
                {error.stack || error.message}
              </pre>
            )}
          </div>
        );
      }

      return (
        <div style={{ padding: 32, textAlign: 'center' }}>
          <h1>Something went wrong.</h1>
          <p>We're sorry, but an unexpected error occurred.</p>
          {import.meta.env.DEV && this.state.error && (
            <pre style={{ color: 'red', marginTop: 16 }}>{this.state.error.stack || this.state.error.message}</pre>
          )}
          <button onClick={() => window.location.reload()} style={{ marginTop: 24 }}>
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
