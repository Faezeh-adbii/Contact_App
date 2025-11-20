function ContactItem({data:{id , Name , LastName , Email , Phone }}) {

  return (
    <li key={id}>
      <p>
        {Name} {LastName}
      </p>
      <p>
        <span>📧</span> {Email}
      </p>
      <p>
        <span>📞</span> {Phone}
      </p>
      <button>🗑</button>
    </li>
  );
}

export default ContactItem;
