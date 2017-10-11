var Account = require('./account');


var Bank = function() {
  this.accounts = []
}

Bank.prototype = {

  addAccount: function(account) {
    this.accounts.push(account)
  }

}

Bank.prototype.totalValue =  function() {

  var sum = 0;
  this.accounts.forEach(function (account){
    sum += account.value;
  });
  return sum;
};

Bank.prototype.accountByName = function (targetName) {
  return this.accounts.find(function (account) {
    return account.name === targetName;
  });
};

Bank.prototype.largestAccount = function() {
  var temporaryAccount = new Account;
  temporaryAccount.value = 0;
  this.accounts.forEach(function (account){
    if(account.value > temporaryAccount.value){
      temporaryAccount = account;
    }
  });
  return temporaryAccount;
}

Bank.prototype.averageValue = function() {
  var total = 0;
  this.accounts.forEach ( function(account) {
    total += account.value;
  })
  return total / this.accounts.length;
}

Bank.prototype.businessAccounts = function() {
  var businessArray = [];
  this.accounts.forEach (function(account) {
    if (account.accountType === "business"){
      businessArray.push(account);
    }
  });
  return businessArray;
}

module.exports = Bank;
