import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.sass'

const Japp = () => {
  return(
      <h1>Cascarón react - MaterialUi</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><Japp></Japp></React.StrictMode>);
