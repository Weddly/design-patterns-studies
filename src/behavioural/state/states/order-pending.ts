import { ShoppingOrder } from "../shopping-order/shopping-order";
import { OrderApproved } from "./order-approved";
import { OrderRejected } from "./order-rejected";
import { ShoppingOrderState } from "./shopping-order-state";

export class OrderPending implements ShoppingOrderState {
    private name = 'OrderPending';

    constructor(private order: ShoppingOrder) { }

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        this.order.setState(new OrderApproved(this.order));
    }

    rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order));
    }

    waitPayment(): void {
        console.log('Order already waiting for payment');
    }

    shipOrder(): void {
        console.log('Waiting for payment...')
    }

}