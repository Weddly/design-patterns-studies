import { MainDishBuilder } from "../../creational/builder/classes/main-dish-builder";
import { VeganDishBuilder } from "../../creational/builder/classes/vegan-dish-builder";

export class BuilderFacade {
    // this is a facade to folder src/creational/builder/index-builder.ts

    private mainDishBuilder = new MainDishBuilder();
    private veganDishBuilder = new VeganDishBuilder();

    makeMeal1(): void {
        this.mainDishBuilder.makeMeal().makeDessert();;
        console.log(this.mainDishBuilder.getMeal());
        console.log(this.mainDishBuilder.getPrice());
    }

    makeMeal2(): void {
        this.mainDishBuilder.reset();
        console.log(this.mainDishBuilder.getMeal());
    }

    makeMeal3(): void {
        const veganMeal = this.veganDishBuilder.makeMeal().getMeal();
        console.log(veganMeal);
        console.log(veganMeal.getPrice());
    }
}