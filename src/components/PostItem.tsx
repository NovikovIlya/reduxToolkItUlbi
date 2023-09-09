import React, { FC } from 'react';
import { IPost } from '../store/models/IPost';
import styles from './PostItem.module.scss'

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event:React.MouseEvent)=>{
    const title = prompt() || ''
    update({...post,title})
  }

  return (
    <div className={styles.container} onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;
