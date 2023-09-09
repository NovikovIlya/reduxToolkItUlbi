import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostConainer from './components/PostConainer';
import PostConainer2 from './components/PostConainer2';

function App() {
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users);

  return (
    <div className="App">
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {users.map(item=><h1>{item.name}</h1>  )} */}
      <div style={{display:'flex'}}>
        <PostConainer />
        {/* <PostConainer2 /> */}
      </div>
    </div>
  );
}

export default App;
