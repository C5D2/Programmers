// 매번 정렬 효율성 테스트 실패...인덱스 접근하는 방법도 효율성 테스트 실패...
// function solution(scoville, K) {
//     const sortScoville = scoville.sort((a, b) => a - b);
//     let count = 0;
    
//     while (sortScoville[0] < K && sortScoville.length > 1) {
//         const scovilleNumber = sortScoville[0] + sortScoville[1] * 2;
        
//         sortScoville.splice(0, 2, scovilleNumber);
//         sortScoville.sort((a, b) => a - b);
//         count++;
//     }
      
//     return sortScoville[0] >= K ? count : -1;
//   }

class Heap {
    constructor(comparator = 'MIN', list) {
        this.heap = [];
        
        switch (comparator) {
            case 'MAX':
                this.comparator = (a, b) => a > b;
                break;
            case 'MIN':
                this.comparator = (a, b) => a < b;
                break;
            default:
                this.comparator = comparator;
        }

        if (list?.length) {
            for (const item of list) {
                this.push(item);
            }
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.size() < 2) {
            return this.heap.pop();
        }
        this.swap(0, this.size() - 1);
        const returnValue = this.heap.pop();
        if (this.size() >= 2) {
            this.heapifyDown();
        }
        return returnValue;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp() {
        for (
            let i = this.size() - 1, parent = this.parentIndex(i);
            i > 0 && this.comparator(this.heap[i], this.heap[parent]);
            i = parent, parent = this.parentIndex(i)
        ) {
            this.swap(i, parent);
        }
    }

    parentIndex(i) {
        return Math.trunc((i - 1) / 2);
    }

    heapifyDown() {
        for (
            let i = 0, compareChild = this.compareChildIndex(i);
            i !== compareChild;
            i = compareChild, compareChild = this.compareChildIndex(i)
        ) {
            this.swap(i, compareChild);
        }
    }

    compareChildIndex(current) {
        const leftChild = 2 * current + 1;
        const rightChild = 2 * current + 2;
        let compare = current;

        if (leftChild < this.size() && 
            this.comparator(this.heap[leftChild], this.heap[compare])) {
            compare = leftChild;
        }
        if (rightChild < this.size() && 
            this.comparator(this.heap[rightChild], this.heap[compare])) {
            compare = rightChild;
        }
        return compare;
    }
}

function solution(scoville, K) {
    if (scoville.length === 0) return -1;
    if (scoville.length === 1) return scoville[0] >= K ? 0 : -1;
    if (scoville.every(s => s >= K)) return 0;
    
    const heap = new Heap('MIN', scoville);
    let count = 0;
    
    while (heap.size() >= 2 && heap.peek() < K) {
        const first = heap.pop();
        const second = heap.pop();
        heap.push(first + second * 2);
        count++;
    }
    
    return heap.peek() >= K ? count : -1;
}