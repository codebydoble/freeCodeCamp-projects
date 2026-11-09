/**
 * NankAccount. The constructor should set the default balance to 0 and initialize an empty array named transactions to store transaction records as objects.
 */
class BankAccount {
  constructor() {
    this.balance = 0
    this.transactions = [] //* {type: "deposit/withdraw", amount: number}
  }
  /**
   * Method named `deposit` that takes the deposit amount as a parameter.
   * @param {Number} amount any deposit amount greater than 0.
   * @returns {String} "Successfully deposited $[amount]. New balance: $[balance]". If the amount is less than or equal to 0, the deposit method should return "Deposit amount must be greater than zero.".
   */
  deposit(amount) {
    if (amount <= 0) return "Deposit amount must be greater than zero."
    this.transactions.push({ type: "deposit", amount })
    this.balance += amount
    return `Successfully deposited $${amount}. New balance: $${this.balance}`
  }
  /**
   * Method named `withdraw` that takes an amount as a parameter. This method should update the current balance according to withdrawals.
   * @param {Number} amount any amount greater than 0 and less than or equal to balance.
   * @returns {String} Return "Successfully withdrew $[amount]. New balance: $[balance]". If the amount to be withdrawn is less than or equal to 0 or greater than the current balance, the withdraw method should return "Insufficient balance or invalid amount.".
   */
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) return "Insufficient balance or invalid amount."
    this.transactions.push({ type: "withdraw", amount })
    this.balance -= amount
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`
  }
  /**
   * Method named `checkBalance` that returns the current balance in the format "Current balance: $[balance]".
   * @returns {String} the current balance in the format "Current balance: $[balance]".
   */
  checkBalance() {
    return `Current balance: $${this.balance}`
  }

  /**
   * Method named `listAllDeposits` that iterates through the transactions array.
   * @returns {String} returns all deposits in the format "Deposits: amount,amount,...".
   */
  listAllDeposits() {
    const amounts = this.transactions.filter(({ type, amount }) => type === "deposit").map(({ type, amount }) => amount)
    return `Deposits: ${amounts.join(",")}`
  }

  /**
   * Method named `listAllWithdrawals` that iterates through the transactions array.
   * @returns returns all withdrawals in the format "Withdrawals: amount,amount,...".
   */
  listAllWithdrawals() {
    const withdrawals = this.transactions.filter(({ type, amount }) => type === "withdraw").map(({ type, amount }) => amount)
    return `Withdrawals: ${withdrawals.join(",")}`
  }
}

const myAccount = new BankAccount()
myAccount.deposit(5000)
myAccount.deposit(5000)
myAccount.deposit(10000)
myAccount.withdraw(108)
myAccount.deposit(4000)
myAccount.withdraw(380)
myAccount.deposit(2000)
myAccount.deposit(5000)
myAccount.deposit(5000)
myAccount.withdraw(1000)
