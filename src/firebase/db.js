import { db } from './firebase';

// User API

export const doCreateUser = (id, name, email, phone, status) =>
  db.ref(`users/${id}`).set({
    name,
    email,
    phone,
    roles: ['USER'],
    status
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const getUserByUid = (uid) =>
  db.ref(`users/${uid}`).once('value')

export const getAllUser = () =>
  db.ref(`users`).once('value')

export const updateUser = (data) =>
  db.ref(`users/${data.id}`).update({
    name: data.name,
    phone: data.phone,
    status: data.status
  })

export const deleteUser = (id) =>
  db.ref(`users/${id}`).update({
    status: false
  })
