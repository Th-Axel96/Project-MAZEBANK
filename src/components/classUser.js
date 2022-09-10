class UserAccount {
  constructor(name, numberAccount, iban, codeBank, codeGuichet, keyRib) {
    this.name = name;
    this.numberAccount = numberAccount;
    this.iban = iban;
    this.codeBank = codeBank;
    this.codeGuichet = codeGuichet;
    this.keyRib = keyRib;
  }
}

let user1 = new UserAccount(
  "Bonjour Edouard",
  12345678901,
  "FR7630001007941234567890185",
  30001,
  "00794",
  85
);

let user2 = new UserAccount(
  "Bonjour Philipe",
  1239999999,
  "FR999999999999999",
  30001,
  "00794",
  85
);
