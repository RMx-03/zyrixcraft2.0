import React, { lazy, Suspense, ReactNode, useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import NotFound from "./components/NotFound"; 
import Thanks from "../src/pages/Thanks";
import Loader from "./components/Loader";

const ClientHome = lazy(() => import("./pages/ClientHome"));
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
  
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => { 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return (
      <div className="w-screen h-screen">
        <Loader />
      </div>
    );
  }
  

  return (
    <div className=" bg-black  overflow-x-hidden">
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
