var assert = require("assert");

class BankAccount
{
    constructor(amount)
    {
        this.balance = amount;
    }

    debit( amt )
    {
        if (amt > 20)
            amt += 1;
        if (this.balance - amt >= 0)
            this.balance -= amt;
        return this.balance;
    }

    credit( amt )
    {
        this.balance += amt;

        return this.balance;
    }

    queryBalance()
    {
        return this.balance;
    }
}


describe('Is object constructed properly', function() {
    it('Balance should be same as init value', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 50;

        // act...
        var actualResult = cut.queryBalance();

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
  });

describe('Is object debited properly', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 40;
        var debitAmount = 10;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object credited properly', function() {
    it('Balance should be increased', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 80;
        var creditAmount = 30;

        // act...
        var actualResult = cut.credit(creditAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object debited properly', function() {
    it('Balance should NOT be decreased if amount is larger than balance', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 50;
        var debitAmount = 60;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object debited properly', function() {
    it('Balance should NOT be decreased if amount is larger than balance', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 50;
        var debitAmount = 60;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object debited properly', function() {
    it('If debited amount is 20 or over, 1 should be added', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 28;
        var debitAmount = 21;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

