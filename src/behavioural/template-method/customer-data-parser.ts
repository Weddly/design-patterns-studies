import { CustomerData } from "./customer-data";

export abstract class CustomerDataParser {
    public customerData: CustomerData[] = [];

    constructor(protected filePath: string) { }

    // Final method - can't be altered by subclasses
    readonly fixCustomerData = async (): Promise<void> => {
        this.customerData = await this.parseData();
        this.hook();
        this.customerData = this.fixCpf();
    }

    private fixCpf(): CustomerData[] {
        return this.customerData.map(c => {
            return { ...c, cpf: c.cpf.replace(/\D/g, '') }
        })
    }

    protected hook(): void {
    }

    protected abstract parseData(): Promise<CustomerData[]>;

}