import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import ArticleList from './components/ArticleList.jsx';
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
