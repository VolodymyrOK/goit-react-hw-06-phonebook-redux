import data from '../data/data.json';

export const STORAGE_KEY = 'storage-contacts';

export const getListContacts = () => {
  const storageContacts = localStorage.getItem(STORAGE_KEY);
  return storageContacts !== null && storageContacts.length > 2
    ? JSON.parse(storageContacts)
    : data;
};
