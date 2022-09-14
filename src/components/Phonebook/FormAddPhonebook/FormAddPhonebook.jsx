import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './form-add-phonebook.module.css';
import PropTypes from 'prop-types';

function FormAddPhonebook({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const hendleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const data = {
      name,
      phone,
    };

    onSubmit(data);

    resetAddPhonebook();
  };

  const resetAddPhonebook = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={hendleSubmit} className={styles.form}>
        <h1 className={styles.title}>Phonebook</h1>
      <label htmlFor={nameInputId} className={styles.label}>
        <h2 className={styles.subtitle}>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={styles.input}
          value={name}
          onChange={hendleInputChange}
          id={nameInputId}
          placeholder='Enter name'
        />
      </label>
      <label htmlFor={numberInputId} className={styles.label}>
        <h2 className={styles.subtitle}>Number</h2>  
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={styles.input}
          value={phone}
          onChange={hendleInputChange}
          id={numberInputId}
          placeholder='Enter the phone number'
        />
      </label>
      <button className={styles.btn} type="submit">Add contact</button>
    </form>
  );
}

export default FormAddPhonebook;

FormAddPhonebook.propTypes = {
  onSubmit: PropTypes.func,
};
 