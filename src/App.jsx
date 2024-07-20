import './App.css'
import ContactList from './components/ContactList'
import { useState } from 'react'
import SelectedContact from './components/SelectedContact'


const App = () => {

  const [selectedContactID, setSelectedContactID] = useState(null)

  return (
    <>
      {
        selectedContactID ? 
        <SelectedContact selectedContactID={selectedContactID} setSelectedContactID={setSelectedContactID}/> : 
        <ContactList setSelectedContactID={setSelectedContactID}/>
      }
      
    </>
  )
}

export default App
