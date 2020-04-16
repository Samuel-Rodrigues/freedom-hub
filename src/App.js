import React from 'react';
import { useSelector } from 'react-redux';

import Routes from './routes';

export default function App() {
  const signed = useSelector(state => state.user.profile);
  return (<>
    <Routes singnIn={signed} />
  </>)
}
