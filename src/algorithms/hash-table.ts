import {ArrayList} from "./array-list";
import {LinkedList} from "./linked-list";
import * as assert from "power-assert";

const TABLE_SIZE = 512;

export class KeyValuePair<K0, V0> {
    key: K0;
    value: V0;
    constructor(k: K0, v: V0) {
        this.key = k;
        this.value = v;
    }
}

/**
 * keyのハッシュ値でArrayListを組み
 * LinkedListでkey-valueのペアを管理する
 */
export class HashMap<K, V> {
    table: ArrayList<LinkedList<KeyValuePair<K,V>>> = new ArrayList();
    
    constructor() {
        for(let i=0; i<TABLE_SIZE; i++){
            this.table.add(new LinkedList());
        }
    }

    hashCode(key: K) {
        let result = 0;
        if(typeof key === "number"){
            result = key;
        }else {
            result = key.toString().length;
        }
        return result;
    }

    put(key: K, value: V){
        const list = this.table.get(this.hashCode(key) % TABLE_SIZE);
        const ite = list.iterator();

        let kv: KeyValuePair<K,V>;
        while(ite.hasNext()) {
            kv = ite.next();
            if(kv.key === key){
                kv.value = value;
                return;
            }
        }
        list.append(new KeyValuePair(key, value));
    }

    get(key: K): V{
        const list = this.table.get(this.hashCode(key) % TABLE_SIZE);
        const ite = list.iterator();
        let kv: KeyValuePair<K,V>;
        while(ite.hasNext()) {
            kv = ite.next();
            if(kv.key === key){
                return kv.value;
            }
        }
    }

    dump() {
        console.log("=== dump start ===");
        for(let i=0; i<TABLE_SIZE; i++){
            const list = this.table.get(i);
            if(!list.isEmpty()){
                console.log("list No.["+i+"]");
                const ite = list.iterator();
                let kv: KeyValuePair<K,V>;
                while(ite.hasNext()) {
                    kv = ite.next();
                    console.log("kv = ", {key: kv.key, value: kv.value});
                }
            }
        }
        console.log("=== dump end ===");
    }

}

const test = ()=>{
    const hm = new HashMap<number, string>();

    // hm.dump();
    hm.put(1, "one");
    // hm.dump();
    hm.put(2, "tw");
    // hm.dump();
    hm.put(2, hm.get(2)+"o");
    // hm.dump();
    hm.put(100, "hundred");
    // hm.dump();

    assert(hm.get(1)==="one");
    assert(hm.get(2)==="two");
    assert(hm.get(100)==="hundred");
};

test();
