import {HashMap} from "./hash-table";

export class HashSet<T> extends HashMap<T,boolean>{
    constructor() {
        super();
    }

    add(data: T) {
        super.put(data, true);
    }

    contains(data: T){
        return super.get(data) !== null;
    }
}
