import React from 'react'
import Card from './components(inside)/Card';

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Adhiksit"
        age={19}
        img="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Lakshya"
        age={18}
        img="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Daksh"
        age={18}
        img="https://plus.unsplash.com/premium_photo-1686730540277-c7e3a5571553?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default App
