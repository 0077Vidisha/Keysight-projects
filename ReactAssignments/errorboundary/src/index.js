import React from "react";
import { createRoot } from "react-dom/client";
 

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }
 
  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }
 
  render() {
    if (this.state.hasError) {
      return <p style={{ color: "red" }}>{this.state.message}</p>;
    }
    return this.props.children;
  }
}
 

function ErrorComp1() {
  throw new Error("from first component");
}
 
function Comp2() {
  return <p>you are doing well !!</p>;
}
 
function ErrorComp3() {
  throw new Error("from third component");
}
 

function App() {
  return (
    <div>
      <ErrorBoundary>
        <ErrorComp1 />
      </ErrorBoundary>
 
      <ErrorBoundary>
        <Comp2 />
      </ErrorBoundary>
 
      <ErrorBoundary>
        <ErrorComp3 />
      </ErrorBoundary>
    </div>
  );
}
 

const root = createRoot(document.getElementById("root"));
root.render(<App />);