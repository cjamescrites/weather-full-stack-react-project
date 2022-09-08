import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      try {
        
      } catch (error) {
        this.setState({ error });
      }
    }
  
    render() {
      if (this.state.error) {
        return <h1>Caught an error.</h1>
      }
    }
  }

  export default ErrorBoundary