#! /usr/bin/env node
import inquirer from "inquirer"
let UserBalance = 25000;
let UserPin = 51214
let BalanceMessage = "YOUR REMAINING BALANCE IS = ";
let BalanceMessage2 = "YOUR CURRENT AVAILABLE BALANCE IS = ";


console.log("\nWELCOME TO BANK AL-HABIB!!\n")


console.log("PLEASE INSERT YOUR CARD")

let CheckPinAnswer = await inquirer.prompt([{
    message: "\nPLEASE ENTER YOUR PIN NUMBER = ",
    type:"number",
    name:"CheckPin"
}]);

if(CheckPinAnswer.CheckPin === UserPin){

    console.log("\nSUCESSFULLY LOGIN TO YOUR ACCOUNT")

    let CheckOperationsAnswer = await inquirer.prompt([{
    message:"\nWHAT DO YOU WANT TO DO ? ",
    type:"list",
    choices:["WITHDRAW","CHECK BALANCE","FASTCASH"],
    name:"CheckOperations"

}]);

if(CheckOperationsAnswer.CheckOperations === "WITHDRAW")
{
    let CheckAmountAnswer = await inquirer.prompt([{
        message:"PLEASE ENTER YOUR AMOUNT = ",
        type:"number",
        name:"CheckAmount"
        }]);
if(CheckAmountAnswer.CheckAmount > 25000){
    
        console.log("THE ENTERED AMOUNT EXCCEDS THE LIMIT OF YOUR ORIGINAL BALANCE");

}
else{
        UserBalance -= CheckAmountAnswer.CheckAmount;

        console.log(`${BalanceMessage} ${UserBalance}`);
}
}

else if(CheckOperationsAnswer.CheckOperations === "CHECK BALANCE"){

    console.log(`${BalanceMessage2} ${UserBalance}`)

}
else if(CheckOperationsAnswer.CheckOperations === "FASTCASH"){

    let CheckFastCashAnswer = await inquirer.prompt([{
    message:"\nPLESE SELECT THE AMOUNT\n",
    type:"list",
    choices:["500","1000","3000","5000","10000","15000","20000","25000"],
    name:"CheckFastCash"
}]);

UserBalance -= CheckFastCashAnswer.CheckFastCash;

console.log(`${BalanceMessage} ${UserBalance}`);


}

}
else{
    console.log("\nINCORRECT PIN NUMBER")
}