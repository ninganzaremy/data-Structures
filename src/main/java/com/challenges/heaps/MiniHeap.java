package com.challenges.heaps;

/*Min Heap Construction O ^
Implement a MinHeap class that supports:
• Building a Min Heap from an input array of integers
Inserting integers in the heap.
• Removing the heap's minimum / root value.
• Peeking at the heap's minimum / root value.
• Sifting integers up and down the heap, which is to be used when inserting and removing values.
Note that the heap should be represented in the form of an array.
If you're unfamiliar with Min Heaps, we recommend watching the Conceptual Overview section of this question's video explanation before starting to
code.
//Sample Usage
array = [48, 12,24,7,8,-5,24,391,24,56, 2, 6, 8,41]
// All operations below are performed sequentially
MinHeap(array): - // instantiate a MinHeap (calls the buildHeap method and populates the heap)
buildHeap (array) : -[-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24,48, 41]
insert(76) : - [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41, 76]
peek() : -5
remove(): -5 [2, 7, 6, 24, 8, 8, 24, 391, 76, 56, 12, 24,48, 41]
peek() : 2
remove (): 2 [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48]
peek(): 6
insert(87): - [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12,41, 48, 87]  */

import java.util.ArrayList;
import java.util.List;

class MiniHeap {
    static class MinHeap {
        List<Integer> heap = new ArrayList<Integer>();

        public MinHeap(List<Integer> array) {
            heap = buildHeap(array);
        }

        public List<Integer> buildHeap(List<Integer> array) {
            int firstParent = (array.size() - 2) / 2;
            for (int i = firstParent; i >= 0; i--) {
                siftDown(i, array.size() - 1, array);
            }
            return array;
        }

        public void siftDown(int currentIdx, int endIdx, List<Integer> heap) {
            int child1 = (2 * currentIdx + 1);
            while (child1 <= endIdx) {
                int child2 = (2 * currentIdx + 2);
                if (child2 > endIdx)
                    child2 = -1;
                int idToSwap = child1;
                if (child2 != -1 && heap.get(child1) > heap.get(child2))
                    idToSwap = child2;
                if (heap.get(idToSwap) < heap.get(currentIdx)) {
                    swap(heap, idToSwap, currentIdx);
                    currentIdx = idToSwap;
                    child1 = 2 * currentIdx + 1;
                } else
                    return;
            }
        }

        public void siftUp(int currentIdx, List<Integer> heap) {
            int parentIndex = (currentIdx - 1) / 2;
            while (parentIndex >= 0 && heap.get(parentIndex) > heap.get(currentIdx)) {
                swap(heap, currentIdx, parentIndex);
                currentIdx = parentIndex;
                parentIndex = (currentIdx - 1) / 2;
            }

        }

        public int peek() {
            return heap.get(0);
        }

        public int remove() {
            swap(heap, 0, heap.size() - 1);
            int removedValue = heap.remove(heap.size() - 1);
            siftDown(0, heap.size() - 1, heap);
            return removedValue;
        }

        public void insert(int value) {
            heap.add(value);
            siftUp(heap.size() - 1, heap);
        }

        public void swap(List<Integer> A, int i, int j) {
            int temp = A.get(i);
            A.set(i, A.get(j));
            A.set(j, temp);
        }

    }

}
