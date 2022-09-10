import styles from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>Contacts</h2>
      <label className={styles.label}>
        Find contacts by name
        <input className={styles.input_filter} type="text" name="name" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};