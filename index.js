// 3 rd question
var personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [],
    expenses: [],
    

    totalIncome: function() {
      var total = 0;
      for (var i = 0; i < this.incomes.length; i++) {
        total += this.incomes[i].amount;
      }
      return total;
    },
  
    
    totalExpense: function() {
      var total = 0;
      for (var i = 0; i < this.expenses.length; i++) {
        total += this.expenses[i].amount;
      }
      return total;
    },
  
    
    accountInfo: function() {
      var info = "Account Information\n";
      info += "Name: " + this.firstName + " " + this.lastName + "\n";
      info += "Income: " + this.totalIncome() + "\n";
      info += "Expenses: " + this.totalExpense() + "\n";
      info += "Account Balance: " + (this.totalIncome() - this.totalExpense()) + "\n";
      return info;
    },
  
    
    addIncome: function(description, amount) {
      this.incomes.push({description: description, amount: amount});
    },
  
    
    addExpense: function(description, amount) {
      this.expenses.push({description: description, amount: amount});
    },
  
    
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  
  personAccount.addIncome("Salary", 3000);
  personAccount.addIncome("Bonus", 500);
  personAccount.addExpense("Rent", 1000);
  personAccount.addExpense("Groceries", 500);
  

  console.log(personAccount.accountInfo()); 
  
  
  console.log(personAccount.accountBalance()); 
  