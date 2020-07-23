import React, { useState, Suspense, lazy } from "react";
const Other = lazy(() => import("&components/Other"));

const App = () => {
  const hooks = [
    "Hooks",
    "Are",
    "Supported",
    "with",
    "react-hot-loader",
  ];
  const base = ["Base", "setup", "with", "hooks"];
  const [comments, setComments] = useState(base);
  const [isLoaded, setIsLoaded] = useState(false);

  const showHookMsg = () => {
    if (comments.length === 4) {
      setComments(hooks);
    } else {
      setComments(base);
    }
  };

  const lazyLoadOther = () => {
    if (isLoaded) {
      return (
        <Suspense fallback="getting that lazy component">
          <Other />
        </Suspense>
      );
    }
    return <h3>Nothing lazy loaded here.</h3>;
  };

  return (
    <div className="app">
      {comments.map((comment) => (
        <h1 key={comment}>{comment}</h1>
      ))}
      <button className="btn" onClick={showHookMsg}>
        Show Other Message
      </button>
      <button className="btn" onClick={() => setIsLoaded(!isLoaded)}>
        Lazy Load Component
      </button>
      {lazyLoadOther()}
    </div>
  );
};

export default App;
