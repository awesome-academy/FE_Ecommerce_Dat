import { db } from './firebase';

// User API

export const doCreateUser = (id, name, email, phone) =>
    db.ref(`users/${id}`).set({
        name,
        email,
        phone
    });

export const onceGetUsers = () =>
    db.ref('users').once('value');

// Other Entity APIs ...
