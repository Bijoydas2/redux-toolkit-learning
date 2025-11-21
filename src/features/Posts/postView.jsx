import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './postSlice';

const PostView = () => {
  const { isLoading, posts, error } = useSelector(state => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
   useEffect(()=>{
   dispatch(fetchPost());
  },[])



  return (
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold mt-10 mb-10">Posts</h1>
      
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>Error: {error}</h3>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts?.map(post => (
          <div 
            key={post.id} 
            className="bg-white shadow-md rounded-lg p-6 text-left"
          >
            <h5 className="text-xl font-semibold mb-2">{post.title}</h5>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostView;
