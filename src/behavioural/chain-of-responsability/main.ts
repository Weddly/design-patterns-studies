import { CustomerBudget } from "./customer-budget";
import { CEOBudgetHandler } from "./handlers/ceo-budget-handler";
import { DirectorBudgetHandler } from "./handlers/director-budget-handler";
import { ManagerBudgetHandler } from "./handlers/manager-budget-handler";
import { SellerBudgetHandler } from "./handlers/seller-budget-handler";

const customerBudget = new CustomerBudget(100000);
console.log(customerBudget);
const seller = new SellerBudgetHandler();
seller
    .setNextHandler(new ManagerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);