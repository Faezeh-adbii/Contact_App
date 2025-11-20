import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css"

function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <div>
        <h3>Contacts List</h3>
        {contacts.length ? (
          <ul className={styles.contacts}>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                data={contact}
                deleteHandler={deleteHandler}
              />
            ))}
          </ul>
        ) : (
          <p className={styles.massage}>"No Cantact Yet!"</p>
        )}
      </div>
    </div>
  );
}

export default ContactsList;
