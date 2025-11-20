import inputs from "../constans/inputs";
import { useState } from "react";
import ContactsList from "./ContactsList";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";

function Contacts() {

  //state

  const [Contacts, setContacts] = useState([]);
  const [Alert, setAlert] = useState("");
  const [Contact, setContact] = useState({
    id: "",
    Name: "",
    LastName: "",
    Email: "",
    Phone: "",
  });


  //deleteHandler
  const deleteHandler = (id) => {
    const newContacts = Contacts.filter((Contact) => Contact.id !== id);
    setContacts(newContacts);
  };

  //changeHandler
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((Contact) => ({ ...Contact, [name]: value }));
  };

  //addhandler
  const addHandler = () => {
    console.log("Current Contact:", Contact);
    if (
      !Contact.Name ||
      !Contact.LastName ||
      !Contact.Email ||
      !Contact.Phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...Contact, id: v4() };
    setContacts((Contacts) => [...Contacts, newContact]);
    setContact({
      Name: "",
      LastName: "",
      Email: "",
      Phone: "",
    });
  };


  //Html , Css

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={Contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{Alert && <p>{Alert}</p>}</div>
      <ContactsList contacts={Contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
