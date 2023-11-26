import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Bevarage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijao', 10);
        const meat = new Meat('Carne', 20);

        this._meal.add(rice, beans, meat);

        return this;
    }

    makeBevarage(): this {
        const bevarage = new Bevarage('Bebida', 3);

        this._meal.add(bevarage);

        return this;
    }
    makeDessert(): this {
        const dessert = new Dessert('Sobremesa', 7);

        this._meal.add(dessert);

        return this;
    }

    getMeal(): MealBox {
        // this.reset();
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
}