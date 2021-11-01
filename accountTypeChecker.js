const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/

  /**
   * have made few assumptions for below function
   * 1. the given array should contain atleast 2 or 3 months of data. It should not contain any missing month data.
   * 2. array is already sorted on month number.
   */

  let result = "B";
  if (accountBalanceHistory.length === 2) {
    return result;
  } else if (accountBalanceHistory.length > 2) {
    const fixedAmount =
      accountBalanceHistory[1].account.balance.amount -
      accountBalanceHistory[0].account.balance.amount;
    accountBalanceHistory.slice(1).map(function (n, i) {
      const getDiff =
        n.account.balance.amount -
        accountBalanceHistory[i].account.balance.amount;
      if (getDiff !== fixedAmount) {
        result = "A";
      }
    });
    return result;
  }
};
