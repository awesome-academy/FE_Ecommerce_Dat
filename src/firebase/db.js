import { db } from './firebase';
import { auth } from './firebase';
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

// Category
export const getAllCategories = () =>
  db.ref(`categories`).once('value')

export const createCategory = (data) =>
  db.ref(`categories`).push(data)

export const updateCategory = (data) =>
  db.ref(`categories/${data.id}`).set({ name: data.name })

export const deleteCategory = (id) =>
  db.ref(`categories/${id}`).set({})

// Products
export const fetchAllProducts = () =>
  db.ref(`products`).once('value')

export const createProduct = (data) =>
  db.ref(`products`).push(data)

export const updateProduct = ({ data }) =>
  db.ref(`products/${data.id}`).set({
    category: data.category,
    name: data.name,
    images: data.images,
    color: data.color,
    features: data.features,
    information: data.information,
    price_n: data.price_n,
    price_o: data.price_o,
    quantity: data.quantity,
  })

export const deleteProduct = (id) =>
  db.ref(`products/${id}`).update({
    status: false
  })

// Cart
export const saveToCart = (uid, cart) =>
  db.ref(`cart/${uid}`).set(cart)

export const updateToCart = (uid, id, quantity) =>
  db.ref(`cart/${uid}/${id}`).set(quantity);

export const getCart = (uid) =>
  db.ref(`cart/${uid}`).once('value')

// Order
export const createOrder = (data) =>
  db.ref(`orders`).push(data)

// Orders Admin
export const getAllOrders = () =>
  db.ref(`orders`).once('value')

export const updateOrderStatus = (oid, status) =>
  db.ref(`orders/${oid}`).update({ status })
