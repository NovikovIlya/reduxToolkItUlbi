import React, { useEffect, useState } from 'react';
import { postApi } from '../services/PostsService';
import PostItem from './PostItem';
import { IPost } from '../store/models/IPost';
import styles from './PostConainer.module.scss'

const PostConainer = () => {
  const [limit, setLimit] = useState(10);
  const { data: posts, isError, isLoading, refetch } = postApi.useFetchAllPostsQuery(limit);
  const [createPost,{error:createError}] =  postApi.useCreatePostMutation()
  const [updatePost,{}] = postApi.useUpdatePostMutation()
  const [deletePost,{}] = postApi.useDeletePostMutation()


//   useEffect(()=>{
//     setTimeout(()=>{
//         setLimit(3)
//     },2000)
//   },[])
  const handleCreate = async ()=>{
    const title = prompt()
    await createPost({title, body:title} as IPost)
  }
  const handleUpdate = (post:IPost)=>{
    updatePost(post)
  }

  const handleRemove =(post:IPost)=>{
    deletePost(post)
  }

  return (
    <div className={styles.container}>
       {/* <button onClick={()=>refetch()}>REFETCH</button> */}
       <button onClick={handleCreate}>ADD</button>
      {isLoading && <h1>Идет загрузка...</h1>}
      {isError && <h1>Произошла ошибка</h1>}
      {posts?.map((post) => (
        <PostItem update={handleUpdate} remove={handleRemove} key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostConainer;
