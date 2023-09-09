import React from 'react';
import { postApi } from '../services/PostsService';
import PostItem from './PostItem';
import { IPost } from '../store/models/IPost';



const PostConainer2 = () => {
  const { data: posts, isError, isLoading } = postApi.useFetchAllPostsQuery(5);

  
  return (
    <div>
        {/* {isLoading && <h1>Идет загрузка...</h1>}
        {isError && <h1>Произошла ошибка</h1>}
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))} */}
    </div>
  );
};

export default PostConainer2;
