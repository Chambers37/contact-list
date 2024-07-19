import { useState, useEffect } from "react" 


const SelectedContact = ({ selectedContactID, setSelectedContactID }) => {

  const [contact, setContact] = useState(null);

  useEffect(() => {

    const getContactData = async () => {

      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`);
        const jsonResponse = await response.json();
        setContact(jsonResponse);
      } 
      catch (err) {
        console.log(`Found an error! ${err}`);
      }
    }
    getContactData();
  }, []);

  console.log(contact);
  console.log(selectedContactID)

  return (
    <>
      {
        contact ? 
        <div key={contact.id}> <h2>{contact.name}</h2>
        <ul>
          <li>{contact.email}</li>
          <li>{contact.phone}</li>
          <li>{`${contact.address.suite} ${contact.address.street}, ${contact.address.city}`}</li>
        </ul>
        <button onClick={() => {
          setSelectedContactID(null)
        }}>Go Back</button>
        </div>
        : <h3>somethings wrong</h3>
      }
    </>
  )
}

export default SelectedContact