import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
    { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
