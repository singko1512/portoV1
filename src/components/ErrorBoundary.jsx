import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            padding: '2rem',
            background: '#080808',
            color: '#fdf5e6',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Terjadi error di portfolio</h1>
          <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
            Refresh halaman. Jika masih putih, kirim screenshot console browser (F12 → Console).
          </p>
          <pre
            style={{
              background: '#121212',
              padding: '1rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '12px',
            }}
          >
            {this.state.error?.message}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}
