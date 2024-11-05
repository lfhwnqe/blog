export default class MinHeap {
    public heap: number[];
  
    constructor() {
      this.heap = [];
    }
  
    // 获取父节点索引
    private parent(index: number): number {
      return Math.floor((index - 1) / 2);
    }
  
    // 获取左子节点索引
    private leftChild(index: number): number {
      return 2 * index + 1;
    }
  
    // 获取右子节点索引
    private rightChild(index: number): number {
      return 2 * index + 2;
    }
  
    // 交换两个节点
    private swap(i: number, j: number): void {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    // 插入节点
    insert(value: number): void {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // 向上调整
    public heapifyUp(index: number): void {
      while (index > 0) {
        const parentIndex = this.parent(index);
        if (this.heap[parentIndex] > this.heap[index]) {
          this.swap(index, parentIndex);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // 删除并返回最小值
    remove(): number | undefined {
      if (this.heap.length === 0) return undefined;
      if (this.heap.length === 1) return this.heap.pop();
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop()!;
      this.heapifyDown(0);
  
      return min;
    }
  
    // 向下调整
    public heapifyDown(index: number): void {
      while (true) {
        let minIndex = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);
  
        if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
          minIndex = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
          minIndex = right;
        }
  
        if (minIndex === index) break;
  
        this.swap(index, minIndex);
        index = minIndex;
      }
    }
  }

  // // 使用示例
// const heap = new MinHeap();
// heap.insert(5);
// heap.insert(3);
// heap.insert(7);
// heap.insert(1);

// console.log(heap.remove()); // 1
// console.log(heap.remove()); // 3
// console.log(heap.remove()); // 5
// console.log(heap.remove()); // 7
// console.log(heap.remove()); // undefined
// 堆解决。堆是完全的二叉树
// 最大堆，根节点值最大。
// 最小堆，根节点值最小