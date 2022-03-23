import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundery extends Component {
  state = { hasError: false, redirect: false };
  static getDeriveStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error. Oh no. <Link to="/">Click here</Link> to back to
          the home page or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}


export default ErrorBoundery;
