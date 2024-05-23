// src/auth.js
import { writable } from 'svelte/store';

// Create a store to hold the current user
export const currentUser = writable(null);

export const fakeUsers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', password: '1' },
    { id: 2, name: 'Bob', email: 'bob@example.com', password: '2' },
  ];

export function login(email, password) {
  const user = fakeUsers.find(user => user.email === email && user.password === password);
  if (user) {
    currentUser.set(user);
    return true;
  } else {
    return false;
  }
}

export function logout() {
  currentUser.set(null);
}