export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

export const phoneRegex = /^(?:\+90|0)?5\d{9}$/;

export const taxIdRegex = /^T\d{8}V\d{2}$/;

export const ibanRegex = /^TR\d{24}$/;