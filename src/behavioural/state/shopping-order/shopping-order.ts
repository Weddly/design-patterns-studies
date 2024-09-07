import { OrderPending } from "../states/order-pending";
import { ShoppingOrderState } from "../states/shopping-order-state";

export class ShoppingOrder {
    private state: ShoppingOrderState = new OrderPending(this);

    getState(): ShoppingOrderState {
        return this.state;
    }

    setState(state: ShoppingOrderState): void {
        this.state = state;
        console.log('Current state: ' + this.getStateName());
    }

    getStateName(): string {
        return this.state.getName();
    }

    approvePayment(): void {
        this.state.approvePayment();
    }

    rejectPayment(): void {
        this.state.rejectPayment();
    }

    waitPayment(): void {
        this.state.waitPayment();
    }

    shipOrder(): void {
        this.state.shipOrder();
    }
}