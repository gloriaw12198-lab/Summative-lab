require("@testing-library/jest-dom");

if (!globalThis.crypto) {
  globalThis.crypto = {};
}

if (!globalThis.crypto.randomUUID) {
  let id = 0;
  globalThis.crypto.randomUUID = () => `test-id-${id += 1}`;
}