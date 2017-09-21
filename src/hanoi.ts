import {Stack} from "./algorithms/stack-queue";

export class Hanoi {
    blocks: Stack<any>[] = [];

    start(test: number) {
        let stack = new Stack<any>();
        for(let i=test; i>0; i--) {
            stack.push(i);
        }
        this.blocks[0] = stack;
        this.blocks[1] = new Stack<any>();
        this.blocks[2] = new Stack<any>();
        this.hanoi(test);
    }

    hanoi(test: number, from?: number, to?: number) {
        const blocks = this.blocks;
        if(from === undefined) {
            this.hanoi(test, 0, 2);
        }else {
            const other = [0,1,2].filter((i)=>from!==i).filter((i)=>to!==i)[0];
            test>=2 && this.hanoi(test-1, from, other);
            blocks[to].push(blocks[from].pop());
            test>=2 && this.hanoi(test-1, other, to);
        }

        // 3つの場合の解き方
        // blocks[2].push(blocks[0].pop());
        // blocks[1].push(blocks[0].pop());
        // blocks[1].push(blocks[2].pop());
        // blocks[2].push(blocks[0].pop());
        // blocks[0].push(blocks[1].pop());
        // blocks[2].push(blocks[1].pop());
        // blocks[2].push(blocks[0].pop());

        // 2つの場合の解き方
        // blocks[1].push(blocks[0].pop());
        // blocks[2].push(blocks[0].pop());
        // blocks[2].push(blocks[1].pop());
    }

    dump() {
        console.log("********");
        // this.blocks[0].dump();
        // this.blocks[1].dump();
        this.blocks[2].dump();
        console.log("********");
    }
}

const hanoi = new Hanoi();
hanoi.start(10);
hanoi.dump();
