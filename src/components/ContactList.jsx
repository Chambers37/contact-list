import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";


const ContactList = ({ setSelectedContactID }) => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    const getContacts = async () => {

      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const jsonResponse = await response.json();
        setContacts(jsonResponse);
      } 
      catch (err) {
        console.log(err);
      }
    }

    getContacts();

  }, [])

  return (
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
              contacts.map((contact) => {
                return <ContactRow key={contact.id} contact={contact} setSelectedContactID={setSelectedContactID}/>
              })
            }
          </tbody>
        </table>
  );
}

export default ContactList