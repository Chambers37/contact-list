
const ContactRow = ({ setSelectedContactID, contact: { id, name, email, phone } }) => {

  // const { name, email, phone } = contact ~ wanted to learn how to destructure nested objects in the params

  return (
    <tr
      onClick={() => {
        setSelectedContactID(id);
      }}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  )
}


export default ContactRow