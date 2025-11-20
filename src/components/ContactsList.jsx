import ContactItem from "./ContactItem";

function ContactsList({ contacts , deleteHandler }) {
  return (
    <div>
      <div>
        <h3>Contacts List</h3>
        {contacts.length ? (<ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data ={contact} deleteHandler={deleteHandler}/>
          ))}
        </ul>):<p>"No Cantact Yet!"</p>}
   
      </div>
    </div>
  );
}

export default ContactsList;
