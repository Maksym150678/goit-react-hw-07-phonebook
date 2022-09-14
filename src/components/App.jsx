import { useEffect } from 'react';
import PhonebookList from './Phonebook/PhonebookList/PhonebookList';
import FormAddPhonebook from './Phonebook/FormAddPhonebook/FormAddPhonebook';
import Filter from './Phonebook/Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  addItems,
} from 'redux/items/itemsOperations';
import { addFilter } from 'redux/filter/filterActions';
import { getContactsList } from '../redux/items/itemsSelector';
import { getFilter } from '../redux/filter/filterSelector';

function App() {
  const { loading } = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const phoneList = useSelector(store => {
    const filteredContact = store.contacts.items.filter(item =>
      item.name.toLowerCase().includes(store.filter.toLocaleLowerCase())
    );
    return filteredContact;
  });

  const onAddContact = data => {
    const action = addItems(data);
    dispatch(action);
  };

  const onDelContact = id => {
    const action = deleteContacts(id);
    dispatch(action);
  };

  const onChangeFilter = event => {
    const action = addFilter(event.currentTarget.value);
    dispatch(action);
  };

  return (
    <>
      <FormAddPhonebook onSubmit={onAddContact} />

      <Filter value={filter} onChange={onChangeFilter} />
      {loading && <p>...Loading</p>}
      <PhonebookList
        phoneList={phoneList}
        onDeletePhoneListItem={onDelContact}
      />
    </>
  );
}

export default App;