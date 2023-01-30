import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import {Hem} from './pages';
import {Header} from './components';

function App() {

  return (
    <>
      <section className='w-full'>
        <Header />
      </section>
      <section className='w-full'>
        <Routes>
            <Route path="/" element={<Hem />} />
        </Routes>
      </section>
    </>
  )
}

export default App
