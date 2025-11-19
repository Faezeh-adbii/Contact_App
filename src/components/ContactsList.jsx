
function ContactsList({contacts}) {
  console.log(contacts);
  return (
    <div>
        <div>
          <h3>Contacts List</h3>
          <ul>
            {contacts.map(contact => (<li key={contact.id}>{contact.Name}</li>) )}
          </ul>
        </div>
    </div>
  )
}

export default ContactsList