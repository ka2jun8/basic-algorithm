import {Node, Container} from "../node";
import * as assert from "power-assert";

const INITIAL_CAPACITY = 1024; 

export class ArrayList<T> extends Container {
    capacity: number = INITIAL_CAPACITY;
    data: any[];

    constructor() {
        super();
        this.data = new Array(this.capacity);
    }

    add(data: T) {
        if(this.capacity <= this.getSize()){
            this.expandCapacity();
        }
        this.data[this.getSize()] = data;
        this.increment();
    }

    expandCapacity() {
        const largerData = new Array(this.capacity*2);
        Object.assign(largerData, this.data);
        this.capacity *= 2;
        this.data = largerData;
    }

    get(index: number): T {
        if(index < 0 || this.getSize() < index){
            return null;
        }else {
            return this.data[index];
        }
    }

    removeAt(index: number): boolean {
        if(index < 0 || this.getSize() < index){
            return false;
        }
        else {
            this.leftShift(index);
            this.decrement();
            return true;
        }
    }

    leftShift(index: number) {
        for(let i=index; i<this.getSize()-1; i++) {
            this.data[i] = this.data[i+1];
        }
        this.data[this.getSize()-1] = null;
    }

    toString(): string {
        let sb: string = "[";
        for(let i=0; i<this.getSize(); i++){
            sb += this.data[i];
            sb += " ";
        }
        sb += "]";
        return sb;
    }

    dump() {
        console.log("=== dump start ===");
        console.log(this.toString());
        console.log("=== dump end ===");
    }

}

const test = ()=>{
    const list: ArrayList<number> = new ArrayList<number>();
    // list.dump();
    list.add(1);
    // list.dump();
    list.add(2);
    // list.dump();
    list.add(-3);
    // list.dump();
    list.removeAt(1);
    // list.dump();
    
    assert(list.get(0)===1);
    assert(list.get(1)===-3);
    assert(list.get(2)===null);
    
};

test();