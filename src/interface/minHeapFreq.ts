export default class MinHeap<T extends object> {
  public heap: T[];
  private compareField: keyof T;

  constructor(compareField: keyof T) {
    this.heap = [];
    this.compareField = compareField;
  }

  size() {
    return this.heap.length;
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
  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // 向上调整
  private heapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.parent(index);
      if (this.compare(this.heap[index], this.heap[parentIndex])) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 删除并返回最小值
  remove(): T | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return min;
  }

  // 向下调整
  private heapifyDown(index: number): void {
    while (true) {
      let minIndex = index;
      const left = this.leftChild(index);
      const right = this.rightChild(index);

      if (left < this.heap.length && this.compare(this.heap[left], this.heap[minIndex])) {
        minIndex = left;
      }
      if (right < this.heap.length && this.compare(this.heap[right], this.heap[minIndex])) {
        minIndex = right;
      }

      if (minIndex === index) break;

      this.swap(index, minIndex);
      index = minIndex;
    }
  }

  // 比较两个元素
  private compare(a: T, b: T): boolean {
    return (a[this.compareField] as number) < (b[this.compareField] as number);
  }

  // 获取堆内容
  getHeap(): T[] {
    return [...this.heap];
  }
}

// 使用示例：
export interface FreqItem {
  num: number;
  freq: number;
}

const heap = new MinHeap<FreqItem>('freq');

heap.insert({ num: 5, freq: 10 });
heap.insert({ num: 3, freq: 5 });
heap.insert({ num: 7, freq: 15 });
heap.insert({ num: 1, freq: 8 });

console.log(heap.remove()); // { value: 3, freq: 5 }
console.log(heap.remove()); // { value: 1, freq: 8 }
console.log(heap.remove()); // { value: 5, freq: 10 }
console.log(heap.remove()); // { value: 7, freq: 15 }