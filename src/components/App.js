import React, { useState } from 'react';
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="container-fluid">
      <UserList />
      <div>
        <button className="btn" onClick={() => setResource('posts')}>posts</button>
        <button className="btn" onClick={() => setResource('todos')}>todos</button>
      </div>
      <ResourceList resource={resource}/>
    </div>
  )
  
}

export default App;