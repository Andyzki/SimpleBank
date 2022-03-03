class BankAccount {

    constructor() {
        this.accountBalance = 0
        this.isOpen=false
    }

    open() {
        if(this.isOpen==true)
            throw new ValueError()
        this.isOpen=true
    }

    close() {
        if(this.isOpen==false)
            throw new ValueError()
        this.isOpen=false;
        this.accountBalance=0
    }

    deposit(money) {
        if(this.isOpen==false)
            throw new ValueError()
        if(money<0)
         throw new ValueError()
        this.accountBalance+=money
    }

    withdraw(money) {
        if(money<0)
            throw new ValueError()
        if(this.accountBalance<money)
            throw new ValueError()
        if(this.isOpen==false)
            throw new ValueError()
        this.accountBalance=this.accountBalance-money

        


    }

    get balance() {
        if(this.isOpen==false)
            throw new ValueError()
        return this.accountBalance

    }
}

class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}

module.exports = {
    BankAccount,
    ValueError
}