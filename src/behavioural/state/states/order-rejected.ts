import { ShoppingOrder } from "../shopping-order/shopping-order";
import { OrderApproved } from "./order-approved";
import { OrderPending } from "./order-pending";
import { ShoppingOrderState } from "./shopping-order-state";

export class OrderRejected implements ShoppingOrderState {
    private name = 'OrderRejected';

    constructor(private order: ShoppingOrder) { }

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        console.log('Cannot approve already rejected orders');

    }

    rejectPayment(): void {
        console.log('Order already rejected');
    }

    waitPayment(): void {
        console.log('Cannot pend already rejected orders');

    }
    shipOrder(): void {
        console.log('Cannot ship rejected orders');

    }

}