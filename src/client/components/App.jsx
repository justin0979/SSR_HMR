import React from 'react';

const hooks = ['Hooks', 'Are', 'Supported', 'with', 'react-hot-loader'];

const App = () => {
  const [comments] = React.useState(hooks);

  return (
    <div className="app">
      {comments.map(comment => (
        <h1 key={comment}>{comment}</h1>
      ))}
    </div>
  );
};

export default App;
