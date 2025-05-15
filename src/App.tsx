import React, { lazy, Suspense, ReactNode, useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import NotFound from "./components/NotFound"; // Make sure path is correct
import "../src/pages/Thanks";
import Thanks from "../src/pages/Thanks";
const ClientHome = lazy(() => import("./pages/ClientHome"));
import Loader from "./components/Loader";
// Type definitions for ErrorBoundary
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />;
    }

    return this.props.children;
  }
}

function App() {
  // state to track if the initial loading is complete
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading time
  useEffect(() => {
    // timeout to ensure minimum loading screen display time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // loader during initial loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-[var(--color-background)] overflow-x-hidden">
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Wrapper />} />
              <Route path="/client" element={<ClientHome />} />
              <Route path="/thanks" element={<Thanks />} />
              <Route path="/loader" element={<Loader />} />              
              <Route path="/404" element={<NotFound />} />              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
