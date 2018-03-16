import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>React Application</h1>
    <ul>
      <li><Link to='/teacher'>Teacher</Link></li>
      <li><Link to='/student'>Student</Link></li>
    </ul>
  </div>
)

export default Home;
