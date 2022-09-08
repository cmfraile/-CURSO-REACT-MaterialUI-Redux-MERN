import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './auth/routes/AuthRoutes';
import { JournalRoutes } from './journal/routes/JournalRoutes';
import './main.sass'

const Japp = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={<AuthRoutes/>} />
        <Route path='/*' element={<JournalRoutes/>} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode><Japp></Japp></React.StrictMode>
);
