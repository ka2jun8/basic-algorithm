import {Node, Container} from "../node";
import {ArrayList} from "./array-list";

export class ArrayStack<T> extends ArrayList<T> {
    constructor() {
        super();
    }

    push(data: T) {
        super.add(data);
    }

    pop(): T{
        if(this.isEmpty()){
            return null;
        }else {
            this.decrement();
            const data = super.get(this.getSize());
            return data;
        }
    }

    peek(): T{
        const data = this.get(this.getSize()-1);
        return data;
    }

}