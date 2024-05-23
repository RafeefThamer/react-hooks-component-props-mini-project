// App.js
import React from 'react';
import Header from '../src/components/Header';
import About from '../src/components/About';
import ArticleList from '../src/components/ArticleList.jsx';
import blogData from '../data/blog';

function App() {
  return (
    <div className="App">
      <Header name="My Blog" />
      <About image="path/to/image.jpg" about="About my blog..." />
      <ArticleList posts={blogData} />
    </div>
  );
}

export default App;
