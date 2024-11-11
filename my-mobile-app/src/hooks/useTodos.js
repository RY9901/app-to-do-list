import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const useTodos = (user) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user) {
      fetchItems();
    }
  }, [user]);

  const fetchItems = async () => {
    if (!user) return;
    const querySnapshot = await getDocs(collection(db, 'todos', user.uid, 'items'));
    const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsList);
  };

  const addItem = async (text) => {
    if (text.trim() && user) {
      await addDoc(collection(db, 'todos', user.uid, 'items'), { text });
      fetchItems();
    }
  };

  const updateItem = async (id, newText) => {
    if (user) {
      const itemDoc = doc(db, 'todos', user.uid, 'items', id);
      await updateDoc(itemDoc, { text: newText });
      fetchItems();
    }
  };

  const deleteItem = async (id) => {
    if (user) {
      const itemDoc = doc(db, 'todos', user.uid, 'items', id);
      await deleteDoc(itemDoc);
      fetchItems();
    }
  };

  return { items, addItem, updateItem, deleteItem };
};