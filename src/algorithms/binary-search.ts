import * as assert from "power-assert";

export class BinarySearch {

    public static binarySearch(array: number[], target: number): number {
        let left = 0;
        let right = array.length - 1;

        while(left <= right) {
            let mid = (left+right)/2;
            let value = array[mid];

            if(target < value) {
                right = mid - 1;
            }else if(value < target) {
                left = mid + 1;
            }else {
                return mid;
            }
        }

        return -1;
        
    }

    public static binarySearchRecursive(array: number[], target: number, left?: number, right?: number) {
        if(!left && !right) {
            return this.binarySearchRecursive(array, target, 0, array.length-1);
        }else {
            if(right < left) {
                return -1
            }

            let mid = (left+right)/2;
            let value = array[mid];
            if(target < value) {
                return this.binarySearchRecursive(array, target, left, mid-1);
            }else if(target > value) {
                return this.binarySearchRecursive(array, target, mid+1, right);
            }else {
                return mid;
            }

        }
    }

}

function test() {
    const array = [1, 5, 9];
    assert(BinarySearch.binarySearch(array, 1) === 0);
    assert(BinarySearch.binarySearch(array, 5) === 1);
    assert(BinarySearch.binarySearch(array, 9) === 2);
    assert(BinarySearch.binarySearch(array, 3) === -1);
}

test();