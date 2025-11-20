import styles from "./ContactItem.module.css"
function ContactItem({data:{id , Name , LastName , Email , Phone } , deleteHandler}) {
  return (
    <li className={styles.item}>
      <p>
        {Name}{LastName}
      </p>
      <p>
        <span>📧</span>{Email}
      </p>
      <p>
        <span>📞</span>{Phone}
      </p>
      <button onClick={() => deleteHandler(id)}>🗑</button>
    </li>
  );
}

export default ContactItem;
