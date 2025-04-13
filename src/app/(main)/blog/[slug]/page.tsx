import React from 'react';
import { useRouter } from 'next/router';

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const blogPosts = [
    { slug: 'first-blog-post', title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    { slug: 'second-blog-post', title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
    { slug: 'third-blog-post', title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
  ];

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
