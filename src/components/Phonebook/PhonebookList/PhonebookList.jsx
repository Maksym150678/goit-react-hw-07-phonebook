import styles from './phonebook-list.module.css';
import PropTypes from 'prop-types';

const PhonebookList = ({ phoneList, onDeletePhoneListItem }) => {
  return (
    <ul className={styles.list}>
      {phoneList.map(({ id, name, number }) => (
        <li key={id} className={styles.phonebookListItem}>
          <p className={styles.nameText} >{name}</p>
          <p className={styles.phoneNumber} >{number}</p>
          <button
            className={styles.buttonDelete}
            onClick={() => onDeletePhoneListItem(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhonebookList;

PhonebookList.propTypes = {
  phoneList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletePhoneListItem: PropTypes.func,
};
