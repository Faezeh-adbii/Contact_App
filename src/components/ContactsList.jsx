function ContactsList({ contacts }) {
  return (
    <div>
      <div>
        <h3>Contacts List</h3>
        {contacts.length ? (<ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                {contact.Name} {contact.LastName}
              </p>
              <p>
                <span>📧</span> {contact.Email}
              </p>
              <p>
                <span>📞</span> {contact.phone}
              </p>
              <button>🗑</button>
            </li>
          ))}
        </ul>) : <p>"No Cantact Yet!"</p> }
   
      </div>
    </div>
  );
}

export default ContactsList;
