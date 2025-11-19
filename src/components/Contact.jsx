import { useState } from "react";

function Contact() {
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

  const addHandler= () =>{
    console.log(Contact)
  }


  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={Contact.Name}
          name="Name"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={Contact.LastName}
          name="LastName"
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="Email"
          value={Contact.Email}
          name="Email"
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="phone"
          value={Contact.Phone}
          name="Phone"
          onChange={changeHandler}
        />
        <button onClick={addHandler}>Add Contact</button>
      </div>
    </div>
  );
}

export default Contact;
