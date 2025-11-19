import inputs from "../constans/inputs";
import { useState } from "react";
import ContactList from "./ContactList";

function Contacts() {
  const [Contacts, setContacts] = useState([]);
  const [Alert, setAlert] = useState("");
  const [Contact, setContact] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((Contact) => ({ ...Contact, [name]: value }));
  };

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
    setAlert("nule");

    setContacts((Contacts) => [...Contacts, Contact]);
    setContact({
      Name: "",
      LastName: "",
      Email: "",
      Phone: "",
    });
  };

  return (
    <div>
      <div>
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
      <div>{Alert && <p>{Alert}</p>}</div>
      <ContactList contacts={Contacts} />
    </div>
  );
}

export default Contacts;
