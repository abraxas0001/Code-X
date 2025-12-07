// Mock data for development without MongoDB

export const mockTopics = [
  {
    _id: '0',
    meta: {
      title: 'Introduction to DSA',
      slug: 'dsa-introduction',
      category: 'DSA',
      tags: ['introduction', 'overview', 'fundamentals'],
      estimatedTime: 20,
    },
    content: {
      beginner: {
        markdownText: `
# Data Structures and Algorithms - Your Journey Starts Here! 🚀

Welcome to the world of Data Structures and Algorithms! This is where you'll learn the fundamental building blocks that power every piece of software you use daily.

## What are Data Structures?

Data structures are ways to organize and store data so you can use it efficiently. Think of them as different types of containers:
- **Arrays** are like a row of boxes, numbered in order
- **Stacks** are like a pile of plates (last in, first out)
- **Trees** are like family trees, with branches and connections
- **Graphs** are like maps showing how cities connect

## What are Algorithms?

Algorithms are step-by-step instructions to solve problems. They're like recipes:
- **Sorting** arranges items in order (like alphabetizing names)
- **Searching** finds specific items (like looking up a word in a dictionary)
- **Traversing** visits all items systematically

## Why Learn DSA?

1. **Write Better Code** - Solve problems efficiently
2. **Ace Interviews** - Tech companies love DSA questions
3. **Think Like a Programmer** - Develop problem-solving skills
4. **Build Anything** - From games to AI, DSA powers it all

## The Learning Path

### 📦 Data Structures
- **Arrays** - The foundation of everything
- **Linked Lists** - Dynamic chains of data
- **Stacks & Queues** - Specialized linear structures
- **Trees** - Hierarchical organization
- **Graphs** - Complex relationships
- **Hash Tables** - Lightning-fast lookups

### 🔧 Algorithms
- **Sorting** - Bubble Sort, Quick Sort, Merge Sort
- **Searching** - Binary Search, Linear Search
- **Recursion** - Functions calling themselves
- **Divide and Conquer** - Break problems into smaller pieces
- **Dynamic Programming** - Remember solutions to avoid recalculation
- **Greedy Algorithms** - Make the best choice at each step

## How to Use This Platform

1. **Start with Beginner** - Build your foundation
2. **Practice with Code** - Use the interactive playground
3. **Level Up** - Move to Intermediate when ready
4. **Master Expert** - Learn advanced optimizations
5. **Ask AI** - Get help anytime from our AI tutor

Ready to begin? Pick any topic from the list and start your journey! 🎯
        `,
        analogy: "Learning DSA is like learning to cook - you start with basic techniques (data structures) and recipes (algorithms), then combine them to create amazing dishes (programs)!",
        codeSnippets: [
          {
            language: 'python',
            code: `# Welcome to DSA! Let's see a simple example
# This shows how choosing the right data structure matters

# Bad approach: Using a list to check if item exists
def find_in_list(items, target):
    return target in items  # O(n) - slow for large lists

# Better approach: Using a set (hash table)
def find_in_set(items, target):
    return target in items  # O(1) - instant!

# Example
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

# Both find the number, but set is much faster!
print(find_in_list(my_list, 7))  # True
print(find_in_set(my_set, 7))    # True (but faster!)`,
            explanation: 'This shows why choosing the right data structure matters for performance.',
          },
          {
            language: 'javascript',
            code: `// Welcome to DSA! Let's see a simple example
// This shows how choosing the right data structure matters

// Bad approach: Using an array to check if item exists
function findInArray(items, target) {
    return items.includes(target);  // O(n) - slow for large arrays
}

// Better approach: Using a Set (hash table)
function findInSet(items, target) {
    return items.has(target);  // O(1) - instant!
}

// Example
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Both find the number, but Set is much faster!
console.log(findInArray(myArray, 7));  // true
console.log(findInSet(mySet, 7));      // true (but faster!)`,
            explanation: 'JavaScript Sets provide O(1) lookup time compared to O(n) for arrays.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;

// Bad approach: Using a vector to check if item exists
bool findInVector(const vector<int>& items, int target) {
    return find(items.begin(), items.end(), target) != items.end();
    // O(n) - slow for large vectors
}

// Better approach: Using an unordered_set (hash table)
bool findInSet(const unordered_set<int>& items, int target) {
    return items.find(target) != items.end();  // O(1) - instant!
}

int main() {
    // Example
    vector<int> myVector = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    unordered_set<int> mySet = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    // Both find the number, but set is much faster!
    cout << findInVector(myVector, 7) << endl;  // 1 (true)
    cout << findInSet(mySet, 7) << endl;        // 1 (true, but faster!)
    
    return 0;
}`,
            explanation: 'C++ unordered_set provides O(1) average lookup time using hash tables.',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class DSAIntro {
    // Bad approach: Using ArrayList to check if item exists
    public static boolean findInList(List<Integer> items, int target) {
        return items.contains(target);  // O(n) - slow for large lists
    }
    
    // Better approach: Using HashSet (hash table)
    public static boolean findInSet(Set<Integer> items, int target) {
        return items.contains(target);  // O(1) - instant!
    }
    
    public static void main(String[] args) {
        // Example
        List<Integer> myList = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Set<Integer> mySet = new HashSet<>(myList);
        
        // Both find the number, but HashSet is much faster!
        System.out.println(findInList(myList, 7));  // true
        System.out.println(findInSet(mySet, 7));    // true (but faster!)
    }
}`,
            explanation: 'Java HashSet provides O(1) average lookup time compared to O(n) for ArrayList.',
          },
        ],
      },
      intermediate: {
        markdownText: `
# DSA Fundamentals - Building Your Toolkit

## Understanding Complexity

The key to mastering DSA is understanding **time and space complexity** - how fast your code runs and how much memory it uses.

### Big O Notation
- **O(1)** - Constant: Same time regardless of input size
- **O(log n)** - Logarithmic: Doubles input, adds one step
- **O(n)** - Linear: Time grows with input size
- **O(n log n)** - Linearithmic: Efficient sorting
- **O(n²)** - Quadratic: Nested loops
- **O(2ⁿ)** - Exponential: Avoid when possible!

## Data Structure Categories

### Linear Structures
Data arranged in sequence:
- **Arrays**: Fixed size, fast access by index
- **Linked Lists**: Dynamic size, fast insertion/deletion
- **Stacks**: LIFO (Last In, First Out)
- **Queues**: FIFO (First In, First Out)

### Non-Linear Structures
Data arranged hierarchically or in networks:
- **Trees**: Hierarchical with parent-child relationships
- **Graphs**: Nodes connected by edges (social networks, maps)
- **Heaps**: Special trees for priority queues

### Hash-Based Structures
Fast lookups using hash functions:
- **Hash Tables**: Key-value pairs with O(1) average access
- **Hash Sets**: Unique elements with O(1) membership testing

## Algorithm Paradigms

### Divide and Conquer
Break problem into smaller subproblems:
- Merge Sort, Quick Sort
- Binary Search
- Efficient and elegant

### Dynamic Programming
Store solutions to avoid recalculation:
- Fibonacci sequence
- Longest common subsequence
- Knapsack problem

### Greedy Algorithms
Make locally optimal choices:
- Dijkstra's shortest path
- Huffman coding
- Activity selection

### Backtracking
Try all possibilities, backtrack on failure:
- N-Queens problem
- Sudoku solver
- Maze solving

## Choosing the Right Tool

| Need | Use |
|------|-----|
| Fast random access | Array |
| Frequent insertions/deletions | Linked List |
| LIFO operations | Stack |
| FIFO operations | Queue |
| Fast lookups | Hash Table |
| Hierarchical data | Tree |
| Relationships/networks | Graph |
| Priority-based processing | Heap |

## Practice Strategy

1. **Understand the problem** - Read carefully
2. **Choose data structure** - What fits best?
3. **Design algorithm** - Plan before coding
4. **Analyze complexity** - Is it efficient?
5. **Code and test** - Implement and verify
6. **Optimize** - Can you do better?
        `,
        timeComplexityAnalysis: 'Understanding Big O notation is crucial for evaluating algorithm efficiency and making informed decisions about which approach to use.',
        codeSnippets: [
          {
            language: 'python',
            code: `# Comparing different approaches to the same problem
# Problem: Find if array has duplicate elements

# Approach 1: Brute Force - O(n²)
def has_duplicates_v1(arr):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] == arr[j]:
                return True
    return False

# Approach 2: Sorting - O(n log n)
def has_duplicates_v2(arr):
    sorted_arr = sorted(arr)
    for i in range(len(sorted_arr) - 1):
        if sorted_arr[i] == sorted_arr[i + 1]:
            return True
    return False

# Approach 3: Hash Set - O(n) - BEST!
def has_duplicates_v3(arr):
    seen = set()
    for num in arr:
        if num in seen:
            return True
        seen.add(num)
    return False

# Test
test_array = [1, 2, 3, 4, 5, 2]
print(has_duplicates_v3(test_array))  # True`,
            explanation: 'Three approaches with different time complexities - hash set is optimal.',
          },
          {
            language: 'javascript',
            code: `// Comparing different approaches to the same problem
// Problem: Find if array has duplicate elements

// Approach 1: Brute Force - O(n²)
function hasDuplicatesV1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}

// Approach 2: Sorting - O(n log n)
function hasDuplicatesV2(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            return true;
        }
    }
    return false;
}

// Approach 3: Hash Set - O(n) - BEST!
function hasDuplicatesV3(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

// Test
const testArray = [1, 2, 3, 4, 5, 2];
console.log(hasDuplicatesV3(testArray));  // true`,
            explanation: 'JavaScript Set provides O(n) solution compared to O(n²) brute force.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;

// Approach 1: Brute Force - O(n²)
bool hasDuplicatesV1(const vector<int>& arr) {
    for (size_t i = 0; i < arr.size(); i++) {
        for (size_t j = i + 1; j < arr.size(); j++) {
            if (arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;
}

// Approach 2: Sorting - O(n log n)
bool hasDuplicatesV2(vector<int> arr) {
    sort(arr.begin(), arr.end());
    for (size_t i = 0; i < arr.size() - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            return true;
        }
    }
    return false;
}

// Approach 3: Hash Set - O(n) - BEST!
bool hasDuplicatesV3(const vector<int>& arr) {
    unordered_set<int> seen;
    for (int num : arr) {
        if (seen.find(num) != seen.end()) {
            return true;
        }
        seen.insert(num);
    }
    return false;
}

int main() {
    vector<int> testArray = {1, 2, 3, 4, 5, 2};
    cout << hasDuplicatesV3(testArray) << endl;  // 1 (true)
    return 0;
}`,
            explanation: 'C++ unordered_set provides optimal O(n) time complexity.',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class DuplicateFinder {
    // Approach 1: Brute Force - O(n²)
    public static boolean hasDuplicatesV1(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    
    // Approach 2: Sorting - O(n log n)
    public static boolean hasDuplicatesV2(int[] arr) {
        int[] sorted = arr.clone();
        Arrays.sort(sorted);
        for (int i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] == sorted[i + 1]) {
                return true;
            }
        }
        return false;
    }
    
    // Approach 3: Hash Set - O(n) - BEST!
    public static boolean hasDuplicatesV3(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        for (int num : arr) {
            if (seen.contains(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
    
    public static void main(String[] args) {
        int[] testArray = {1, 2, 3, 4, 5, 2};
        System.out.println(hasDuplicatesV3(testArray));  // true
    }
}`,
            explanation: 'Java HashSet provides O(n) solution with clean syntax.',
          },
        ],
      },
      expert: {
        markdownText: `
# Advanced DSA Concepts - Mastery Level

## Amortized Analysis

Understanding average performance over sequences of operations:
- **Dynamic Arrays**: O(1) amortized append despite occasional O(n) resize
- **Splay Trees**: O(log n) amortized despite O(n) worst case
- **Union-Find**: Nearly O(1) with path compression

## Advanced Data Structures

### Segment Trees
- Range queries in O(log n)
- Range updates in O(log n)
- Applications: Range sum, min/max queries

### Fenwick Trees (Binary Indexed Trees)
- Space-efficient alternative to segment trees
- Prefix sum queries in O(log n)
- Point updates in O(log n)

### Trie (Prefix Tree)
- String operations in O(m) where m = string length
- Autocomplete, spell checking
- IP routing tables

### Disjoint Set Union (Union-Find)
- Near constant time operations with path compression
- Kruskal's MST algorithm
- Network connectivity

### AVL and Red-Black Trees
- Self-balancing BSTs
- Guaranteed O(log n) operations
- Used in language standard libraries

## Algorithm Optimization Techniques

### Space-Time Tradeoffs
- Memoization: Trade space for time
- Lazy evaluation: Trade time for space
- Caching strategies

### Bit Manipulation
- Fast operations using bitwise operators
- Space-efficient storage
- Subset generation, masking

### Two Pointers & Sliding Window
- Linear time solutions to array problems
- Avoid nested loops
- Common in string/array problems

### Monotonic Stack/Queue
- Maintain elements in sorted order
- Next greater element problems
- Sliding window maximum

## System Design Implications

### Database Indexing
- B-trees and B+ trees for disk-based storage
- Hash indexes for equality searches
- Composite indexes for multiple columns

### Caching Strategies
- LRU Cache: Doubly linked list + hash map
- LFU Cache: Min heap + hash map
- Write-through vs write-back

### Distributed Systems
- Consistent hashing for load balancing
- Bloom filters for membership testing
- Skip lists for concurrent access

## Interview Patterns

### Common Problem Types
1. **Array/String**: Two pointers, sliding window
2. **Trees**: DFS, BFS, recursion
3. **Graphs**: Shortest path, connectivity
4. **DP**: Memoization, tabulation
5. **Backtracking**: Constraint satisfaction

### Problem-Solving Framework
1. Clarify requirements and constraints
2. Discuss brute force approach
3. Identify optimization opportunities
4. Implement optimal solution
5. Test with edge cases
6. Analyze complexity

## Advanced Complexity Analysis

### Master Theorem
For recurrence relations: T(n) = aT(n/b) + f(n)
- Determines complexity of divide-and-conquer algorithms
- Quick Sort, Merge Sort analysis

### Space Complexity Optimization
- In-place algorithms
- Tail recursion optimization
- Iterative vs recursive tradeoffs

## Competitive Programming Tips

- **Practice platforms**: LeetCode, Codeforces, AtCoder
- **Template code**: Pre-written utilities
- **Time management**: Easy → Medium → Hard
- **Edge cases**: Empty input, single element, duplicates
- **Stress testing**: Random test generation
        `,
        memoryOptimization: 'Advanced techniques like bit manipulation, in-place algorithms, and space-efficient data structures can dramatically reduce memory usage.',
        systemDesignImplications: 'DSA principles scale to distributed systems: consistent hashing, distributed hash tables, and graph algorithms for network routing.',
        edgeCases: ['Empty input', 'Single element', 'All duplicates', 'Sorted/reverse sorted', 'Maximum constraints'],
        codeSnippets: [
          {
            language: 'python',
            code: `# Advanced: Segment Tree for range queries
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(arr, 1, 0, self.n - 1)
    
    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            self.build(arr, 2 * node, start, mid)
            self.build(arr, 2 * node + 1, mid + 1, end)
            self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]
    
    def query(self, node, start, end, l, r):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        
        mid = (start + end) // 2
        p1 = self.query(2 * node, start, mid, l, r)
        p2 = self.query(2 * node + 1, mid + 1, end, l, r)
        return p1 + p2
    
    def range_sum(self, l, r):
        return self.query(1, 0, self.n - 1, l, r)

# Usage: O(log n) range sum queries
arr = [1, 3, 5, 7, 9, 11]
st = SegmentTree(arr)
print(st.range_sum(1, 3))  # Sum of elements from index 1 to 3`,
            explanation: 'Segment Tree enables O(log n) range queries - essential for competitive programming.',
          },
          {
            language: 'javascript',
            code: `// Advanced: Segment Tree for range queries
class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n).fill(0);
        this.build(arr, 1, 0, this.n - 1);
    }
    
    build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
        } else {
            const mid = Math.floor((start + end) / 2);
            this.build(arr, 2 * node, start, mid);
            this.build(arr, 2 * node + 1, mid + 1, end);
            this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
        }
    }
    
    query(node, start, end, l, r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return this.tree[node];
        
        const mid = Math.floor((start + end) / 2);
        const p1 = this.query(2 * node, start, mid, l, r);
        const p2 = this.query(2 * node + 1, mid + 1, end, l, r);
        return p1 + p2;
    }
    
    rangeSum(l, r) {
        return this.query(1, 0, this.n - 1, l, r);
    }
}

// Usage: O(log n) range sum queries
const arr = [1, 3, 5, 7, 9, 11];
const st = new SegmentTree(arr);
console.log(st.rangeSum(1, 3));  // Sum of elements from index 1 to 3`,
            explanation: 'JavaScript implementation of Segment Tree for efficient range operations.',
          },
          {
            language: 'cpp',
            code: `// Advanced: Segment Tree for range queries
class SegmentTree {
    vector<int> tree;
    int n;
    
    void build(vector<int>& arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2*node, start, mid);
            build(arr, 2*node+1, mid+1, end);
            tree[node] = tree[2*node] + tree[2*node+1];
        }
    }
    
    int query(int node, int start, int end, int l, int r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return tree[node];
        
        int mid = (start + end) / 2;
        int p1 = query(2*node, start, mid, l, r);
        int p2 = query(2*node+1, mid+1, end, l, r);
        return p1 + p2;
    }
    
public:
    SegmentTree(vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n);
        build(arr, 1, 0, n-1);
    }
    
    int rangeSum(int l, int r) {
        return query(1, 0, n-1, l, r);
    }
};

// Usage: O(log n) range sum queries
vector<int> arr = {1, 3, 5, 7, 9, 11};
SegmentTree st(arr);
cout << st.rangeSum(1, 3); // Sum of elements from index 1 to 3`,
            explanation: 'C++ Segment Tree with optimal performance for competitive programming.',
          },
          {
            language: 'java',
            code: `// Advanced: Segment Tree for range queries
class SegmentTree {
    private int[] tree;
    private int n;
    
    public SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 1, 0, n - 1);
    }
    
    private void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node, start, mid);
            build(arr, 2 * node + 1, mid + 1, end);
            tree[node] = tree[2 * node] + tree[2 * node + 1];
        }
    }
    
    private int query(int node, int start, int end, int l, int r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return tree[node];
        
        int mid = (start + end) / 2;
        int p1 = query(2 * node, start, mid, l, r);
        int p2 = query(2 * node + 1, mid + 1, end, l, r);
        return p1 + p2;
    }
    
    public int rangeSum(int l, int r) {
        return query(1, 0, n - 1, l, r);
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        SegmentTree st = new SegmentTree(arr);
        System.out.println(st.rangeSum(1, 3)); // Sum from index 1 to 3
    }
}`,
            explanation: 'Java Segment Tree implementation for advanced data structure problems.',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { 
        type: 'overview', 
        params: { 
          showComplexityChart: true,
          showDataStructureComparison: true 
        } 
      },
      playgroundInitialCode: {
        python: `# Explore DSA concepts with this playground!
# Try different data structures and see the difference

# Example: Compare list vs set performance
import time

# Create large dataset
data = list(range(100000))

# List search - O(n)
start = time.time()
result = 99999 in data
list_time = time.time() - start

# Set search - O(1)
data_set = set(data)
start = time.time()
result = 99999 in data_set
set_time = time.time() - start

print(f"List search: {list_time:.6f}s")
print(f"Set search: {set_time:.6f}s")
print(f"Set is {list_time/set_time:.0f}x faster!")`,
        javascript: `// Explore DSA concepts with this playground!
// Try different approaches and compare performance

// Example: Fibonacci with and without memoization
function fibSlow(n) {
    if (n <= 1) return n;
    return fibSlow(n-1) + fibSlow(n-2);
}

function fibFast(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibFast(n-1, memo) + fibFast(n-2, memo);
    return memo[n];
}

console.time('Slow');
console.log(fibSlow(35));
console.timeEnd('Slow');

console.time('Fast');
console.log(fibFast(35));
console.timeEnd('Fast');`,
        cpp: `#include <iostream>
#include <vector>
#include <chrono>
using namespace std;
using namespace chrono;

// Compare vector vs unordered_set performance
int main() {
    vector<int> vec;
    for (int i = 0; i < 100000; i++) {
        vec.push_back(i);
    }
    
    // Vector search - O(n)
    auto start = high_resolution_clock::now();
    bool found = false;
    for (int x : vec) {
        if (x == 99999) {
            found = true;
            break;
        }
    }
    auto end = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(end - start);
    
    cout << "Vector search: " << duration.count() << " microseconds" << endl;
    
    return 0;
}`,
        java: `import java.util.*;

public class DSAIntro {
    public static void main(String[] args) {
        // Compare ArrayList vs HashSet performance
        List<Integer> list = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        
        for (int i = 0; i < 100000; i++) {
            list.add(i);
            set.add(i);
        }
        
        // List search - O(n)
        long start = System.nanoTime();
        boolean found = list.contains(99999);
        long listTime = System.nanoTime() - start;
        
        // Set search - O(1)
        start = System.nanoTime();
        found = set.contains(99999);
        long setTime = System.nanoTime() - start;
        
        System.out.println("List: " + listTime + "ns");
        System.out.println("Set: " + setTime + "ns");
        System.out.println("Set is " + (listTime/setTime) + "x faster!");
    }
}`,
      },
    },
  },
  {
    _id: '1',
    meta: {
      title: 'Arrays',
      slug: 'arrays',
      category: 'DSA',
      tags: ['data-structures', 'arrays', 'fundamentals', 'linear'],
      estimatedTime: 35,
    },
    content: {
      beginner: {
        markdownText: `
# Arrays - The Foundation of Data Structures! 📦

An array is like a row of numbered boxes where you can store items. It's the most fundamental and popular data structure in programming!

## What is an Array?

An array is a collection of items of the same type stored in **contiguous memory locations**. Think of it as a numbered list where each position has an index starting from 0.

\`\`\`
Index:  0    1    2    3    4
Array: [10] [20] [30] [40] [50]
\`\`\`

## Key Features

### 1. Contiguous Memory
All elements are stored next to each other in memory, making access super fast!

### 2. Same Data Type
All elements must be the same type (all numbers, all strings, etc.)

### 3. Fixed or Dynamic Size
- **Fixed-size**: Size decided when created (like C arrays)
- **Dynamic-size**: Can grow/shrink (like Python lists, Java ArrayList)

### 4. Index-Based Access
Access any element instantly using its index: \`array[3]\` gives you the 4th element!

## Basic Terminology

- **Array Element**: An individual item in the array
- **Array Index**: The position number (starts at 0)
- **Array Length**: Total number of elements

## Why Use Arrays?

✅ **Fast Access**: Get any element in O(1) time  
✅ **Simple**: Easy to understand and use  
✅ **Memory Efficient**: Elements stored together  
✅ **Cache Friendly**: Better performance due to locality  

## Real-World Examples

- 📝 Student grades in a class
- 🎮 Game scores leaderboard
- 📊 Temperature readings over time
- 🎵 Playlist of songs
        `,
        analogy: "An array is like a row of mailboxes in an apartment building - each mailbox has a number (index) and can hold one item. You can instantly go to mailbox #5 without checking mailboxes 1-4!",
        codeSnippets: [
          {
            language: 'python',
            code: `# Creating and using arrays in Python
# Python lists are dynamic arrays

# Create an array
numbers = [10, 20, 30, 40, 50]

# Access elements by index (starts at 0)
print(numbers[0])    # 10 (first element)
print(numbers[2])    # 30 (third element)
print(numbers[-1])   # 50 (last element)

# Get array length
print(len(numbers))  # 5

# Modify an element
numbers[1] = 25
print(numbers)       # [10, 25, 30, 40, 50]

# Add element at end
numbers.append(60)
print(numbers)       # [10, 25, 30, 40, 50, 60]

# Traverse (visit each element)
for num in numbers:
    print(num, end=' ')  # 10 25 30 40 50 60`,
            explanation: 'Basic array operations: create, access, modify, and traverse',
          },
          {
            language: 'javascript',
            code: `// Creating and using arrays in JavaScript
// JavaScript arrays are dynamic

// Create an array
const numbers = [10, 20, 30, 40, 50];

// Access elements by index (starts at 0)
console.log(numbers[0]);    // 10 (first element)
console.log(numbers[2]);    // 30 (third element)
console.log(numbers[numbers.length - 1]);  // 50 (last element)

// Get array length
console.log(numbers.length);  // 5

// Modify an element
numbers[1] = 25;
console.log(numbers);  // [10, 25, 30, 40, 50]

// Add element at end
numbers.push(60);
console.log(numbers);  // [10, 25, 30, 40, 50, 60]

// Traverse (visit each element)
numbers.forEach(num => console.log(num));  // 10 25 30 40 50 60`,
            explanation: 'JavaScript arrays with push, forEach, and bracket notation',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Creating and using arrays in C++
    // vector is a dynamic array
    
    // Create an array
    vector<int> numbers = {10, 20, 30, 40, 50};
    
    // Access elements by index (starts at 0)
    cout << numbers[0] << endl;    // 10 (first element)
    cout << numbers[2] << endl;    // 30 (third element)
    cout << numbers.back() << endl;  // 50 (last element)
    
    // Get array size
    cout << numbers.size() << endl;  // 5
    
    // Modify an element
    numbers[1] = 25;
    
    // Add element at end
    numbers.push_back(60);
    
    // Traverse (visit each element)
    for (int num : numbers) {
        cout << num << " ";  // 10 25 30 40 50 60
    }
    
    return 0;
}`,
            explanation: 'C++ vectors provide dynamic array functionality with STL',
          },
          {
            language: 'java',
            code: `import java.util.ArrayList;

public class ArrayExample {
    public static void main(String[] args) {
        // Creating and using arrays in Java
        // ArrayList is a dynamic array
        
        // Create an array
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);
        
        // Access elements by index (starts at 0)
        System.out.println(numbers.get(0));  // 10 (first element)
        System.out.println(numbers.get(2));  // 30 (third element)
        System.out.println(numbers.get(numbers.size() - 1));  // 50 (last)
        
        // Get array size
        System.out.println(numbers.size());  // 5
        
        // Modify an element
        numbers.set(1, 25);
        
        // Add element at end
        numbers.add(60);
        
        // Traverse (visit each element)
        for (int num : numbers) {
            System.out.print(num + " ");  // 10 25 30 40 50 60
        }
    }
}`,
            explanation: 'Java ArrayList provides dynamic array with type safety',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Arrays - Operations and Complexity

## Time Complexity Analysis

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| **Access** | O(1) | Direct index access |
| **Search** | O(n) | Linear search through elements |
| **Insert at End** | O(1)* | Amortized for dynamic arrays |
| **Insert at Beginning** | O(n) | Shift all elements right |
| **Insert at Position** | O(n) | Shift elements from position |
| **Delete from End** | O(1) | Simply reduce size |
| **Delete from Beginning** | O(n) | Shift all elements left |
| **Delete from Position** | O(n) | Shift elements after position |

*Amortized O(1) means occasional O(n) when resizing, but O(1) on average.

## Core Operations

### 1. Traversal
Visit each element to perform operations:

\`\`\`python
# Print all elements
for i in range(len(arr)):
    print(arr[i])
\`\`\`

### 2. Insertion

**At Beginning**: Shift all elements right, then insert
- Time: O(n)
- Space: O(1)

**At Given Position**: Shift elements from position to end
- Time: O(n)
- Space: O(1)

**At End**: Place at last index
- Time: O(1) amortized
- Space: O(1)

### 3. Deletion

**From Beginning**: Shift all elements left
- Time: O(n)

**From Position**: Shift elements after position left
- Time: O(n)

**From End**: Reduce size
- Time: O(1)

### 4. Searching

**Linear Search**: Check each element sequentially
- Time: O(n)
- Works on unsorted arrays

**Binary Search**: Divide and conquer (sorted arrays only)
- Time: O(log n)
- Requires sorted array

## Advantages vs Disadvantages

### ✅ Advantages
- **Fast random access**: O(1) to access any element
- **Cache friendly**: Contiguous memory improves performance
- **Simple implementation**: Easy to understand and use
- **Memory efficient**: No extra pointers needed

### ❌ Disadvantages
- **Fixed size**: Static arrays can't grow (dynamic arrays can)
- **Expensive insertion/deletion**: O(n) for most positions
- **Wasted space**: May allocate more than needed
- **Homogeneous**: All elements must be same type

## Dynamic Arrays

Languages like Python, Java, and JavaScript use dynamic arrays that automatically resize:

1. Start with initial capacity
2. When full, allocate larger array (usually 2x)
3. Copy all elements to new array
4. Continue adding elements

This gives **amortized O(1)** insertion at end!
        `,
        timeComplexityAnalysis: 'Array access is O(1) due to direct indexing: address = base + (index × element_size). Insertions and deletions are O(n) because elements must be shifted to maintain contiguous storage.',
        codeSnippets: [
          {
            language: 'python',
            code: `# Array Operations - Intermediate Level

def insert_at_position(arr, element, position):
    """Insert element at specific position"""
    arr.insert(position, element)
    return arr

def delete_at_position(arr, position):
    """Delete element at specific position"""
    if 0 <= position < len(arr):
        arr.pop(position)
    return arr

def linear_search(arr, target):
    """Search for element - O(n)"""
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

def binary_search(arr, target):
    """Search in sorted array - O(log n)"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Example usage
arr = [10, 20, 30, 40, 50]

# Insert at position 2
insert_at_position(arr, 25, 2)
print(arr)  # [10, 20, 25, 30, 40, 50]

# Search for element
index = linear_search(arr, 30)
print(f"Found at index: {index}")  # 3

# Binary search (array must be sorted)
sorted_arr = [10, 20, 30, 40, 50, 60, 70]
index = binary_search(sorted_arr, 50)
print(f"Found at index: {index}")  # 4`,
            explanation: 'Python implementation with insert, delete, and search operations',
          },
          {
            language: 'javascript',
            code: `// Array Operations - Intermediate Level

function insertAtPosition(arr, element, position) {
    arr.splice(position, 0, element);
    return arr;
}

function deleteAtPosition(arr, position) {
    if (position >= 0 && position < arr.length) {
        arr.splice(position, 1);
    }
    return arr;
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Example usage
const arr = [10, 20, 30, 40, 50];

insertAtPosition(arr, 25, 2);
console.log(arr);  // [10, 20, 25, 30, 40, 50]

const index = linearSearch(arr, 30);
console.log(\`Found at index: \${index}\`);  // 3

const sortedArr = [10, 20, 30, 40, 50, 60, 70];
const idx = binarySearch(sortedArr, 50);
console.log(\`Found at index: \${idx}\`);  // 4`,
            explanation: 'JavaScript with splice for insert/delete and binary search',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Insert at position
void insertAtPosition(vector<int>& arr, int element, int position) {
    arr.insert(arr.begin() + position, element);
}

// Delete at position
void deleteAtPosition(vector<int>& arr, int position) {
    if (position >= 0 && position < arr.size()) {
        arr.erase(arr.begin() + position);
    }
}

// Linear search - O(n)
int linearSearch(const vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

// Binary search - O(log n)
int binarySearch(const vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

int main() {
    vector<int> arr = {10, 20, 30, 40, 50};
    
    insertAtPosition(arr, 25, 2);
    // arr is now [10, 20, 25, 30, 40, 50]
    
    int index = linearSearch(arr, 30);
    cout << "Found at index: " << index << endl;  // 3
    
    vector<int> sortedArr = {10, 20, 30, 40, 50, 60, 70};
    int idx = binarySearch(sortedArr, 50);
    cout << "Found at index: " << idx << endl;  // 4
    
    return 0;
}`,
            explanation: 'C++ STL vector with insert, erase, and search algorithms',
          },
          {
            language: 'java',
            code: `import java.util.ArrayList;

public class ArrayOperations {
    // Insert at position
    public static void insertAtPosition(ArrayList<Integer> arr, int element, int position) {
        arr.add(position, element);
    }
    
    // Delete at position
    public static void deleteAtPosition(ArrayList<Integer> arr, int position) {
        if (position >= 0 && position < arr.size()) {
            arr.remove(position);
        }
    }
    
    // Linear search - O(n)
    public static int linearSearch(ArrayList<Integer> arr, int target) {
        for (int i = 0; i < arr.size(); i++) {
            if (arr.get(i) == target) {
                return i;
            }
        }
        return -1;
    }
    
    // Binary search - O(log n)
    public static int binarySearch(ArrayList<Integer> arr, int target) {
        int left = 0, right = arr.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr.get(mid) == target) {
                return mid;
            } else if (arr.get(mid) < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    
    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(10); arr.add(20); arr.add(30); arr.add(40); arr.add(50);
        
        insertAtPosition(arr, 25, 2);
        System.out.println(arr);  // [10, 20, 25, 30, 40, 50]
        
        int index = linearSearch(arr, 30);
        System.out.println("Found at index: " + index);  // 3
        
        ArrayList<Integer> sortedArr = new ArrayList<>();
        for (int i = 10; i <= 70; i += 10) sortedArr.add(i);
        int idx = binarySearch(sortedArr, 50);
        System.out.println("Found at index: " + idx);  // 4
    }
}`,
            explanation: 'Java ArrayList with add, remove, and search methods',
          },
        ],
      },
      expert: {
        markdownText: `
# Arrays - Advanced Concepts and Optimizations

## Memory Layout and Cache Performance

Arrays store elements in contiguous memory, leading to excellent **cache locality**:

\`\`\`
Memory Address: 1000  1004  1008  1012  1016
Array Elements:  [10]  [20]  [30]  [40]  [50]
\`\`\`

When you access \`arr[0]\`, the CPU loads nearby elements into cache, making subsequent accesses faster.

## Advanced Techniques

### 1. Two Pointer Technique
Solve problems in O(n) time with O(1) space:

- **Remove duplicates** from sorted array
- **Find pair with given sum**
- **Reverse array in-place**
- **Merge sorted arrays**

### 2. Sliding Window
Maintain a window of elements for subarray problems:

- **Maximum sum subarray of size k**
- **Longest substring with k distinct characters**
- **Minimum window substring**

### 3. Prefix Sum Array
Precompute cumulative sums for O(1) range queries:

\`\`\`
Original: [1, 2, 3, 4, 5]
Prefix:   [1, 3, 6, 10, 15]
Sum(2,4) = prefix[4] - prefix[1] = 15 - 3 = 12
\`\`\`

### 4. Kadane's Algorithm
Find maximum sum subarray in O(n):

\`\`\`python
max_sum = current_sum = arr[0]
for i in range(1, len(arr)):
    current_sum = max(arr[i], current_sum + arr[i])
    max_sum = max(max_sum, current_sum)
\`\`\`

## Space Optimization Techniques

### In-Place Algorithms
Modify array without extra space:
- Reverse array: Swap elements from both ends
- Rotate array: Use reversal algorithm
- Remove duplicates: Two-pointer approach

### Bit Manipulation
Use bits to store multiple boolean values:
- Sieve of Eratosthenes for primes
- Subset generation
- Finding missing/duplicate numbers

## System Design Implications

### Database Indexing
Arrays form the basis of:
- **B-trees**: Sorted arrays in nodes
- **Hash tables**: Array of buckets
- **Inverted indexes**: Arrays of document IDs

### Memory Management
- **Stack**: Array-based implementation
- **Heap**: Array representation of binary tree
- **Circular buffers**: Ring buffers for streaming data

### Performance Considerations

1. **Cache Lines**: Modern CPUs load 64-byte cache lines
   - Accessing array elements sequentially is fastest
   - Random access causes cache misses

2. **False Sharing**: Multiple threads accessing nearby array elements
   - Can cause performance degradation
   - Solution: Pad elements to different cache lines

3. **SIMD Operations**: Single Instruction Multiple Data
   - Process multiple array elements simultaneously
   - Used in image processing, scientific computing

## Advanced Problems

### Dutch National Flag (3-way partitioning)
Partition array into three sections in O(n):

\`\`\`python
def dutch_flag_partition(arr, pivot):
    low, mid, high = 0, 0, len(arr) - 1
    while mid <= high:
        if arr[mid] < pivot:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] > pivot:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1
        else:
            mid += 1
\`\`\`

### Moore's Voting Algorithm
Find majority element in O(n) time, O(1) space:

\`\`\`python
def find_majority(arr):
    candidate, count = None, 0
    for num in arr:
        if count == 0:
            candidate = num
        count += (1 if num == candidate else -1)
    return candidate
\`\`\`

## Interview Patterns

1. **Subarray Problems**: Sliding window, Kadane's algorithm
2. **Two Pointers**: Sorted array problems, in-place modifications
3. **Sorting-based**: Sort first, then solve
4. **Hash Map**: Trade space for time
5. **Binary Search**: On sorted arrays or answer space

## Edge Cases to Consider

- Empty array: \`[]\`
- Single element: \`[x]\`
- All elements same: \`[5, 5, 5, 5]\`
- Sorted/reverse sorted: \`[1,2,3]\` or \`[3,2,1]\`
- Negative numbers: \`[-5, -2, 0, 3]\`
- Integer overflow: Large sums
- Duplicates: Multiple same values
        `,
        memoryOptimization: 'Use in-place algorithms to achieve O(1) space. For large datasets, consider memory-mapped files or streaming algorithms that process data in chunks.',
        systemDesignImplications: 'Arrays are fundamental to system design: database indexes use B-trees (arrays in nodes), hash tables use arrays of buckets, and circular buffers enable efficient producer-consumer patterns in streaming systems.',
        edgeCases: ['Empty array', 'Single element', 'All duplicates', 'Sorted/reverse sorted', 'Negative numbers', 'Integer overflow'],
        codeSnippets: [
          {
            language: 'python',
            code: `# Advanced Array Techniques in Python

# Two Pointer: Remove duplicates from sorted array
def remove_duplicates(arr):
    if not arr:
        return 0
    
    write_index = 1
    for i in range(1, len(arr)):
        if arr[i] != arr[i-1]:
            arr[write_index] = arr[i]
            write_index += 1
    return write_index

# Sliding Window: Maximum sum subarray of size k
def max_sum_subarray(arr, k):
    if len(arr) < k:
        return -1
    
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i-k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

# Kadane's Algorithm: Maximum sum subarray
def max_subarray_sum(arr):
    max_sum = current_sum = arr[0]
    
    for i in range(1, len(arr)):
        current_sum = max(arr[i], current_sum + arr[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum

# Prefix Sum: Range sum queries
class PrefixSum:
    def __init__(self, arr):
        self.prefix = [0] * (len(arr) + 1)
        for i in range(len(arr)):
            self.prefix[i+1] = self.prefix[i] + arr[i]
    
    def range_sum(self, left, right):
        return self.prefix[right+1] - self.prefix[left]

# Test examples
arr1 = [1, 1, 2, 2, 3, 4, 4, 5]
print(f"Unique elements: {remove_duplicates(arr1)}")

arr2 = [1, 4, 2, 10, 23, 3, 1, 0, 20]
print(f"Max sum (k=4): {max_sum_subarray(arr2, 4)}")

arr3 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(f"Max subarray sum: {max_subarray_sum(arr3)}")

arr4 = [1, 2, 3, 4, 5]
ps = PrefixSum(arr4)
print(f"Sum [1,3]: {ps.range_sum(1, 3)}")`,
            explanation: 'Python implementations of advanced array techniques with clean syntax',
          },
          {
            language: 'javascript',
            code: `// Advanced Array Techniques in JavaScript

// Two Pointer: Remove duplicates from sorted array
function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    
    let writeIndex = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arr[writeIndex++] = arr[i];
        }
    }
    return writeIndex;
}

// Sliding Window: Maximum sum subarray of size k
function maxSumSubarray(arr, k) {
    if (arr.length < k) return -1;
    
    let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
    let maxSum = windowSum;
    
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i-k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Kadane's Algorithm: Maximum sum subarray
function maxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Prefix Sum: Range sum queries
class PrefixSum {
    constructor(arr) {
        this.prefix = new Array(arr.length + 1).fill(0);
        for (let i = 0; i < arr.length; i++) {
            this.prefix[i+1] = this.prefix[i] + arr[i];
        }
    }
    
    rangeSum(left, right) {
        return this.prefix[right+1] - this.prefix[left];
    }
}

// Test examples
const arr1 = [1, 1, 2, 2, 3, 4, 4, 5];
console.log(\`Unique elements: \${removeDuplicates(arr1)}\`);

const arr2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
console.log(\`Max sum (k=4): \${maxSumSubarray(arr2, 4)}\`);

const arr3 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(\`Max subarray sum: \${maxSubarraySum(arr3)}\`);

const arr4 = [1, 2, 3, 4, 5];
const ps = new PrefixSum(arr4);
console.log(\`Sum [1,3]: \${ps.rangeSum(1, 3)}\`);`,
            explanation: 'JavaScript with modern ES6+ features and array methods',
          },
          {
            language: 'cpp',
            code: `// Advanced Array Techniques in C++
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Two Pointer: Remove duplicates from sorted array
int removeDuplicates(vector<int>& arr) {
    if (arr.empty()) return 0;
    
    int writeIndex = 1;
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] != arr[i-1]) {
            arr[writeIndex++] = arr[i];
        }
    }
    return writeIndex;
}

// Sliding Window: Maximum sum subarray of size k
int maxSumSubarray(vector<int>& arr, int k) {
    int n = arr.size();
    if (n < k) return -1;
    
    int windowSum = 0;
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    int maxSum = windowSum;
    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i-k];
        maxSum = max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Kadane's Algorithm: Maximum sum subarray
int maxSubarraySum(vector<int>& arr) {
    int maxSum = arr[0];
    int currentSum = arr[0];
    
    for (int i = 1; i < arr.size(); i++) {
        currentSum = max(arr[i], currentSum + arr[i]);
        maxSum = max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Prefix Sum: Range sum queries
class PrefixSum {
    vector<int> prefix;
public:
    PrefixSum(vector<int>& arr) {
        prefix.resize(arr.size() + 1, 0);
        for (int i = 0; i < arr.size(); i++) {
            prefix[i+1] = prefix[i] + arr[i];
        }
    }
    
    int rangeSum(int left, int right) {
        return prefix[right+1] - prefix[left];
    }
};

int main() {
    // Test remove duplicates
    vector<int> arr1 = {1, 1, 2, 2, 3, 4, 4, 5};
    int newLength = removeDuplicates(arr1);
    cout << "Unique elements: " << newLength << endl;
    
    // Test sliding window
    vector<int> arr2 = {1, 4, 2, 10, 23, 3, 1, 0, 20};
    cout << "Max sum (k=4): " << maxSumSubarray(arr2, 4) << endl;
    
    // Test Kadane's algorithm
    vector<int> arr3 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << "Max subarray sum: " << maxSubarraySum(arr3) << endl;
    
    // Test prefix sum
    vector<int> arr4 = {1, 2, 3, 4, 5};
    PrefixSum ps(arr4);
    cout << "Sum [1,3]: " << ps.rangeSum(1, 3) << endl;
    
    return 0;
}`,
            explanation: 'C++ with STL algorithms and optimal performance',
          },
          {
            language: 'java',
            code: `// Advanced Array Techniques in Java
import java.util.*;

public class AdvancedArrays {
    // Two Pointer: Remove duplicates from sorted array
    public static int removeDuplicates(int[] arr) {
        if (arr.length == 0) return 0;
        
        int writeIndex = 1;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i-1]) {
                arr[writeIndex++] = arr[i];
            }
        }
        return writeIndex;
    }
    
    // Sliding Window: Maximum sum subarray of size k
    public static int maxSumSubarray(int[] arr, int k) {
        if (arr.length < k) return -1;
        
        int windowSum = 0;
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        
        int maxSum = windowSum;
        for (int i = k; i < arr.length; i++) {
            windowSum += arr[i] - arr[i-k];
            maxSum = Math.max(maxSum, windowSum);
        }
        
        return maxSum;
    }
    
    // Kadane's Algorithm: Maximum sum subarray
    public static int maxSubarraySum(int[] arr) {
        int maxSum = arr[0];
        int currentSum = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
    
    // Prefix Sum: Range sum queries
    static class PrefixSum {
        private int[] prefix;
        
        public PrefixSum(int[] arr) {
            prefix = new int[arr.length + 1];
            for (int i = 0; i < arr.length; i++) {
                prefix[i+1] = prefix[i] + arr[i];
            }
        }
        
        public int rangeSum(int left, int right) {
            return prefix[right+1] - prefix[left];
        }
    }
    
    public static void main(String[] args) {
        // Test remove duplicates
        int[] arr1 = {1, 1, 2, 2, 3, 4, 4, 5};
        System.out.println("Unique elements: " + removeDuplicates(arr1));
        
        // Test sliding window
        int[] arr2 = {1, 4, 2, 10, 23, 3, 1, 0, 20};
        System.out.println("Max sum (k=4): " + maxSumSubarray(arr2, 4));
        
        // Test Kadane's algorithm
        int[] arr3 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Max subarray sum: " + maxSubarraySum(arr3));
        
        // Test prefix sum
        int[] arr4 = {1, 2, 3, 4, 5};
        PrefixSum ps = new PrefixSum(arr4);
        System.out.println("Sum [1,3]: " + ps.rangeSum(1, 3));
    }
}`,
            explanation: 'Java with static methods and inner class for PrefixSum',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { 
        type: 'array', 
        params: { 
          operations: ['insert', 'delete', 'search', 'traverse'],
          visualizeMemory: true 
        } 
      },
      playgroundInitialCode: {
        python: `# Array Operations Playground

# Create an array
arr = [10, 20, 30, 40, 50]

# TODO: Try these operations:
# 1. Access element at index 2
# 2. Insert 25 at index 2
# 3. Delete element at index 3
# 4. Search for element 40
# 5. Traverse and print all elements

# Your code here:
`,
        javascript: `// Array Operations Playground

// Create an array
const arr = [10, 20, 30, 40, 50];

// TODO: Try these operations:
// 1. Access element at index 2
// 2. Insert 25 at index 2 using splice()
// 3. Delete element at index 3
// 4. Search for element 40 using indexOf()
// 5. Traverse using forEach()

// Your code here:
`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // Create an array (vector in C++)
    vector<int> arr = {10, 20, 30, 40, 50};
    
    // TODO: Try these operations:
    // 1. Access element at index 2: arr[2]
    // 2. Insert 25 at index 2: arr.insert(arr.begin()+2, 25)
    // 3. Delete element at index 3: arr.erase(arr.begin()+3)
    // 4. Search for 40: find(arr.begin(), arr.end(), 40)
    // 5. Traverse: for(int x : arr) cout << x << " ";
    
    // Your code here:
    
    return 0;
}`,
        java: `import java.util.*;

public class ArrayOperations {
    public static void main(String[] args) {
        // Create an array (ArrayList in Java)
        ArrayList<Integer> arr = new ArrayList<>(
            Arrays.asList(10, 20, 30, 40, 50)
        );
        
        // TODO: Try these operations:
        // 1. Access element at index 2: arr.get(2)
        // 2. Insert 25 at index 2: arr.add(2, 25)
        // 3. Delete element at index 3: arr.remove(3)
        // 4. Search for 40: arr.indexOf(40)
        // 5. Traverse: for(int x : arr) System.out.println(x)
        
        // Your code here:
        
    }
}`,
      },
    },
  },
  {
    _id: '2',
    meta: {
      title: 'Binary Search',
      slug: 'binary-search',
      category: 'DSA',
      tags: ['searching', 'divide-and-conquer', 'arrays'],
      estimatedTime: 30,
    },
    content: {
      beginner: {
        markdownText: `
# Binary Search - The Smart Way to Find Things

Imagine you're looking for a word in a dictionary. Do you start from page 1 and check every single page? No! You open it somewhere in the middle, see if your word comes before or after, and keep cutting the search space in half.

That's exactly what Binary Search does!

## How It Works
1. Look at the middle element
2. If it's your target, you're done! 🎉
3. If your target is smaller, search the left half
4. If your target is larger, search the right half
5. Repeat until found

## Why It's Fast
Instead of checking 1000 items one by one, you only need about 10 checks! That's the power of halving.
        `,
        analogy: "It's like playing the 'guess the number' game where someone says 'higher' or 'lower' after each guess. You always guess the middle to win fastest!",
        codeSnippets: [
          {
            language: 'python',
            code: `def binary_search(arr, target):
    """Binary search in sorted array - O(log n)"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid  # Found it!
        elif arr[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half
    
    return -1  # Not found

# Example
numbers = [1, 3, 5, 7, 9, 11, 13]
result = binary_search(numbers, 7)
print(f"Found at index: {result}")  # 3`,
            explanation: 'Python binary search - halves search space each iteration for O(log n) time',
          },
          {
            language: 'javascript',
            code: `function binarySearch(arr, target) {
    // Binary search in sorted array - O(log n)
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;  // Found it!
        } else if (arr[mid] < target) {
            left = mid + 1;  // Search right half
        } else {
            right = mid - 1;  // Search left half
        }
    }
    
    return -1;  // Not found
}

// Example
const numbers = [1, 3, 5, 7, 9, 11, 13];
const result = binarySearch(numbers, 7);
console.log(\`Found at index: \${result}\`);  // 3`,
            explanation: 'JavaScript binary search using Math.floor for integer division',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

// Binary search in sorted array - O(log n)
int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;  // Found it!
        } else if (arr[mid] < target) {
            left = mid + 1;  // Search right half
        } else {
            right = mid - 1;  // Search left half
        }
    }
    
    return -1;  // Not found
}

int main() {
    vector<int> numbers = {1, 3, 5, 7, 9, 11, 13};
    int result = binarySearch(numbers, 7);
    cout << "Found at index: " << result << endl;  // 3
    return 0;
}`,
            explanation: 'C++ binary search - use (left + right) / 2 carefully to avoid overflow',
          },
          {
            language: 'java',
            code: `public class BinarySearch {
    // Binary search in sorted array - O(log n)
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;  // Found it!
            } else if (arr[mid] < target) {
                left = mid + 1;  // Search right half
            } else {
                right = mid - 1;  // Search left half
            }
        }
        
        return -1;  // Not found
    }
    
    public static void main(String[] args) {
        int[] numbers = {1, 3, 5, 7, 9, 11, 13};
        int result = binarySearch(numbers, 7);
        System.out.println("Found at index: " + result);  // 3
    }
}`,
            explanation: 'Java binary search - classic iterative implementation with O(log n) time',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Binary Search - Efficient Searching Algorithm

Binary Search is a divide-and-conquer algorithm that finds the position of a target value within a **sorted array**.

## Time Complexity Analysis
- **Best Case:** O(1) - target is at the middle
- **Average Case:** O(log n)
- **Worst Case:** O(log n)
- **Space Complexity:** O(1) for iterative, O(log n) for recursive

## Key Requirements
1. Array must be **sorted**
2. Random access to elements (arrays, not linked lists)
        `,
        timeComplexityAnalysis: 'Each iteration eliminates half the remaining elements, leading to logarithmic time complexity.',
        codeSnippets: [
          {
            language: 'python',
            code: `def binary_search_recursive(arr, target, left, right):
    """Recursive binary search - O(log n) time, O(log n) space"""
    if left > right:
        return -1
    
    mid = left + (right - left) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

# Example
numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17]
result = binary_search_recursive(numbers, 11, 0, len(numbers) - 1)
print(f"Found at index: {result}")  # 5`,
            explanation: 'Python recursive binary search - elegant but uses O(log n) stack space',
          },
          {
            language: 'javascript',
            code: `function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Recursive binary search - O(log n) time, O(log n) space
    if (left > right) {
        return -1;
    }
    
    const mid = left + Math.floor((right - left) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Example
const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const result = binarySearchRecursive(numbers, 11);
console.log(\`Found at index: \${result}\`);  // 5`,
            explanation: 'JavaScript recursive binary search with default parameters for cleaner calls',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

// Recursive binary search - O(log n) time, O(log n) space
int binarySearchRecursive(vector<int>& arr, int target, int left, int right) {
    if (left > right) {
        return -1;
    }
    
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

int main() {
    vector<int> numbers = {1, 3, 5, 7, 9, 11, 13, 15, 17};
    int result = binarySearchRecursive(numbers, 11, 0, numbers.size() - 1);
    cout << "Found at index: " << result << endl;  // 5
    return 0;
}`,
            explanation: 'C++ recursive binary search - clean implementation with tail recursion',
          },
          {
            language: 'java',
            code: `public class BinarySearchRecursive {
    // Recursive binary search - O(log n) time, O(log n) space
    public static int binarySearchRecursive(int[] arr, int target, int left, int right) {
        if (left > right) {
            return -1;
        }
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, right);
        } else {
            return binarySearchRecursive(arr, target, left, mid - 1);
        }
    }
    
    public static void main(String[] args) {
        int[] numbers = {1, 3, 5, 7, 9, 11, 13, 15, 17};
        int result = binarySearchRecursive(numbers, 11, 0, numbers.length - 1);
        System.out.println("Found at index: " + result);  // 5
    }
}`,
            explanation: 'Java recursive binary search - uses call stack for O(log n) space complexity',
          },
        ],
      },
      expert: {
        markdownText: `
# Binary Search - Advanced Concepts

## Variants and Applications
1. **Lower Bound:** First position where element ≥ target
2. **Upper Bound:** First position where element > target
3. **Search in Rotated Array**
4. **Finding Peak Element**

## Memory Optimization
- Iterative approach uses O(1) space vs O(log n) for recursive
- Cache-friendly due to sequential memory access

## System Design Implications
- Database indexing (B-trees use binary search principles)
- Load balancing (finding optimal server)
- Version control (git bisect for bug finding)
        `,
        memoryOptimization: 'Use iterative approach to avoid call stack overhead.',
        edgeCases: ['Empty array', 'Integer overflow', 'Duplicates'],
        codeSnippets: [
          {
            language: 'python',
            code: `def search_rotated(nums, target):
    """
    Binary search in rotated sorted array
    Time: O(log n), Space: O(1)
    """
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if nums[mid] == target:
            return mid
        
        # Left half is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right half is sorted
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1

# Example: [4,5,6,7,0,1,2] rotated at index 4
nums = [4, 5, 6, 7, 0, 1, 2]
print(search_rotated(nums, 0))  # 4
print(search_rotated(nums, 3))  # -1`,
            explanation: 'Python binary search in rotated array - identify sorted half and search accordingly',
          },
          {
            language: 'javascript',
            code: `function searchRotated(nums, target) {
    /**
     * Binary search in rotated sorted array
     * Time: O(log n), Space: O(1)
     */
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}

// Example: [4,5,6,7,0,1,2] rotated at index 4
const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(searchRotated(nums, 0));  // 4
console.log(searchRotated(nums, 3));  // -1`,
            explanation: 'JavaScript binary search in rotated array - one half is always sorted',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

/**
 * Binary search in rotated sorted array
 * Time: O(log n), Space: O(1)
 */
int searchRotated(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) return mid;
        
        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

int main() {
    // Example: [4,5,6,7,0,1,2] rotated at index 4
    vector<int> nums = {4, 5, 6, 7, 0, 1, 2};
    cout << searchRotated(nums, 0) << endl;  // 4
    cout << searchRotated(nums, 3) << endl;  // -1
    return 0;
}`,
            explanation: 'C++ binary search in rotated array - determine which half is sorted first',
          },
          {
            language: 'java',
            code: `public class SearchRotatedArray {
    /**
     * Binary search in rotated sorted array
     * Time: O(log n), Space: O(1)
     */
    public static int searchRotated(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            }
            
            // Left half is sorted
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            // Right half is sorted
            else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        // Example: [4,5,6,7,0,1,2] rotated at index 4
        int[] nums = {4, 5, 6, 7, 0, 1, 2};
        System.out.println(searchRotated(nums, 0));  // 4
        System.out.println(searchRotated(nums, 3));  // -1
    }
}`,
            explanation: 'Java binary search in rotated array - classic interview problem with O(log n) solution',
          },
        ],
      },
    },
    interactive: {
      animationConfig: {
        type: 'array',
        params: { initialArray: [1, 3, 5, 7, 9, 11, 13], target: 7 },
      },
      playgroundInitialCode: {
        python: `def binary_search(arr, target):
    # Your code here
    pass

arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(arr, 7))`,
        javascript: `function binarySearch(arr, target) {
    // Your code here
}

const arr = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arr, 7));`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    // Your code here
    return -1;
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11, 13};
    cout << binarySearch(arr, 7) << endl;
    return 0;
}`,
        java: `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        // Your code here
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11, 13};
        System.out.println(binarySearch(arr, 7));
    }
}`,
      },
    },
  },
  {
    _id: '2',
    meta: {
      title: 'Bubble Sort',
      slug: 'bubble-sort',
      category: 'DSA',
      tags: ['sorting', 'arrays', 'comparison-sort'],
      estimatedTime: 25,
    },
    content: {
      beginner: {
        markdownText: `
# Bubble Sort - The Simplest Sorting Algorithm

Imagine you have a line of students arranged by height, but they're all mixed up. Bubble Sort is like repeatedly walking down the line and swapping any two students who are in the wrong order.

## How It Works
1. Compare adjacent elements
2. Swap them if they're in wrong order
3. Repeat until no more swaps needed
4. The largest element "bubbles up" to the end each time

## Why It's Called Bubble Sort
The largest values bubble up to the top (end) of the array, just like bubbles in water!
        `,
        analogy: "It's like sorting cards in your hand by repeatedly swapping adjacent cards that are out of order.",
        codeSnippets: [
          {
            language: 'python',
            code: `def bubble_sort(arr):
    """Bubble sort - O(n²) time, O(1) space"""
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

numbers = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(numbers))  # [11, 12, 22, 25, 34, 64, 90]`,
            explanation: 'Python bubble sort with tuple unpacking for swapping',
          },
          {
            language: 'javascript',
            code: `function bubbleSort(arr) {
    // Bubble sort - O(n²) time, O(1) space
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers));  // [11, 12, 22, 25, 34, 64, 90]`,
            explanation: 'JavaScript bubble sort using destructuring for clean swaps',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

// Bubble sort - O(n²) time, O(1) space
void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    vector<int> numbers = {64, 34, 25, 12, 22, 11, 90};
    bubbleSort(numbers);
    
    for (int num : numbers) {
        cout << num << " ";
    }
    // Output: 11 12 22 25 34 64 90
    return 0;
}`,
            explanation: 'C++ bubble sort using STL swap function for efficiency',
          },
          {
            language: 'java',
            code: `public class BubbleSort {
    // Bubble sort - O(n²) time, O(1) space
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
    public static void main(String[] args) {
        int[] numbers = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(numbers);
        
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        // Output: 11 12 22 25 34 64 90
    }
}`,
            explanation: 'Java bubble sort with traditional temp variable for swapping',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Bubble Sort - Analysis

## Time Complexity
- **Best Case:** O(n) - when array is already sorted
- **Average Case:** O(n²)
- **Worst Case:** O(n²)
- **Space Complexity:** O(1) - in-place sorting

## Optimization
Add a flag to detect if any swaps were made. If no swaps in a pass, array is sorted!
        `,
        timeComplexityAnalysis: 'Nested loops lead to quadratic time. Each pass moves the largest unsorted element to its position.',
        codeSnippets: [
          {
            language: 'python',
            code: `def optimized_bubble_sort(arr):
    """Optimized bubble sort with early termination"""
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break  # Array is sorted
    return arr

# Best case: already sorted - O(n)
sorted_arr = [1, 2, 3, 4, 5]
print(optimized_bubble_sort(sorted_arr))`,
            explanation: 'Python optimized bubble sort - stops early if no swaps occur',
          },
          {
            language: 'javascript',
            code: `function optimizedBubbleSort(arr) {
    // Optimized bubble sort with early termination
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        if (!swapped) {
            break;  // Array is sorted
        }
    }
    return arr;
}

// Best case: already sorted - O(n)
const sortedArr = [1, 2, 3, 4, 5];
console.log(optimizedBubbleSort(sortedArr));`,
            explanation: 'JavaScript optimized version - detects when array is sorted',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

// Optimized bubble sort with early termination
void optimizedBubbleSort(vector<int>& arr) {
    int n = arr.size();
    
    for (int i = 0; i < n; i++) {
        bool swapped = false;
        
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        
        if (!swapped) {
            break;  // Array is sorted
        }
    }
}

int main() {
    // Best case: already sorted - O(n)
    vector<int> sortedArr = {1, 2, 3, 4, 5};
    optimizedBubbleSort(sortedArr);
    
    for (int num : sortedArr) {
        cout << num << " ";
    }
    return 0;
}`,
            explanation: 'C++ optimized bubble sort - breaks early when sorted',
          },
          {
            language: 'java',
            code: `public class OptimizedBubbleSort {
    // Optimized bubble sort with early termination
    public static void optimizedBubbleSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 0; i < n; i++) {
            boolean swapped = false;
            
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            if (!swapped) {
                break;  // Array is sorted
            }
        }
    }
    
    public static void main(String[] args) {
        // Best case: already sorted - O(n)
        int[] sortedArr = {1, 2, 3, 4, 5};
        optimizedBubbleSort(sortedArr);
        
        for (int num : sortedArr) {
            System.out.print(num + " ");
        }
    }
}`,
            explanation: 'Java optimized bubble sort - uses flag to detect completion',
          },
        ],
      },
      expert: {
        markdownText: `
# Bubble Sort - Advanced Insights

## When to Use
- Small datasets (< 50 elements)
- Nearly sorted data
- Educational purposes
- When simplicity matters more than performance

## Comparison with Other Sorts
- Slower than Quick Sort, Merge Sort
- Stable sort (maintains relative order)
- Adaptive (performs better on partially sorted data)
        `,
        edgeCases: ['Already sorted', 'Reverse sorted', 'All elements same'],
        codeSnippets: [
          {
            language: 'python',
            code: `def bubble_sort_generic(arr, key=None, reverse=False):
    """
    Generic bubble sort with custom comparison
    Time: O(n²), Space: O(1)
    """
    n = len(arr)
    
    for i in range(n):
        swapped = False
        
        for j in range(0, n - i - 1):
            # Get comparison values
            val1 = key(arr[j]) if key else arr[j]
            val2 = key(arr[j + 1]) if key else arr[j + 1]
            
            # Compare based on reverse flag
            if (val1 > val2 and not reverse) or (val1 < val2 and reverse):
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        if not swapped:
            break
    
    return arr

# Sort by string length
words = ["apple", "pie", "banana", "cat"]
print(bubble_sort_generic(words, key=len))  # ['pie', 'cat', 'apple', 'banana']

# Sort in reverse
numbers = [5, 2, 8, 1, 9]
print(bubble_sort_generic(numbers, reverse=True))  # [9, 8, 5, 2, 1]`,
            explanation: 'Python generic bubble sort with custom key function and reverse option',
          },
          {
            language: 'javascript',
            code: `function bubbleSortGeneric(arr, compareFn = null) {
    /**
     * Generic bubble sort with custom comparison
     * Time: O(n²), Space: O(1)
     */
    const n = arr.length;
    const compare = compareFn || ((a, b) => a - b);
    
    for (let i = 0; i < n; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (compare(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        if (!swapped) break;
    }
    
    return arr;
}

// Sort by string length
const words = ["apple", "pie", "banana", "cat"];
bubbleSortGeneric(words, (a, b) => a.length - b.length);
console.log(words);  // ['pie', 'cat', 'apple', 'banana']

// Sort in reverse
const numbers = [5, 2, 8, 1, 9];
bubbleSortGeneric(numbers, (a, b) => b - a);
console.log(numbers);  // [9, 8, 5, 2, 1]`,
            explanation: 'JavaScript generic bubble sort with custom comparator function',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <functional>
using namespace std;

/**
 * Generic bubble sort with custom comparison
 * Time: O(n²), Space: O(1)
 */
template<typename T>
void bubbleSortGeneric(vector<T>& arr, function<bool(T, T)> compare = nullptr) {
    int n = arr.size();
    
    // Default comparison if none provided
    auto comp = compare ? compare : [](T a, T b) { return a > b; };
    
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        
        for (int j = 0; j < n - i - 1; j++) {
            if (comp(arr[j], arr[j + 1])) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        
        if (!swapped) break;
    }
}

int main() {
    // Sort in reverse
    vector<int> numbers = {5, 2, 8, 1, 9};
    bubbleSortGeneric(numbers, [](int a, int b) { return a < b; });
    
    for (int num : numbers) {
        cout << num << " ";  // 9 8 5 2 1
    }
    
    return 0;
}`,
            explanation: 'C++ template bubble sort with lambda comparison function',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class BubbleSortGeneric {
    /**
     * Generic bubble sort with custom comparison
     * Time: O(n²), Space: O(1)
     */
    public static <T> void bubbleSortGeneric(T[] arr, Comparator<T> comparator) {
        int n = arr.length;
        
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            
            for (int j = 0; j < n - i - 1; j++) {
                if (comparator.compare(arr[j], arr[j + 1]) > 0) {
                    T temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            if (!swapped) break;
        }
    }
    
    public static void main(String[] args) {
        // Sort by string length
        String[] words = {"apple", "pie", "banana", "cat"};
        bubbleSortGeneric(words, Comparator.comparingInt(String::length));
        System.out.println(Arrays.toString(words));
        // [pie, cat, apple, banana]
        
        // Sort in reverse
        Integer[] numbers = {5, 2, 8, 1, 9};
        bubbleSortGeneric(numbers, Comparator.reverseOrder());
        System.out.println(Arrays.toString(numbers));
        // [9, 8, 5, 2, 1]
    }
}`,
            explanation: 'Java generic bubble sort using Comparator interface for flexibility',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'sorting', params: { algorithm: 'bubble' } },
      playgroundInitialCode: {
        python: `def bubble_sort(arr):
    # Your code here
    pass

arr = [64, 34, 25, 12, 22]
print(bubble_sort(arr))`,
        javascript: `function bubbleSort(arr) {
    // Your code here
}

const arr = [64, 34, 25, 12, 22];
console.log(bubbleSort(arr));`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    // Your code here
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22};
    bubbleSort(arr);
    return 0;
}`,
        java: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        // Your code here
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22};
        bubbleSort(arr);
    }
}`,
      },
    },
  },
  {
    _id: '3',
    meta: {
      title: 'Linked Lists',
      slug: 'linked-lists',
      category: 'DSA',
      tags: ['data-structures', 'pointers', 'dynamic-memory'],
      estimatedTime: 40,
    },
    content: {
      beginner: {
        markdownText: `
# Linked Lists - Dynamic Data Chains 🔗

A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node. Unlike arrays, elements are not stored in contiguous memory!

## What is a Linked List?

A linked list consists of **nodes** where each node contains:
1. **Data**: The value stored
2. **Next**: Reference/pointer to the next node

The first node is called the **head**, and the last node points to **null**.

## Key Features

- **Dynamic size**: Grows and shrinks easily
- **No contiguous memory**: Nodes can be anywhere in memory
- **Easy insertion/deletion**: No shifting required
- **Sequential access**: Must traverse from head
- **Extra memory**: Stores pointers/references

## Linked List vs Array

| Feature | Array | Linked List |
|---------|-------|-------------|
| Access | O(1) | O(n) |
| Insert at start | O(n) | O(1) |
| Insert at end | O(1) | O(n) |
| Memory | Contiguous | Scattered |
| Size | Fixed/Dynamic | Dynamic |

## Basic Operations

1. **Append**: Add node at end - O(n)
2. **Prepend**: Add node at start - O(1)
3. **Delete**: Remove node - O(n)
4. **Search**: Find node - O(n)
5. **Display**: Print all nodes - O(n)

## Real-World Examples

- Music playlist (next/previous song)
- Browser history (back/forward)
- Undo/Redo functionality
- Image viewer (next/previous image)
- Train cars connected together
        `,
        analogy: "A linked list is like a treasure hunt where each clue (node) contains a treasure (data) and directions to the next clue (pointer). You must follow the chain from start to finish!",
        codeSnippets: [
          {
            language: 'python',
            code: `class Node:
    """Node class for linked list"""
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    """Singly Linked List implementation"""
    def __init__(self):
        self.head = None
    
    def append(self, data):
        """Add node at end - O(n)"""
        new_node = Node(data)
        
        # If list is empty
        if not self.head:
            self.head = new_node
            print(f"Added {data} as head")
            return
        
        # Traverse to end
        current = self.head
        while current.next:
            current = current.next
        
        current.next = new_node
        print(f"Appended {data}")
    
    def prepend(self, data):
        """Add node at start - O(1)"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        print(f"Prepended {data}")
    
    def display(self):
        """Print all nodes - O(n)"""
        if not self.head:
            print("List is empty")
            return
        
        current = self.head
        elements = []
        while current:
            elements.append(str(current.data))
            current = current.next
        print(" -> ".join(elements) + " -> None")
    
    def search(self, key):
        """Search for value - O(n)"""
        current = self.head
        position = 0
        
        while current:
            if current.data == key:
                print(f"Found {key} at position {position}")
                return position
            current = current.next
            position += 1
        
        print(f"{key} not found")
        return -1

# Usage example
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.prepend(0)
ll.display()  # 0 -> 1 -> 2 -> 3 -> None
ll.search(2)  # Found 2 at position 2`,
            explanation: 'Python linked list with Node class. head tracks first node. Traverse using current.next until None.',
          },
          {
            language: 'javascript',
            code: `class Node {
    // Node class for linked list
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    // Singly Linked List implementation
    constructor() {
        this.head = null;
    }
    
    append(data) {
        // Add node at end - O(n)
        const newNode = new Node(data);
        
        // If list is empty
        if (!this.head) {
            this.head = newNode;
            console.log(\`Added \${data} as head\`);
            return;
        }
        
        // Traverse to end
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        
        current.next = newNode;
        console.log(\`Appended \${data}\`);
    }
    
    prepend(data) {
        // Add node at start - O(1)
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        console.log(\`Prepended \${data}\`);
    }
    
    display() {
        // Print all nodes - O(n)
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" -> ") + " -> null");
    }
    
    search(key) {
        // Search for value - O(n)
        let current = this.head;
        let position = 0;
        
        while (current) {
            if (current.data === key) {
                console.log(\`Found \${key} at position \${position}\`);
                return position;
            }
            current = current.next;
            position++;
        }
        
        console.log(\`\${key} not found\`);
        return -1;
    }
}

// Usage example
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(0);
ll.display();  // 0 -> 1 -> 2 -> 3 -> null
ll.search(2);  // Found 2 at position 2`,
            explanation: 'JavaScript linked list using classes. Each node has data and next pointer. Traverse with while loop.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;
    
    Node(int val) : data(val), next(nullptr) {}
};

// Singly Linked List class
class LinkedList {
    Node* head;
    
public:
    LinkedList() : head(nullptr) {}
    
    // Add node at end - O(n)
    void append(int data) {
        Node* newNode = new Node(data);
        
        // If list is empty
        if (!head) {
            head = newNode;
            cout << "Added " << data << " as head" << endl;
            return;
        }
        
        // Traverse to end
        Node* current = head;
        while (current->next) {
            current = current->next;
        }
        
        current->next = newNode;
        cout << "Appended " << data << endl;
    }
    
    // Add node at start - O(1)
    void prepend(int data) {
        Node* newNode = new Node(data);
        newNode->next = head;
        head = newNode;
        cout << "Prepended " << data << endl;
    }
    
    // Print all nodes - O(n)
    void display() {
        if (!head) {
            cout << "List is empty" << endl;
            return;
        }
        
        Node* current = head;
        while (current) {
            cout << current->data << " -> ";
            current = current->next;
        }
        cout << "nullptr" << endl;
    }
    
    // Search for value - O(n)
    int search(int key) {
        Node* current = head;
        int position = 0;
        
        while (current) {
            if (current->data == key) {
                cout << "Found " << key << " at position " << position << endl;
                return position;
            }
            current = current->next;
            position++;
        }
        
        cout << key << " not found" << endl;
        return -1;
    }
};

int main() {
    LinkedList ll;
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.prepend(0);
    ll.display();  // 0 -> 1 -> 2 -> 3 -> nullptr
    ll.search(2);  // Found 2 at position 2
    return 0;
}`,
            explanation: 'C++ linked list with Node struct and pointers. Use -> to access members through pointers. Remember to manage memory!',
          },
          {
            language: 'java',
            code: `// Node class
class Node {
    int data;
    Node next;
    
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Linked List class
class LinkedList {
    private Node head;
    
    public LinkedList() {
        this.head = null;
    }
    
    // Add node at end - O(n)
    public void append(int data) {
        Node newNode = new Node(data);
        
        // If list is empty
        if (head == null) {
            head = newNode;
            System.out.println("Added " + data + " as head");
            return;
        }
        
        // Traverse to end
        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        
        current.next = newNode;
        System.out.println("Appended " + data);
    }
    
    // Add node at start - O(1)
    public void prepend(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
        System.out.println("Prepended " + data);
    }
    
    // Print all nodes - O(n)
    public void display() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
    
    // Search for value - O(n)
    public int search(int key) {
        Node current = head;
        int position = 0;
        
        while (current != null) {
            if (current.data == key) {
                System.out.println("Found " + key + " at position " + position);
                return position;
            }
            current = current.next;
            position++;
        }
        
        System.out.println(key + " not found");
        return -1;
    }
    
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.prepend(0);
        ll.display();  // 0 -> 1 -> 2 -> 3 -> null
        ll.search(2);  // Found 2 at position 2
    }
}`,
            explanation: 'Java linked list with Node and LinkedList classes. Java handles memory automatically (garbage collection).',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Linked Lists - Reverse a Linked List 🔄

One of the most common interview questions: reverse a singly linked list in-place!

## Problem: Reverse Linked List

Given a linked list: \`1 -> 2 -> 3 -> 4 -> None\`
Reverse it to: \`4 -> 3 -> 2 -> 1 -> None\`

**Constraints:**
- Reverse in-place (O(1) extra space)
- Don't create a new list
- Return the new head

## Algorithm Strategy

Use **three pointers** to reverse links:
1. **prev**: Tracks previous node (starts as None)
2. **current**: Current node being processed
3. **next**: Temporarily stores next node

**Steps:**
1. Save next node: \`next = current.next\`
2. Reverse link: \`current.next = prev\`
3. Move pointers forward: \`prev = current\`, \`current = next\`
4. Repeat until current is None
5. Return prev (new head)

## Visualization

\`\`\`
Original: 1 -> 2 -> 3 -> None

Step 1: None <- 1    2 -> 3 -> None
Step 2: None <- 1 <- 2    3 -> None
Step 3: None <- 1 <- 2 <- 3
\`\`\`

## Time & Space Complexity

| Metric | Complexity |
|--------|------------|
| Time | O(n) - visit each node once |
| Space | O(1) - only 3 pointers |

## Real-World Applications

- **Undo operations**: Reverse action history
- **Text editors**: Reverse word order
- **Navigation**: Go back through path
- **Data processing**: Reverse data flow
        `,
        timeComplexityAnalysis: 'Single pass through the list (O(n)) with constant extra space (O(1)). Each node is visited exactly once.',
        codeSnippets: [
          {
            language: 'python',
            code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def reverse_linked_list(head):
    """
    Reverse a singly linked list in-place
    Time: O(n), Space: O(1)
    """
    prev = None
    current = head
    
    while current:
        # Save next node
        next_node = current.next
        
        # Reverse the link
        current.next = prev
        
        # Move pointers forward
        prev = current
        current = next_node
    
    # prev is now the new head
    return prev

def print_list(head):
    """Helper to print list"""
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")

# Create list: 1 -> 2 -> 3 -> 4 -> None
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)

print("Original:")
print_list(head)  # 1 -> 2 -> 3 -> 4 -> None

# Reverse the list
new_head = reverse_linked_list(head)

print("\\nReversed:")
print_list(new_head)  # 4 -> 3 -> 2 -> 1 -> None`,
            explanation: 'Python iterative reversal using three pointers. Save next, reverse link, move forward. Clean and efficient!',
          },
          {
            language: 'javascript',
            code: `class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    /**
     * Reverse a singly linked list in-place
     * Time: O(n), Space: O(1)
     */
    let prev = null;
    let current = head;
    
    while (current) {
        // Save next node
        const nextNode = current.next;
        
        // Reverse the link
        current.next = prev;
        
        // Move pointers forward
        prev = current;
        current = nextNode;
    }
    
    // prev is now the new head
    return prev;
}

function printList(head) {
    // Helper to print list
    let current = head;
    const elements = [];
    while (current) {
        elements.push(current.data);
        current = current.next;
    }
    console.log(elements.join(" -> ") + " -> null");
}

// Create list: 1 -> 2 -> 3 -> 4 -> null
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Original:");
printList(head);  // 1 -> 2 -> 3 -> 4 -> null

// Reverse the list
const newHead = reverseLinkedList(head);

console.log("\\nReversed:");
printList(newHead);  // 4 -> 3 -> 2 -> 1 -> null`,
            explanation: 'JavaScript iterative approach with three pointers. Use const for nextNode to prevent reassignment bugs.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

/**
 * Reverse a singly linked list in-place
 * Time: O(n), Space: O(1)
 */
Node* reverseLinkedList(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    
    while (current) {
        // Save next node
        Node* nextNode = current->next;
        
        // Reverse the link
        current->next = prev;
        
        // Move pointers forward
        prev = current;
        current = nextNode;
    }
    
    // prev is now the new head
    return prev;
}

void printList(Node* head) {
    // Helper to print list
    Node* current = head;
    while (current) {
        cout << current->data << " -> ";
        current = current->next;
    }
    cout << "nullptr" << endl;
}

int main() {
    // Create list: 1 -> 2 -> 3 -> 4 -> nullptr
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    
    cout << "Original:" << endl;
    printList(head);  // 1 -> 2 -> 3 -> 4 -> nullptr
    
    // Reverse the list
    Node* newHead = reverseLinkedList(head);
    
    cout << "\\nReversed:" << endl;
    printList(newHead);  // 4 -> 3 -> 2 -> 1 -> nullptr
    
    return 0;
}`,
            explanation: 'C++ pointer manipulation for reversal. Use -> for pointer access. Three pointers track prev, current, next.',
          },
          {
            language: 'java',
            code: `class Node {
    int data;
    Node next;
    
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListReversal {
    /**
     * Reverse a singly linked list in-place
     * Time: O(n), Space: O(1)
     */
    public static Node reverseLinkedList(Node head) {
        Node prev = null;
        Node current = head;
        
        while (current != null) {
            // Save next node
            Node nextNode = current.next;
            
            // Reverse the link
            current.next = prev;
            
            // Move pointers forward
            prev = current;
            current = nextNode;
        }
        
        // prev is now the new head
        return prev;
    }
    
    public static void printList(Node head) {
        // Helper to print list
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
    
    public static void main(String[] args) {
        // Create list: 1 -> 2 -> 3 -> 4 -> null
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        
        System.out.println("Original:");
        printList(head);  // 1 -> 2 -> 3 -> 4 -> null
        
        // Reverse the list
        Node newHead = reverseLinkedList(head);
        
        System.out.println("\\nReversed:");
        printList(newHead);  // 4 -> 3 -> 2 -> 1 -> null
    }
}`,
            explanation: 'Java iterative reversal with three references. Clean logic: save next, reverse link, move forward.',
          },
        ],
      },
      expert: {
        markdownText: `
# Linked Lists - Detect Cycle (Floyd's Algorithm) 🔍

Detect if a linked list has a cycle using the famous **Floyd's Cycle Detection Algorithm** (Tortoise and Hare)!

## Problem: Linked List Cycle

Given a linked list, determine if it has a cycle (a node's next pointer points back to a previous node).

**Example with cycle:**
\`\`\`
1 -> 2 -> 3 -> 4
     ^         |
     |_________|
\`\`\`

**Example without cycle:**
\`\`\`
1 -> 2 -> 3 -> 4 -> None
\`\`\`

## Floyd's Cycle Detection Algorithm

**The Tortoise and Hare approach:**
- **Slow pointer**: Moves 1 step at a time
- **Fast pointer**: Moves 2 steps at a time

**Key Insight**: If there's a cycle, fast will eventually catch up to slow!

## Why It Works

- **No cycle**: Fast reaches end (None/null) first
- **With cycle**: Fast laps slow inside the cycle
- **Meeting point**: Proves cycle exists

## Algorithm Steps

1. Initialize slow and fast at head
2. Move slow by 1, fast by 2
3. If fast reaches None → no cycle
4. If slow == fast → cycle detected!

## Time & Space Complexity

| Metric | Complexity |
|--------|------------|
| Time | O(n) - at most 2n steps |
| Space | O(1) - only 2 pointers |

## Real-World Applications

- **Memory leak detection**: Circular references
- **Infinite loop detection**: Program analysis
- **Graph cycle detection**: Network loops
- **Deadlock detection**: Resource allocation
- **Data validation**: Corrupted data structures
        `,
        memoryOptimization: 'Floyd\'s algorithm uses O(1) space vs O(n) for hash set approach. Optimal for memory-constrained systems.',
        systemDesignImplications: 'Used in garbage collectors for cycle detection, network routing to detect loops, and distributed systems for deadlock detection.',
        codeSnippets: [
          {
            language: 'python',
            code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def has_cycle(head):
    """
    Detect cycle using Floyd's algorithm
    Time: O(n), Space: O(1)
    """
    if not head or not head.next:
        return False
    
    # Initialize two pointers
    slow = head
    fast = head
    
    # Move pointers at different speeds
    while fast and fast.next:
        slow = slow.next        # Move 1 step
        fast = fast.next.next   # Move 2 steps
        
        # If they meet, cycle exists
        if slow == fast:
            return True
    
    # Fast reached end, no cycle
    return False

# Test Case 1: List with cycle
# 1 -> 2 -> 3 -> 4
#      ^         |
#      |_________|
head1 = Node(1)
head1.next = Node(2)
head1.next.next = Node(3)
head1.next.next.next = Node(4)
head1.next.next.next.next = head1.next  # Create cycle

print(f"List 1 has cycle: {has_cycle(head1)}")  # True

# Test Case 2: List without cycle
# 1 -> 2 -> 3 -> 4 -> None
head2 = Node(1)
head2.next = Node(2)
head2.next.next = Node(3)
head2.next.next.next = Node(4)

print(f"List 2 has cycle: {has_cycle(head2)}")  # False

# Test Case 3: Single node with self-loop
head3 = Node(1)
head3.next = head3  # Points to itself

print(f"List 3 has cycle: {has_cycle(head3)}")  # True`,
            explanation: 'Python Floyd\'s algorithm with slow/fast pointers. Elegant and efficient - if they meet, there\'s a cycle!',
          },
          {
            language: 'javascript',
            code: `class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasCycle(head) {
    /**
     * Detect cycle using Floyd's algorithm
     * Time: O(n), Space: O(1)
     */
    if (!head || !head.next) {
        return false;
    }
    
    // Initialize two pointers
    let slow = head;
    let fast = head;
    
    // Move pointers at different speeds
    while (fast && fast.next) {
        slow = slow.next;        // Move 1 step
        fast = fast.next.next;   // Move 2 steps
        
        // If they meet, cycle exists
        if (slow === fast) {
            return true;
        }
    }
    
    // Fast reached end, no cycle
    return false;
}

// Test Case 1: List with cycle
// 1 -> 2 -> 3 -> 4
//      ^         |
//      |_________|
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = head1.next;  // Create cycle

console.log(\`List 1 has cycle: \${hasCycle(head1)}\`);  // true

// Test Case 2: List without cycle
// 1 -> 2 -> 3 -> 4 -> null
const head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);

console.log(\`List 2 has cycle: \${hasCycle(head2)}\`);  // false

// Test Case 3: Single node with self-loop
const head3 = new Node(1);
head3.next = head3;  // Points to itself

console.log(\`List 3 has cycle: \${hasCycle(head3)}\`);  // true`,
            explanation: 'JavaScript Floyd\'s algorithm. Use === for reference equality. Fast catches slow if cycle exists!',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

/**
 * Detect cycle using Floyd's algorithm
 * Time: O(n), Space: O(1)
 */
bool hasCycle(Node* head) {
    if (!head || !head->next) {
        return false;
    }
    
    // Initialize two pointers
    Node* slow = head;
    Node* fast = head;
    
    // Move pointers at different speeds
    while (fast && fast->next) {
        slow = slow->next;        // Move 1 step
        fast = fast->next->next;  // Move 2 steps
        
        // If they meet, cycle exists
        if (slow == fast) {
            return true;
        }
    }
    
    // Fast reached end, no cycle
    return false;
}

int main() {
    // Test Case 1: List with cycle
    // 1 -> 2 -> 3 -> 4
    //      ^         |
    //      |_________|
    Node* head1 = new Node(1);
    head1->next = new Node(2);
    head1->next->next = new Node(3);
    head1->next->next->next = new Node(4);
    head1->next->next->next->next = head1->next;  // Create cycle
    
    cout << "List 1 has cycle: " << (hasCycle(head1) ? "true" : "false") << endl;  // true
    
    // Test Case 2: List without cycle
    // 1 -> 2 -> 3 -> 4 -> nullptr
    Node* head2 = new Node(1);
    head2->next = new Node(2);
    head2->next->next = new Node(3);
    head2->next->next->next = new Node(4);
    
    cout << "List 2 has cycle: " << (hasCycle(head2) ? "true" : "false") << endl;  // false
    
    // Test Case 3: Single node with self-loop
    Node* head3 = new Node(1);
    head3->next = head3;  // Points to itself
    
    cout << "List 3 has cycle: " << (hasCycle(head3) ? "true" : "false") << endl;  // true
    
    return 0;
}`,
            explanation: 'C++ Floyd\'s algorithm with pointer comparison. Check fast && fast->next to avoid null pointer errors!',
          },
          {
            language: 'java',
            code: `class Node {
    int data;
    Node next;
    
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class CycleDetection {
    /**
     * Detect cycle using Floyd's algorithm
     * Time: O(n), Space: O(1)
     */
    public static boolean hasCycle(Node head) {
        if (head == null || head.next == null) {
            return false;
        }
        
        // Initialize two pointers
        Node slow = head;
        Node fast = head;
        
        // Move pointers at different speeds
        while (fast != null && fast.next != null) {
            slow = slow.next;        // Move 1 step
            fast = fast.next.next;   // Move 2 steps
            
            // If they meet, cycle exists
            if (slow == fast) {
                return true;
            }
        }
        
        // Fast reached end, no cycle
        return false;
    }
    
    public static void main(String[] args) {
        // Test Case 1: List with cycle
        // 1 -> 2 -> 3 -> 4
        //      ^         |
        //      |_________|
        Node head1 = new Node(1);
        head1.next = new Node(2);
        head1.next.next = new Node(3);
        head1.next.next.next = new Node(4);
        head1.next.next.next.next = head1.next;  // Create cycle
        
        System.out.println("List 1 has cycle: " + hasCycle(head1));  // true
        
        // Test Case 2: List without cycle
        // 1 -> 2 -> 3 -> 4 -> null
        Node head2 = new Node(1);
        head2.next = new Node(2);
        head2.next.next = new Node(3);
        head2.next.next.next = new Node(4);
        
        System.out.println("List 2 has cycle: " + hasCycle(head2));  // false
        
        // Test Case 3: Single node with self-loop
        Node head3 = new Node(1);
        head3.next = head3;  // Points to itself
        
        System.out.println("List 3 has cycle: " + hasCycle(head3));  // true
    }
}`,
            explanation: 'Java Floyd\'s algorithm with reference comparison. Classic tortoise and hare - simple yet powerful!',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'graph', params: { structure: 'linked-list' } },
      playgroundInitialCode: {
        python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Create a linked list
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)`,
        javascript: `class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Create a linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);`,
        cpp: `struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    return 0;
}`,
        java: `class Node {
    int data;
    Node next;
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Main {
    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
    }
}`,
      },
    },
  },
  {
    _id: '4',
    meta: {
      title: 'Dynamic Programming Basics',
      slug: 'dynamic-programming',
      category: 'DSA',
      tags: ['algorithms', 'optimization', 'memoization'],
      estimatedTime: 50,
    },
    content: {
      beginner: {
        markdownText: `
# Dynamic Programming - Smart Problem Solving

Imagine you're climbing stairs and you write down how many ways you can reach each step. Instead of recalculating, you just look at your notes!

## Key Idea
Break big problems into smaller subproblems and remember the answers.

## Two Approaches
1. **Memoization:** Top-down (recursion + cache)
2. **Tabulation:** Bottom-up (iterative + table)
        `,
        analogy: "It's like doing homework and saving your answers so you don't have to solve the same problem twice!",
        codeSnippets: [
          {
            language: 'python',
            code: `# Fibonacci with memoization (top-down DP)
def fib(n, memo={}):
    """Calculate nth Fibonacci number - O(n) time, O(n) space"""
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]

print(fib(10))  # 55
print(fib(50))  # 12586269025 (instant!)

# Tabulation (bottom-up DP)
def fib_tabulation(n):
    """Bottom-up approach - O(n) time, O(n) space"""
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

print(fib_tabulation(10))  # 55`,
            explanation: 'Python DP with memoization (top-down) and tabulation (bottom-up) approaches',
          },
          {
            language: 'javascript',
            code: `// Fibonacci with memoization (top-down DP)
function fib(n, memo = {}) {
    // Calculate nth Fibonacci number - O(n) time, O(n) space
    if (n in memo) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

console.log(fib(10));  // 55
console.log(fib(50));  // 12586269025 (instant!)

// Tabulation (bottom-up DP)
function fibTabulation(n) {
    // Bottom-up approach - O(n) time, O(n) space
    if (n <= 1) return n;
    
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

console.log(fibTabulation(10));  // 55`,
            explanation: 'JavaScript DP showing both memoization and tabulation patterns',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

// Fibonacci with memoization (top-down DP)
long long fib(int n, unordered_map<int, long long>& memo) {
    // Calculate nth Fibonacci number - O(n) time, O(n) space
    if (memo.find(n) != memo.end()) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

// Tabulation (bottom-up DP)
long long fibTabulation(int n) {
    // Bottom-up approach - O(n) time, O(n) space
    if (n <= 1) return n;
    
    vector<long long> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

int main() {
    unordered_map<int, long long> memo;
    cout << fib(10, memo) << endl;  // 55
    cout << fibTabulation(50) << endl;  // 12586269025
    return 0;
}`,
            explanation: 'C++ DP using unordered_map for memoization and vector for tabulation',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class DynamicProgramming {
    // Fibonacci with memoization (top-down DP)
    public static long fib(int n, Map<Integer, Long> memo) {
        // Calculate nth Fibonacci number - O(n) time, O(n) space
        if (memo.containsKey(n)) {
            return memo.get(n);
        }
        if (n <= 1) {
            return n;
        }
        
        long result = fib(n-1, memo) + fib(n-2, memo);
        memo.put(n, result);
        return result;
    }
    
    // Tabulation (bottom-up DP)
    public static long fibTabulation(int n) {
        // Bottom-up approach - O(n) time, O(n) space
        if (n <= 1) return n;
        
        long[] dp = new long[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        return dp[n];
    }
    
    public static void main(String[] args) {
        Map<Integer, Long> memo = new HashMap<>();
        System.out.println(fib(10, memo));  // 55
        System.out.println(fibTabulation(50));  // 12586269025
    }
}`,
            explanation: 'Java DP with HashMap for memoization and array for tabulation',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Dynamic Programming - Patterns

## When to Use DP
1. Optimal substructure
2. Overlapping subproblems
3. Can be solved recursively

## Common DP Problems
- Fibonacci sequence
- Coin change
- Longest common subsequence
- 0/1 Knapsack

## Time Complexity
Usually reduces exponential to polynomial time!
        `,
        timeComplexityAnalysis: 'Memoization trades space for time. O(2^n) becomes O(n) for Fibonacci.',
        codeSnippets: [
          {
            language: 'python',
            code: `def coin_change(coins, amount):
    """
    Minimum coins needed to make amount
    Time: O(amount * coins), Space: O(amount)
    """
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0 coins needed for amount 0
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

# Examples
print(coin_change([1, 2, 5], 11))  # 3 (5+5+1)
print(coin_change([2], 3))         # -1 (impossible)
print(coin_change([1, 3, 4], 6))   # 2 (3+3)`,
            explanation: 'Python coin change DP - classic problem showing optimal substructure',
          },
          {
            language: 'javascript',
            code: `function coinChange(coins, amount) {
    /**
     * Minimum coins needed to make amount
     * Time: O(amount * coins), Space: O(amount)
     */
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;  // 0 coins needed for amount 0
    
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Examples
console.log(coinChange([1, 2, 5], 11));  // 3 (5+5+1)
console.log(coinChange([2], 3));         // -1 (impossible)
console.log(coinChange([1, 3, 4], 6));   // 2 (3+3)`,
            explanation: 'JavaScript coin change DP - builds solution from smaller subproblems',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

/**
 * Minimum coins needed to make amount
 * Time: O(amount * coins), Space: O(amount)
 */
int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;  // 0 coins needed for amount 0
    
    for (int coin : coins) {
        for (int i = coin; i <= amount; i++) {
            if (dp[i - coin] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}

int main() {
    vector<int> coins1 = {1, 2, 5};
    cout << coinChange(coins1, 11) << endl;  // 3 (5+5+1)
    
    vector<int> coins2 = {2};
    cout << coinChange(coins2, 3) << endl;   // -1 (impossible)
    
    vector<int> coins3 = {1, 3, 4};
    cout << coinChange(coins3, 6) << endl;   // 2 (3+3)
    
    return 0;
}`,
            explanation: 'C++ coin change DP - uses INT_MAX to represent impossible states',
          },
          {
            language: 'java',
            code: `public class CoinChange {
    /**
     * Minimum coins needed to make amount
     * Time: O(amount * coins), Space: O(amount)
     */
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        for (int i = 1; i <= amount; i++) {
            dp[i] = Integer.MAX_VALUE;
        }
        dp[0] = 0;  // 0 coins needed for amount 0
        
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                if (dp[i - coin] != Integer.MAX_VALUE) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
    }
    
    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1, 2, 5}, 11));  // 3 (5+5+1)
        System.out.println(coinChange(new int[]{2}, 3));         // -1 (impossible)
        System.out.println(coinChange(new int[]{1, 3, 4}, 6));   // 2 (3+3)
    }
}`,
            explanation: 'Java coin change DP - demonstrates optimal substructure property',
          },
        ],
      },
      expert: {
        markdownText: `
# Dynamic Programming - Advanced

## Space Optimization
Often can reduce from O(n²) to O(n) space by keeping only necessary rows.

## State Design
The hardest part is defining the DP state correctly.

## Bottom-up vs Top-down
- Bottom-up: Better space, iterative
- Top-down: More intuitive, handles sparse cases better
        `,
        memoryOptimization: 'Use rolling arrays or state compression when possible.',
        systemDesignImplications: 'DP principles apply to caching strategies in distributed systems.',
        codeSnippets: [
          {
            language: 'python',
            code: `def length_of_lis(nums):
    """
    Longest Increasing Subsequence - O(n log n)
    Using binary search for optimization
    """
    from bisect import bisect_left
    
    dp = []
    
    for num in nums:
        pos = bisect_left(dp, num)
        if pos == len(dp):
            dp.append(num)
        else:
            dp[pos] = num
    
    return len(dp)

# Examples
print(length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]))  # 4 ([2,3,7,101])
print(length_of_lis([0, 1, 0, 3, 2, 3]))            # 4 ([0,1,2,3])
print(length_of_lis([7, 7, 7, 7, 7]))               # 1`,
            explanation: 'Python LIS using binary search - O(n log n) instead of O(n²)',
          },
          {
            language: 'javascript',
            code: `function lengthOfLIS(nums) {
    /**
     * Longest Increasing Subsequence - O(n log n)
     * Using binary search for optimization
     */
    const dp = [];
    
    // Binary search helper
    function binarySearch(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
    
    for (const num of nums) {
        const pos = binarySearch(dp, num);
        if (pos === dp.length) {
            dp.push(num);
        } else {
            dp[pos] = num;
        }
    }
    
    return dp.length;
}

// Examples
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));  // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));            // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7]));               // 1`,
            explanation: 'JavaScript LIS with custom binary search for O(n log n) complexity',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/**
 * Longest Increasing Subsequence - O(n log n)
 * Using binary search for optimization
 */
int lengthOfLIS(vector<int>& nums) {
    vector<int> dp;
    
    for (int num : nums) {
        auto it = lower_bound(dp.begin(), dp.end(), num);
        if (it == dp.end()) {
            dp.push_back(num);
        } else {
            *it = num;
        }
    }
    
    return dp.size();
}

int main() {
    vector<int> nums1 = {10, 9, 2, 5, 3, 7, 101, 18};
    cout << lengthOfLIS(nums1) << endl;  // 4 ([2,3,7,101])
    
    vector<int> nums2 = {0, 1, 0, 3, 2, 3};
    cout << lengthOfLIS(nums2) << endl;  // 4 ([0,1,2,3])
    
    vector<int> nums3 = {7, 7, 7, 7, 7};
    cout << lengthOfLIS(nums3) << endl;  // 1
    
    return 0;
}`,
            explanation: 'C++ LIS using STL lower_bound for efficient binary search',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class LongestIncreasingSubsequence {
    /**
     * Longest Increasing Subsequence - O(n log n)
     * Using binary search for optimization
     */
    public static int lengthOfLIS(int[] nums) {
        List<Integer> dp = new ArrayList<>();
        
        for (int num : nums) {
            int pos = binarySearch(dp, num);
            if (pos == dp.size()) {
                dp.add(num);
            } else {
                dp.set(pos, num);
            }
        }
        
        return dp.size();
    }
    
    private static int binarySearch(List<Integer> list, int target) {
        int left = 0, right = list.size();
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (list.get(mid) < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10, 9, 2, 5, 3, 7, 101, 18}));  // 4
        System.out.println(lengthOfLIS(new int[]{0, 1, 0, 3, 2, 3}));            // 4
        System.out.println(lengthOfLIS(new int[]{7, 7, 7, 7, 7}));               // 1
    }
}`,
            explanation: 'Java LIS with custom binary search - demonstrates DP optimization techniques',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'array', params: { visualization: 'dp-table' } },
      playgroundInitialCode: {
        python: `def fibonacci(n):
    # Implement with DP
    pass

print(fibonacci(10))`,
        javascript: `function fibonacci(n) {
    // Implement with DP
}

console.log(fibonacci(10));`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

int fibonacci(int n) {
    // Implement with DP
    return 0;
}

int main() {
    cout << fibonacci(10) << endl;
    return 0;
}`,
        java: `public class DP {
    public static int fibonacci(int n) {
        // Implement with DP
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(fibonacci(10));
    }
}`,
      },
    },
  },
  {
    _id: '5',
    meta: {
      title: 'Hash Tables',
      slug: 'hash-tables',
      category: 'DSA',
      tags: ['data-structures', 'hashing', 'dictionaries'],
      estimatedTime: 35,
    },
    content: {
      beginner: {
        markdownText: `
# Hash Tables - Lightning Fast Lookups

Imagine a library where instead of searching shelf by shelf, you have a magic formula that tells you exactly which shelf has your book!

## What is a Hash Table?
A data structure that maps keys to values using a hash function.

## Why So Fast?
Average O(1) time for insert, delete, and search!

## Real-World Uses
- Dictionaries in Python
- Objects in JavaScript
- Phone book lookups
        `,
        analogy: "It's like having a locker number (hash) that directly tells you where your stuff is stored!",
        codeSnippets: [
          {
            language: 'python',
            code: `# Using Python's built-in dictionary (hash table)
phone_book = {}

# Insert - O(1) average
phone_book["Alice"] = "555-1234"
phone_book["Bob"] = "555-5678"
phone_book["Charlie"] = "555-9999"

# Lookup - O(1) average
print(phone_book["Alice"])  # 555-1234

# Check if exists - O(1)
if "Charlie" in phone_book:
    print("Found Charlie!")

# Delete - O(1)
del phone_book["Bob"]

# Iterate
for name, number in phone_book.items():
    print(f"{name}: {number}")`,
            explanation: 'Python dict is a hash table with O(1) average operations',
          },
          {
            language: 'javascript',
            code: `// Using JavaScript Object (hash table)
const phoneBook = {};

// Insert - O(1) average
phoneBook["Alice"] = "555-1234";
phoneBook["Bob"] = "555-5678";
phoneBook["Charlie"] = "555-9999";

// Lookup - O(1) average
console.log(phoneBook["Alice"]);  // 555-1234

// Check if exists - O(1)
if ("Charlie" in phoneBook) {
    console.log("Found Charlie!");
}

// Delete - O(1)
delete phoneBook["Bob"];

// Iterate
for (const [name, number] of Object.entries(phoneBook)) {
    console.log(\`\${name}: \${number}\`);
}

// Using Map (better for hash table)
const phoneMap = new Map();
phoneMap.set("Alice", "555-1234");
console.log(phoneMap.get("Alice"));`,
            explanation: 'JavaScript Object and Map both provide hash table functionality',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

int main() {
    // Using unordered_map (hash table)
    unordered_map<string, string> phoneBook;
    
    // Insert - O(1) average
    phoneBook["Alice"] = "555-1234";
    phoneBook["Bob"] = "555-5678";
    phoneBook["Charlie"] = "555-9999";
    
    // Lookup - O(1) average
    cout << phoneBook["Alice"] << endl;  // 555-1234
    
    // Check if exists - O(1)
    if (phoneBook.find("Charlie") != phoneBook.end()) {
        cout << "Found Charlie!" << endl;
    }
    
    // Delete - O(1)
    phoneBook.erase("Bob");
    
    // Iterate
    for (const auto& [name, number] : phoneBook) {
        cout << name << ": " << number << endl;
    }
    
    return 0;
}`,
            explanation: 'C++ unordered_map is a hash table with average O(1) operations',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class HashTableExample {
    public static void main(String[] args) {
        // Using HashMap (hash table)
        HashMap<String, String> phoneBook = new HashMap<>();
        
        // Insert - O(1) average
        phoneBook.put("Alice", "555-1234");
        phoneBook.put("Bob", "555-5678");
        phoneBook.put("Charlie", "555-9999");
        
        // Lookup - O(1) average
        System.out.println(phoneBook.get("Alice"));  // 555-1234
        
        // Check if exists - O(1)
        if (phoneBook.containsKey("Charlie")) {
            System.out.println("Found Charlie!");
        }
        
        // Delete - O(1)
        phoneBook.remove("Bob");
        
        // Iterate
        for (Map.Entry<String, String> entry : phoneBook.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}`,
            explanation: 'Java HashMap provides hash table with O(1) average time complexity',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Hash Tables - Under the Hood

## Hash Function
Converts key to array index: \`hash(key) % array_size\`

## Collision Handling
1. **Chaining:** Store multiple items at same index (linked list)
2. **Open Addressing:** Find next available slot

## Time Complexity
- **Average:** O(1) for all operations
- **Worst:** O(n) when many collisions
        `,
        timeComplexityAnalysis: 'Good hash function distributes keys uniformly, minimizing collisions.',
        codeSnippets: [
          {
            language: 'python',
            code: `class HashTable:
    """Custom hash table with chaining for collision resolution"""
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]
    
    def _hash(self, key):
        """Hash function: key -> index"""
        return hash(key) % self.size
    
    def insert(self, key, value):
        """Insert key-value pair - O(1) average"""
        index = self._hash(key)
        # Check if key exists, update if found
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return
        # Chaining: append to list at index
        self.table[index].append((key, value))
    
    def get(self, key):
        """Get value by key - O(1) average"""
        index = self._hash(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None
    
    def delete(self, key):
        """Delete key-value pair - O(1) average"""
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return True
        return False

# Test
ht = HashTable()
ht.insert("apple", 5)
ht.insert("banana", 7)
print(ht.get("apple"))  # 5`,
            explanation: 'Python custom hash table using chaining (lists) for collision handling',
          },
          {
            language: 'javascript',
            code: `class HashTable {
    // Custom hash table with chaining for collision resolution
    constructor(size = 10) {
        this.size = size;
        this.table = Array.from({ length: size }, () => []);
    }
    
    _hash(key) {
        // Hash function: key -> index
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }
    
    insert(key, value) {
        // Insert key-value pair - O(1) average
        const index = this._hash(key);
        // Check if key exists, update if found
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }
        // Chaining: append to array at index
        this.table[index].push([key, value]);
    }
    
    get(key) {
        // Get value by key - O(1) average
        const index = this._hash(key);
        for (const [k, v] of this.table[index]) {
            if (k === key) return v;
        }
        return null;
    }
    
    delete(key) {
        // Delete key-value pair - O(1) average
        const index = this._hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}

// Test
const ht = new HashTable();
ht.insert("apple", 5);
ht.insert("banana", 7);
console.log(ht.get("apple"));  // 5`,
            explanation: 'JavaScript custom hash table with chaining using nested arrays',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <list>
#include <string>
using namespace std;

// Custom hash table with chaining for collision resolution
class HashTable {
    int size;
    vector<list<pair<string, int>>> table;
    
    int hash(const string& key) {
        // Hash function: key -> index
        int hashValue = 0;
        for (char c : key) {
            hashValue = (hashValue + c) % size;
        }
        return hashValue;
    }
    
public:
    HashTable(int s = 10) : size(s), table(s) {}
    
    void insert(const string& key, int value) {
        // Insert key-value pair - O(1) average
        int index = hash(key);
        // Check if key exists, update if found
        for (auto& [k, v] : table[index]) {
            if (k == key) {
                v = value;
                return;
            }
        }
        // Chaining: append to list at index
        table[index].push_back({key, value});
    }
    
    int get(const string& key) {
        // Get value by key - O(1) average
        int index = hash(key);
        for (const auto& [k, v] : table[index]) {
            if (k == key) return v;
        }
        return -1;  // Not found
    }
    
    bool remove(const string& key) {
        // Delete key-value pair - O(1) average
        int index = hash(key);
        auto& bucket = table[index];
        for (auto it = bucket.begin(); it != bucket.end(); ++it) {
            if (it->first == key) {
                bucket.erase(it);
                return true;
            }
        }
        return false;
    }
};

int main() {
    HashTable ht;
    ht.insert("apple", 5);
    ht.insert("banana", 7);
    cout << ht.get("apple") << endl;  // 5
    return 0;
}`,
            explanation: 'C++ custom hash table using vector of lists for chaining',
          },
          {
            language: 'java',
            code: `import java.util.*;

// Custom hash table with chaining for collision resolution
class HashTable {
    private int size;
    private List<List<Entry>> table;
    
    static class Entry {
        String key;
        int value;
        Entry(String key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    public HashTable(int size) {
        this.size = size;
        this.table = new ArrayList<>(size);
        for (int i = 0; i < size; i++) {
            table.add(new ArrayList<>());
        }
    }
    
    private int hash(String key) {
        // Hash function: key -> index
        int hashValue = 0;
        for (char c : key.toCharArray()) {
            hashValue = (hashValue + c) % size;
        }
        return hashValue;
    }
    
    public void insert(String key, int value) {
        // Insert key-value pair - O(1) average
        int index = hash(key);
        List<Entry> bucket = table.get(index);
        // Check if key exists, update if found
        for (Entry entry : bucket) {
            if (entry.key.equals(key)) {
                entry.value = value;
                return;
            }
        }
        // Chaining: append to list at index
        bucket.add(new Entry(key, value));
    }
    
    public Integer get(String key) {
        // Get value by key - O(1) average
        int index = hash(key);
        for (Entry entry : table.get(index)) {
            if (entry.key.equals(key)) {
                return entry.value;
            }
        }
        return null;  // Not found
    }
    
    public boolean delete(String key) {
        // Delete key-value pair - O(1) average
        int index = hash(key);
        List<Entry> bucket = table.get(index);
        for (int i = 0; i < bucket.size(); i++) {
            if (bucket.get(i).key.equals(key)) {
                bucket.remove(i);
                return true;
            }
        }
        return false;
    }
    
    public static void main(String[] args) {
        HashTable ht = new HashTable(10);
        ht.insert("apple", 5);
        ht.insert("banana", 7);
        System.out.println(ht.get("apple"));  // 5
    }
}`,
            explanation: 'Java custom hash table with ArrayList of ArrayLists for chaining',
          },
        ],
      },
      expert: {
        markdownText: `
# Hash Tables - Advanced Topics

## Load Factor
\`load_factor = n / m\` (items / buckets)
- Keep < 0.7 for good performance
- Resize and rehash when exceeded

## Perfect Hashing
When keys are known in advance, can achieve O(1) worst case.

## Applications
- Database indexing
- Caching (LRU cache)
- Deduplication
- Symbol tables in compilers
        `,
        memoryOptimization: 'Trade-off between space (larger table) and collision rate.',
        systemDesignImplications: 'Distributed hash tables (DHT) power systems like BitTorrent and Cassandra.',
        codeSnippets: [
          {
            language: 'python',
            code: `from collections import OrderedDict

class LRUCache:
    """LRU Cache using hash table + ordered dict - O(1) operations"""
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key):
        """Get value and mark as recently used"""
        if key not in self.cache:
            return -1
        # Move to end (most recent)
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        """Put key-value, evict LRU if needed"""
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            # Remove first item (least recent)
            self.cache.popitem(last=False)

# Test
lru = LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
print(lru.get(1))  # 1
lru.put(3, 3)  # Evicts key 2
print(lru.get(2))  # -1 (not found)`,
            explanation: 'Python LRU Cache using OrderedDict for O(1) get/put operations',
          },
          {
            language: 'javascript',
            code: `class LRUCache {
    // LRU Cache using Map - O(1) operations
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    get(key) {
        // Get value and mark as recently used
        if (!this.cache.has(key)) return -1;
        
        const value = this.cache.get(key);
        // Move to end (most recent)
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    
    put(key, value) {
        // Put key-value, evict LRU if needed
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        
        if (this.cache.size() > this.capacity) {
            // Remove first item (least recent)
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}

// Test
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1));  // 1
lru.put(3, 3);  // Evicts key 2
console.log(lru.get(2));  // -1 (not found)`,
            explanation: 'JavaScript LRU Cache using Map which maintains insertion order',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <list>
#include <unordered_map>
using namespace std;

// LRU Cache using hash table + doubly linked list - O(1) operations
class LRUCache {
    int capacity;
    list<pair<int, int>> cache;  // Doubly linked list
    unordered_map<int, list<pair<int, int>>::iterator> map;
    
public:
    LRUCache(int capacity) : capacity(capacity) {}
    
    int get(int key) {
        // Get value and mark as recently used
        if (map.find(key) == map.end()) return -1;
        
        // Move to front (most recent)
        cache.splice(cache.begin(), cache, map[key]);
        return map[key]->second;
    }
    
    void put(int key, int value) {
        // Put key-value, evict LRU if needed
        if (map.find(key) != map.end()) {
            cache.erase(map[key]);
        } else if (cache.size() == capacity) {
            // Remove last item (least recent)
            int old_key = cache.back().first;
            cache.pop_back();
            map.erase(old_key);
        }
        
        cache.push_front({key, value});
        map[key] = cache.begin();
    }
};

int main() {
    LRUCache lru(2);
    lru.put(1, 1);
    lru.put(2, 2);
    cout << lru.get(1) << endl;  // 1
    lru.put(3, 3);  // Evicts key 2
    cout << lru.get(2) << endl;  // -1 (not found)
    return 0;
}`,
            explanation: 'C++ LRU Cache using list + unordered_map for O(1) operations',
          },
          {
            language: 'java',
            code: `import java.util.*;

// LRU Cache using LinkedHashMap - O(1) operations
class LRUCache extends LinkedHashMap<Integer, Integer> {
    private int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);  // accessOrder = true
        this.capacity = capacity;
    }
    
    public int get(int key) {
        // Get value and mark as recently used
        return super.getOrDefault(key, -1);
    }
    
    public void put(int key, int value) {
        // Put key-value, evict LRU if needed
        super.put(key, value);
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        // Remove oldest when size exceeds capacity
        return size() > capacity;
    }
    
    public static void main(String[] args) {
        LRUCache lru = new LRUCache(2);
        lru.put(1, 1);
        lru.put(2, 2);
        System.out.println(lru.get(1));  // 1
        lru.put(3, 3);  // Evicts key 2
        System.out.println(lru.get(2));  // -1 (not found)
    }
}`,
            explanation: 'Java LRU Cache using LinkedHashMap with access-order mode for automatic LRU',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'array', params: { visualization: 'hash-table' } },
      playgroundInitialCode: {
        python: `# Implement a simple hash table
class HashTable:
    def __init__(self):
        self.table = [None] * 10
    
    def insert(self, key, value):
        # Your code here
        pass

ht = HashTable()
ht.insert("name", "Alice")`,
        javascript: `class HashTable {
    constructor() {
        this.table = new Array(10);
    }
    
    insert(key, value) {
        // Your code here
    }
}

const ht = new HashTable();
ht.insert("name", "Alice");`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class HashTable {
    vector<pair<string, string>> table[10];
public:
    void insert(string key, string value) {
        // Your code here
    }
};

int main() {
    HashTable ht;
    ht.insert("name", "Alice");
    return 0;
}`,
        java: `import java.util.*;

class HashTable {
    private List<List<Pair>> table;
    
    public HashTable() {
        table = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            table.add(new ArrayList<>());
        }
    }
    
    public void insert(String key, String value) {
        // Your code here
    }
}`,
      },
    },
  },
  {
    _id: '6',
    meta: {
      title: 'Introduction to Neural Networks',
      slug: 'neural-networks-intro',
      category: 'AI',
      tags: ['machine-learning', 'deep-learning', 'ai'],
      estimatedTime: 45,
    },
    content: {
      beginner: {
        markdownText: `
# Neural Networks - Teaching Computers to Learn

Imagine teaching a child to recognize cats. You show them many pictures, and they learn the patterns. Neural networks work the same way!

## What is a Neural Network?
A computer system inspired by the human brain, made of connected "neurons" that learn from examples.

## Basic Structure
1. **Input Layer:** Receives data (like pixels of an image)
2. **Hidden Layers:** Process and find patterns
3. **Output Layer:** Makes predictions
        `,
        analogy: "It's like a team of workers passing information down a line, each adding their expertise until you get the final answer!",
        codeSnippets: [
          {
            language: 'python',
            code: `import numpy as np

# Simple neuron
def neuron(inputs, weights, bias):
    # Weighted sum
    total = np.dot(inputs, weights) + bias
    # Activation (sigmoid)
    return 1 / (1 + np.exp(-total))

# Example
inputs = np.array([1.0, 2.0, 3.0])
weights = np.array([0.5, -0.2, 0.1])
bias = 0.5

output = neuron(inputs, weights, bias)
print(f"Output: {output}")`,
          },
        ],
      },
      intermediate: {
        markdownText: `
# Neural Networks - Training Process

## Forward Propagation
Data flows through network to make prediction.

## Backpropagation
Calculate error and adjust weights to improve.

## Key Concepts
- **Loss Function:** Measures how wrong predictions are
- **Gradient Descent:** Method to minimize loss
- **Learning Rate:** How big steps to take when adjusting

## Activation Functions
- Sigmoid: 0 to 1
- ReLU: max(0, x)
- Tanh: -1 to 1
        `,
        timeComplexityAnalysis: 'Training is O(n * m * e) where n=samples, m=parameters, e=epochs.',
        codeSnippets: [
          {
            language: 'python',
            code: `import numpy as np

class SimpleNN:
    def __init__(self, input_size, hidden_size, output_size):
        self.W1 = np.random.randn(input_size, hidden_size)
        self.W2 = np.random.randn(hidden_size, output_size)
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-x))
    
    def forward(self, X):
        self.z1 = np.dot(X, self.W1)
        self.a1 = self.sigmoid(self.z1)
        self.z2 = np.dot(self.a1, self.W2)
        self.a2 = self.sigmoid(self.z2)
        return self.a2

# Create network
nn = SimpleNN(3, 4, 1)
X = np.array([[1, 2, 3]])
output = nn.forward(X)
print(f"Prediction: {output}")`,
          },
        ],
      },
      expert: {
        markdownText: `
# Neural Networks - Advanced Architecture

## Modern Architectures
- **CNNs:** Convolutional Neural Networks (images)
- **RNNs:** Recurrent Neural Networks (sequences)
- **Transformers:** Attention-based (NLP)

## Optimization Techniques
- Adam optimizer
- Batch normalization
- Dropout (regularization)
- Learning rate scheduling

## Challenges
- Vanishing/exploding gradients
- Overfitting
- Computational cost
        `,
        memoryOptimization: 'Use mixed precision training, gradient checkpointing for large models.',
        systemDesignImplications: 'Distributed training across GPUs/TPUs. Model serving with TensorFlow Serving or ONNX.',
        codeSnippets: [
          {
            language: 'python',
            code: `import torch
import torch.nn as nn

class DeepNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Linear(784, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(128, 10),
            nn.Softmax(dim=1)
        )
    
    def forward(self, x):
        return self.layers(x)

# Training loop
model = DeepNN()
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# for epoch in range(epochs):
#     optimizer.zero_grad()
#     outputs = model(inputs)
#     loss = criterion(outputs, labels)
#     loss.backward()
#     optimizer.step()`,
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'graph', params: { structure: 'neural-network' } },
      playgroundInitialCode: {
        python: `import numpy as np

# Build a simple neural network
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Your code here
`,
        javascript: `// Build a simple neural network
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

// Your code here
`,
        cpp: `#include <iostream>
#include <cmath>
using namespace std;

double sigmoid(double x) {
    return 1.0 / (1.0 + exp(-x));
}

int main() {
    // Your code here
    return 0;
}`,
        java: `public class NeuralNetwork {
    public static double sigmoid(double x) {
        return 1.0 / (1.0 + Math.exp(-x));
    }
    
    public static void main(String[] args) {
        // Your code here
    }
}`,
      },
    },
  },
  {
    _id: '7',
    meta: {
      title: 'Stacks',
      slug: 'stacks',
      category: 'DSA',
      tags: ['data-structures', 'LIFO', 'linear'],
      estimatedTime: 30,
    },
    content: {
      beginner: {
        markdownText: `
# Stacks - Last In, First Out! 📚

A stack is a linear data structure that follows the **LIFO (Last In, First Out)** principle. Think of a stack of plates - you can only add or remove plates from the top!

## What is a Stack?

A stack is a collection of elements where insertions and deletions occur at one end called the **top**. The last element added is the first one to be removed.

## Key Features

- **LIFO/FILO**: Last element in is first out
- **Top**: The accessible end for push/pop operations
- **Types**: Can be fixed or dynamic size
- **Implementation**: Using arrays or linked lists

## Basic Operations

1. **Push**: Add item to top - O(1)
2. **Pop**: Remove item from top - O(1)
3. **Peek/Top**: View top element without removing - O(1)
4. **isEmpty**: Check if stack is empty - O(1)
5. **Size**: Get number of elements - O(1)

## Real-World Examples

- Browser back button (page history)
- Undo/Redo in text editors
- Function call stack in programming
- Expression evaluation
- Backtracking algorithms
        `,
        analogy: "A stack is like a stack of books - you can only take the top book off, and you add new books on top! You can't pull a book from the middle without removing all the books above it first.",
        codeSnippets: [
          {
            language: 'python',
            code: `# Stack implementation using list
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """Add item to top of stack"""
        self.items.append(item)
        print(f"Pushed: {item}")
    
    def pop(self):
        """Remove and return top item"""
        if not self.is_empty():
            item = self.items.pop()
            print(f"Popped: {item}")
            return item
        print("Stack is empty!")
        return None
    
    def peek(self):
        """View top item without removing"""
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        """Check if stack is empty"""
        return len(self.items) == 0
    
    def size(self):
        """Get number of elements"""
        return len(self.items)

# Usage example
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(f"Top: {stack.peek()}")  # 3
print(f"Size: {stack.size()}")  # 3
stack.pop()  # Removes 3
print(f"New top: {stack.peek()}")  # 2`,
            explanation: 'Python list provides built-in stack operations with append() and pop()',
          },
          {
            language: 'javascript',
            code: `// Stack implementation using array
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        // Add item to top of stack
        this.items.push(item);
        console.log(\`Pushed: \${item}\`);
    }
    
    pop() {
        // Remove and return top item
        if (!this.isEmpty()) {
            const item = this.items.pop();
            console.log(\`Popped: \${item}\`);
            return item;
        }
        console.log("Stack is empty!");
        return null;
    }
    
    peek() {
        // View top item without removing
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        return null;
    }
    
    isEmpty() {
        // Check if stack is empty
        return this.items.length === 0;
    }
    
    size() {
        // Get number of elements
        return this.items.length;
    }
}

// Usage example
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(\`Top: \${stack.peek()}\`);  // 3
console.log(\`Size: \${stack.size()}\`);  // 3
stack.pop();  // Removes 3
console.log(\`New top: \${stack.peek()}\`);  // 2`,
            explanation: 'JavaScript array methods push() and pop() provide natural stack operations',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <stack>
#include <vector>
using namespace std;

// Stack implementation using vector
class Stack {
    vector<int> items;
    
public:
    // Add item to top of stack
    void push(int item) {
        items.push_back(item);
        cout << "Pushed: " << item << endl;
    }
    
    // Remove and return top item
    int pop() {
        if (!isEmpty()) {
            int item = items.back();
            items.pop_back();
            cout << "Popped: " << item << endl;
            return item;
        }
        cout << "Stack is empty!" << endl;
        return -1;
    }
    
    // View top item without removing
    int peek() {
        if (!isEmpty()) {
            return items.back();
        }
        return -1;
    }
    
    // Check if stack is empty
    bool isEmpty() {
        return items.empty();
    }
    
    // Get number of elements
    int size() {
        return items.size();
    }
};

int main() {
    Stack stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    cout << "Top: " << stack.peek() << endl;  // 3
    cout << "Size: " << stack.size() << endl;  // 3
    stack.pop();  // Removes 3
    cout << "New top: " << stack.peek() << endl;  // 2
    return 0;
}`,
            explanation: 'C++ STL provides stack container, or use vector with push_back/pop_back',
          },
          {
            language: 'java',
            code: `import java.util.ArrayList;

// Stack implementation using ArrayList
class Stack {
    private ArrayList<Integer> items;
    
    public Stack() {
        items = new ArrayList<>();
    }
    
    // Add item to top of stack
    public void push(int item) {
        items.add(item);
        System.out.println("Pushed: " + item);
    }
    
    // Remove and return top item
    public Integer pop() {
        if (!isEmpty()) {
            int item = items.remove(items.size() - 1);
            System.out.println("Popped: " + item);
            return item;
        }
        System.out.println("Stack is empty!");
        return null;
    }
    
    // View top item without removing
    public Integer peek() {
        if (!isEmpty()) {
            return items.get(items.size() - 1);
        }
        return null;
    }
    
    // Check if stack is empty
    public boolean isEmpty() {
        return items.isEmpty();
    }
    
    // Get number of elements
    public int size() {
        return items.size();
    }
    
    public static void main(String[] args) {
        Stack stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println("Top: " + stack.peek());  // 3
        System.out.println("Size: " + stack.size());  // 3
        stack.pop();  // Removes 3
        System.out.println("New top: " + stack.peek());  // 2
    }
}`,
            explanation: 'Java provides Stack class in util package, or use ArrayList for custom implementation',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Stacks - Balanced Parentheses Checker 🔍

Now let's solve a classic problem: checking if parentheses, brackets, and braces are balanced in an expression!

## Problem: Balanced Parentheses

Given a string containing characters like \`()\`, \`[]\`, \`{}\`, determine if they are properly balanced.

**Examples:**
- \`"({[]})"\` → Valid ✅
- \`"({[}])"\` → Invalid ❌
- \`"((()))"\` → Valid ✅
- \`"((())"\` → Invalid ❌

## Algorithm Strategy

1. **Use a stack** to track opening brackets
2. **Push** every opening bracket onto stack
3. **Pop** when we find a closing bracket
4. **Match** the popped bracket with current closing bracket
5. **Check** if stack is empty at the end

## Time & Space Complexity

| Operation | Time | Space |
|-----------|------|-------|
| Traverse string | O(n) | O(n) |
| Push/Pop | O(1) | - |
| **Total** | **O(n)** | **O(n)** |

## Real-World Applications

- **Code editors**: Syntax validation
- **Compilers**: Expression parsing
- **HTML/XML parsers**: Tag matching
- **Mathematical expressions**: Validation
        `,
        timeComplexityAnalysis: 'We traverse the string once (O(n)) and each push/pop operation is O(1). In worst case, all characters are opening brackets, so space is O(n).',
        codeSnippets: [
          {
            language: 'python',
            code: `def is_balanced(expression):
    """
    Check if parentheses/brackets/braces are balanced
    Time: O(n), Space: O(n)
    """
    stack = []
    # Map opening brackets to their closing pairs
    pairs = {'(': ')', '[': ']', '{': '}'}
    
    for char in expression:
        # If opening bracket, push to stack
        if char in pairs:
            stack.append(char)
        # If closing bracket, check match
        elif char in pairs.values():
            # Stack empty or mismatch = invalid
            if not stack or pairs[stack.pop()] != char:
                return False
    
    # Valid only if stack is empty (all matched)
    return len(stack) == 0

# Test cases
print(is_balanced("({[]})"))      # True
print(is_balanced("({[}])"))      # False
print(is_balanced("((()))"))      # True
print(is_balanced("((())"))       # False
print(is_balanced(""))            # True (empty is valid)
print(is_balanced("{[()]}"))      # True

# With other characters
print(is_balanced("a(b[c]d)e"))   # True
print(is_balanced("if (x > 0) { return [1, 2]; }"))  # True`,
            explanation: 'Python list as stack - append() for push, pop() for pop. Dictionary maps opening to closing brackets.',
          },
          {
            language: 'javascript',
            code: `function isBalanced(expression) {
    /**
     * Check if parentheses/brackets/braces are balanced
     * Time: O(n), Space: O(n)
     */
    const stack = [];
    // Map opening brackets to their closing pairs
    const pairs = {'(': ')', '[': ']', '{': '}'};
    
    for (const char of expression) {
        // If opening bracket, push to stack
        if (char in pairs) {
            stack.push(char);
        }
        // If closing bracket, check match
        else if (Object.values(pairs).includes(char)) {
            // Stack empty or mismatch = invalid
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    // Valid only if stack is empty (all matched)
    return stack.length === 0;
}

// Test cases
console.log(isBalanced("({[]})"));      // true
console.log(isBalanced("({[}])"));      // false
console.log(isBalanced("((()))"));      // true
console.log(isBalanced("((())"));       // false
console.log(isBalanced(""));            // true (empty is valid)
console.log(isBalanced("{[()]}"));      // true

// With other characters
console.log(isBalanced("a(b[c]d)e"));   // true
console.log(isBalanced("if (x > 0) { return [1, 2]; }"));  // true`,
            explanation: 'JavaScript array methods - push() and pop() provide stack operations. Object for bracket mapping.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <stack>
#include <unordered_map>
#include <string>
using namespace std;

bool isBalanced(string expression) {
    /**
     * Check if parentheses/brackets/braces are balanced
     * Time: O(n), Space: O(n)
     */
    stack<char> s;
    // Map opening brackets to their closing pairs
    unordered_map<char, char> pairs = {
        {'(', ')'}, {'[', ']'}, {'{', '}'}
    };
    
    for (char c : expression) {
        // If opening bracket, push to stack
        if (pairs.count(c)) {
            s.push(c);
        }
        // If closing bracket, check match
        else if (c == ')' || c == ']' || c == '}') {
            // Stack empty or mismatch = invalid
            if (s.empty() || pairs[s.top()] != c) {
                return false;
            }
            s.pop();
        }
    }
    
    // Valid only if stack is empty (all matched)
    return s.empty();
}

int main() {
    // Test cases
    cout << boolalpha;  // Print true/false instead of 1/0
    cout << isBalanced("({[]})") << endl;      // true
    cout << isBalanced("({[}])") << endl;      // false
    cout << isBalanced("((()))") << endl;      // true
    cout << isBalanced("((())") << endl;       // false
    cout << isBalanced("") << endl;            // true
    cout << isBalanced("{[()]}") << endl;      // true
    
    // With other characters
    cout << isBalanced("a(b[c]d)e") << endl;   // true
    cout << isBalanced("if (x > 0) { return [1, 2]; }") << endl;  // true
    
    return 0;
}`,
            explanation: 'C++ STL stack with unordered_map for O(1) bracket lookup. Uses top() to peek and pop() to remove.',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class BalancedParentheses {
    /**
     * Check if parentheses/brackets/braces are balanced
     * Time: O(n), Space: O(n)
     */
    public static boolean isBalanced(String expression) {
        Stack<Character> stack = new Stack<>();
        // Map opening brackets to their closing pairs
        Map<Character, Character> pairs = new HashMap<>();
        pairs.put('(', ')');
        pairs.put('[', ']');
        pairs.put('{', '}');
        
        for (char c : expression.toCharArray()) {
            // If opening bracket, push to stack
            if (pairs.containsKey(c)) {
                stack.push(c);
            }
            // If closing bracket, check match
            else if (pairs.containsValue(c)) {
                // Stack empty or mismatch = invalid
                if (stack.isEmpty() || pairs.get(stack.pop()) != c) {
                    return false;
                }
            }
        }
        
        // Valid only if stack is empty (all matched)
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        // Test cases
        System.out.println(isBalanced("({[]})"));      // true
        System.out.println(isBalanced("({[}])"));      // false
        System.out.println(isBalanced("((()))"));      // true
        System.out.println(isBalanced("((())"));       // false
        System.out.println(isBalanced(""));            // true
        System.out.println(isBalanced("{[()]}"));      // true
        
        // With other characters
        System.out.println(isBalanced("a(b[c]d)e"));   // true
        System.out.println(isBalanced("if (x > 0) { return [1, 2]; }"));  // true
    }
}`,
            explanation: 'Java Stack class with HashMap for bracket mapping. Uses push(), pop(), and isEmpty() methods.',
          },
        ],
      },
      expert: {
        markdownText: `
# Stacks - Min/Max Stack Design 🎯

Design a stack that supports push, pop, top, and retrieving the minimum/maximum element in **constant time O(1)**!

## Problem: Min Stack

Implement a stack with these operations, all in O(1) time:
- \`push(x)\` - Push element x onto stack
- \`pop()\` - Remove element on top
- \`top()\` - Get the top element
- \`getMin()\` - Retrieve the minimum element

## The Challenge

Normal stack operations are O(1), but finding minimum typically requires O(n) traversal. How do we make it O(1)?

## Solution Strategy

**Use TWO stacks:**
1. **Main stack**: Stores all elements
2. **Min stack**: Stores minimum values

**Key Insight**: When we push a value ≤ current min, push it to both stacks!

## Algorithm Steps

1. **Push**: Add to main stack. If value ≤ min stack top, add to min stack too
2. **Pop**: Remove from main. If it equals min stack top, pop from min stack too
3. **Top**: Return main stack top
4. **GetMin**: Return min stack top

## Complexity Analysis

| Operation | Time | Space |
|-----------|------|-------|
| Push | O(1) | O(n) worst case |
| Pop | O(1) | - |
| Top | O(1) | - |
| GetMin | O(1) | - |

## Real-World Applications

- **Stock trading**: Track minimum price in sliding window
- **Monitoring systems**: Real-time min/max metrics
- **Game development**: Score tracking with best/worst
- **Database query optimization**: Min/max aggregates
        `,
        memoryOptimization: 'Space optimization: Store only differences from min in main stack, or use single stack with pairs (value, currentMin).',
        systemDesignImplications: 'Used in time-series databases for efficient range queries, monitoring dashboards for real-time metrics, and game leaderboards.',
        codeSnippets: [
          {
            language: 'python',
            code: `class MinStack:
    """
    Stack with O(1) min retrieval
    Uses two stacks: main + min tracker
    """
    def __init__(self):
        self.stack = []      # Main stack
        self.min_stack = []  # Tracks minimums
    
    def push(self, val):
        """Push value onto stack - O(1)"""
        self.stack.append(val)
        # Push to min_stack if it's new minimum
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    
    def pop(self):
        """Remove top element - O(1)"""
        if not self.stack:
            return None
        val = self.stack.pop()
        # If popped value was minimum, remove from min_stack
        if val == self.min_stack[-1]:
            self.min_stack.pop()
        return val
    
    def top(self):
        """Get top element - O(1)"""
        return self.stack[-1] if self.stack else None
    
    def get_min(self):
        """Get minimum element - O(1)"""
        return self.min_stack[-1] if self.min_stack else None

# Test the MinStack
min_stack = MinStack()
min_stack.push(5)
min_stack.push(2)
min_stack.push(7)
min_stack.push(1)

print(f"Top: {min_stack.top()}")        # 1
print(f"Min: {min_stack.get_min()}")    # 1

min_stack.pop()  # Remove 1
print(f"Min after pop: {min_stack.get_min()}")  # 2

min_stack.pop()  # Remove 7
print(f"Min after pop: {min_stack.get_min()}")  # 2`,
            explanation: 'Python implementation using two lists. min_stack tracks minimum at each level for O(1) retrieval.',
          },
          {
            language: 'javascript',
            code: `class MinStack {
    /**
     * Stack with O(1) min retrieval
     * Uses two stacks: main + min tracker
     */
    constructor() {
        this.stack = [];      // Main stack
        this.minStack = [];   // Tracks minimums
    }
    
    push(val) {
        // Push value onto stack - O(1)
        this.stack.push(val);
        // Push to minStack if it's new minimum
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }
    
    pop() {
        // Remove top element - O(1)
        if (this.stack.length === 0) return null;
        
        const val = this.stack.pop();
        // If popped value was minimum, remove from minStack
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return val;
    }
    
    top() {
        // Get top element - O(1)
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
    }
    
    getMin() {
        // Get minimum element - O(1)
        return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : null;
    }
}

// Test the MinStack
const minStack = new MinStack();
minStack.push(5);
minStack.push(2);
minStack.push(7);
minStack.push(1);

console.log(\`Top: \${minStack.top()}\`);        // 1
console.log(\`Min: \${minStack.getMin()}\`);    // 1

minStack.pop();  // Remove 1
console.log(\`Min after pop: \${minStack.getMin()}\`);  // 2

minStack.pop();  // Remove 7
console.log(\`Min after pop: \${minStack.getMin()}\`);  // 2`,
            explanation: 'JavaScript implementation with two arrays. Maintains sync between main stack and minimum tracker.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <stack>
using namespace std;

/**
 * Stack with O(1) min retrieval
 * Uses two stacks: main + min tracker
 */
class MinStack {
    stack<int> s;         // Main stack
    stack<int> minStack;  // Tracks minimums
    
public:
    // Push value onto stack - O(1)
    void push(int val) {
        s.push(val);
        // Push to minStack if it's new minimum
        if (minStack.empty() || val <= minStack.top()) {
            minStack.push(val);
        }
    }
    
    // Remove top element - O(1)
    void pop() {
        if (s.empty()) return;
        
        int val = s.top();
        s.pop();
        // If popped value was minimum, remove from minStack
        if (val == minStack.top()) {
            minStack.pop();
        }
    }
    
    // Get top element - O(1)
    int top() {
        return s.empty() ? -1 : s.top();
    }
    
    // Get minimum element - O(1)
    int getMin() {
        return minStack.empty() ? -1 : minStack.top();
    }
};

int main() {
    MinStack minStack;
    minStack.push(5);
    minStack.push(2);
    minStack.push(7);
    minStack.push(1);
    
    cout << "Top: " << minStack.top() << endl;        // 1
    cout << "Min: " << minStack.getMin() << endl;     // 1
    
    minStack.pop();  // Remove 1
    cout << "Min after pop: " << minStack.getMin() << endl;  // 2
    
    minStack.pop();  // Remove 7
    cout << "Min after pop: " << minStack.getMin() << endl;  // 2
    
    return 0;
}`,
            explanation: 'C++ STL stack implementation. Uses two stacks for O(1) operations. top() peeks without removing.',
          },
          {
            language: 'java',
            code: `import java.util.Stack;

/**
 * Stack with O(1) min retrieval
 * Uses two stacks: main + min tracker
 */
class MinStack {
    private Stack<Integer> stack;      // Main stack
    private Stack<Integer> minStack;   // Tracks minimums
    
    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
    // Push value onto stack - O(1)
    public void push(int val) {
        stack.push(val);
        // Push to minStack if it's new minimum
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }
    
    // Remove top element - O(1)
    public void pop() {
        if (stack.isEmpty()) return;
        
        int val = stack.pop();
        // If popped value was minimum, remove from minStack
        if (val == minStack.peek()) {
            minStack.pop();
        }
    }
    
    // Get top element - O(1)
    public int top() {
        return stack.isEmpty() ? -1 : stack.peek();
    }
    
    // Get minimum element - O(1)
    public int getMin() {
        return minStack.isEmpty() ? -1 : minStack.peek();
    }
    
    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(5);
        minStack.push(2);
        minStack.push(7);
        minStack.push(1);
        
        System.out.println("Top: " + minStack.top());        // 1
        System.out.println("Min: " + minStack.getMin());     // 1
        
        minStack.pop();  // Remove 1
        System.out.println("Min after pop: " + minStack.getMin());  // 2
        
        minStack.pop();  // Remove 7
        System.out.println("Min after pop: " + minStack.getMin());  // 2
    }
}`,
            explanation: 'Java Stack implementation with two stacks. peek() views top without removing, maintaining O(1) for all operations.',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'stack', params: { operations: ['push', 'pop', 'peek'] } },
      playgroundInitialCode: {
        python: `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        # Your code here
        pass
    
    def pop(self):
        # Your code here
        pass

stack = Stack()
stack.push(1)
stack.push(2)
print(stack.pop())`,
        javascript: `class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        // Your code here
    }
    
    pop() {
        // Your code here
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());`,
        cpp: `#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> s;
    s.push(1);
    s.push(2);
    cout << s.top() << endl;
    s.pop();
    return 0;
}`,
        java: `import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        System.out.println(stack.pop());
    }
}`,
      },
    },
  },
  {
    _id: '8',
    meta: {
      title: 'Queues',
      slug: 'queues',
      category: 'DSA',
      tags: ['data-structures', 'FIFO', 'linear'],
      estimatedTime: 30,
    },
    content: {
      beginner: {
        markdownText: `
# Queues - First In, First Out! 🎫

A queue is a linear data structure that follows the **FIFO (First In, First Out)** principle. Think of a line at a ticket counter - the first person in line is the first to be served!

## What is a Queue?

A queue is a collection where elements are added at one end (rear) and removed from the other end (front). The first element added is the first one to be removed.

## Key Features

- **FIFO**: First element in is first out
- **Front**: Where elements are removed
- **Rear**: Where elements are added
- **Types**: Simple, Circular, Priority, Deque
- **Implementation**: Using arrays or linked lists

## Basic Operations

1. **Enqueue**: Add item to rear - O(1)
2. **Dequeue**: Remove item from front - O(1)
3. **Front/Peek**: View front element without removing - O(1)
4. **isEmpty**: Check if queue is empty - O(1)
5. **Size**: Get number of elements - O(1)

## Real-World Examples

- Customer service lines
- Print job scheduling
- Call center systems
- Breadth-First Search (BFS) in graphs
- Task scheduling in operating systems
- Message queues in distributed systems
        `,
        analogy: "A queue is like waiting in line at a coffee shop - first come, first served! You join at the back of the line and leave from the front. No cutting in line allowed!",
        codeSnippets: [
          {
            language: 'python',
            code: `# Queue implementation using deque (double-ended queue)
from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        """Add item to rear of queue"""
        self.items.append(item)
        print(f"Enqueued: {item}")
    
    def dequeue(self):
        """Remove and return front item"""
        if not self.is_empty():
            item = self.items.popleft()
            print(f"Dequeued: {item}")
            return item
        print("Queue is empty!")
        return None
    
    def front(self):
        """View front item without removing"""
        if not self.is_empty():
            return self.items[0]
        return None
    
    def is_empty(self):
        """Check if queue is empty"""
        return len(self.items) == 0
    
    def size(self):
        """Get number of elements"""
        return len(self.items)

# Usage example
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(f"Front: {queue.front()}")  # 1
print(f"Size: {queue.size()}")    # 3
queue.dequeue()  # Removes 1
print(f"New front: {queue.front()}")  # 2`,
            explanation: 'Python deque (double-ended queue) provides O(1) operations for both ends - append() adds to rear, popleft() removes from front',
          },
          {
            language: 'javascript',
            code: `// Queue implementation using array
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        // Add item to rear of queue
        this.items.push(item);
        console.log(\`Enqueued: \${item}\`);
    }
    
    dequeue() {
        // Remove and return front item
        if (!this.isEmpty()) {
            const item = this.items.shift();
            console.log(\`Dequeued: \${item}\`);
            return item;
        }
        console.log("Queue is empty!");
        return null;
    }
    
    front() {
        // View front item without removing
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }
    
    isEmpty() {
        // Check if queue is empty
        return this.items.length === 0;
    }
    
    size() {
        // Get number of elements
        return this.items.length;
    }
}

// Usage example
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(\`Front: \${queue.front()}\`);  // 1
console.log(\`Size: \${queue.size()}\`);    // 3
queue.dequeue();  // Removes 1
console.log(\`New front: \${queue.front()}\`);  // 2`,
            explanation: 'JavaScript array with push() to add at rear and shift() to remove from front. Note: shift() is O(n), but simple for learning',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <queue>
using namespace std;

// Queue implementation using STL queue
class QueueDemo {
    queue<int> items;
    
public:
    // Add item to rear of queue
    void enqueue(int item) {
        items.push(item);
        cout << "Enqueued: " << item << endl;
    }
    
    // Remove and return front item
    int dequeue() {
        if (!isEmpty()) {
            int item = items.front();
            items.pop();
            cout << "Dequeued: " << item << endl;
            return item;
        }
        cout << "Queue is empty!" << endl;
        return -1;
    }
    
    // View front item without removing
    int front() {
        if (!isEmpty()) {
            return items.front();
        }
        return -1;
    }
    
    // Check if queue is empty
    bool isEmpty() {
        return items.empty();
    }
    
    // Get number of elements
    int size() {
        return items.size();
    }
};

int main() {
    QueueDemo queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    cout << "Front: " << queue.front() << endl;  // 1
    cout << "Size: " << queue.size() << endl;    // 3
    queue.dequeue();  // Removes 1
    cout << "New front: " << queue.front() << endl;  // 2
    return 0;
}`,
            explanation: 'C++ STL queue provides push() to add, pop() to remove, and front() to peek. All operations are O(1)',
          },
          {
            language: 'java',
            code: `import java.util.LinkedList;
import java.util.Queue;

// Queue implementation using LinkedList
class QueueDemo {
    private Queue<Integer> items;
    
    public QueueDemo() {
        items = new LinkedList<>();
    }
    
    // Add item to rear of queue
    public void enqueue(int item) {
        items.add(item);
        System.out.println("Enqueued: " + item);
    }
    
    // Remove and return front item
    public Integer dequeue() {
        if (!isEmpty()) {
            int item = items.poll();
            System.out.println("Dequeued: " + item);
            return item;
        }
        System.out.println("Queue is empty!");
        return null;
    }
    
    // View front item without removing
    public Integer front() {
        if (!isEmpty()) {
            return items.peek();
        }
        return null;
    }
    
    // Check if queue is empty
    public boolean isEmpty() {
        return items.isEmpty();
    }
    
    // Get number of elements
    public int size() {
        return items.size();
    }
    
    public static void main(String[] args) {
        QueueDemo queue = new QueueDemo();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        System.out.println("Front: " + queue.front());  // 1
        System.out.println("Size: " + queue.size());    // 3
        queue.dequeue();  // Removes 1
        System.out.println("New front: " + queue.front());  // 2
    }
}`,
            explanation: 'Java Queue interface with LinkedList implementation. add() enqueues, poll() dequeues, peek() views front',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Queues - Circular Queue Implementation 🔄

A circular queue is a more efficient queue where the last position connects back to the first, preventing wasted space!

## Problem: Fixed-Size Circular Queue

Implement a circular queue with fixed capacity that efficiently reuses space.

**Operations:**
- \`enqueue(value)\` - Add element (return false if full)
- \`dequeue()\` - Remove element (return null if empty)
- \`front()\` - Get front element
- \`isFull()\` - Check if queue is full
- \`isEmpty()\` - Check if queue is empty

## Why Circular Queue?

**Regular Queue Problem**: After dequeuing, front space is wasted
**Circular Solution**: Use modulo to wrap around and reuse space!

## Algorithm Strategy

1. Use **two pointers**: front and rear
2. Use **modulo (%)** to wrap around: \`(index + 1) % size\`
3. **Full condition**: \`(rear + 1) % size == front\`
4. **Empty condition**: \`front == -1\`

## Time & Space Complexity

| Operation | Time | Space |
|-----------|------|-------|
| Enqueue | O(1) | O(n) |
| Dequeue | O(1) | - |
| Front | O(1) | - |
| isFull/isEmpty | O(1) | - |

## Real-World Applications

- **CPU scheduling**: Round-robin algorithm
- **Memory management**: Buffer pools
- **Traffic systems**: Traffic light rotation
- **Gaming**: Turn-based game systems
        `,
        timeComplexityAnalysis: 'All operations are O(1) because we use direct array access with modulo arithmetic. Space is O(n) for the fixed-size array.',
        codeSnippets: [
          {
            language: 'python',
            code: `class CircularQueue:
    """
    Circular Queue with fixed capacity
    Time: O(1) for all operations, Space: O(k)
    """
    def __init__(self, k):
        self.queue = [None] * k
        self.size = k
        self.front = -1
        self.rear = -1
    
    def enqueue(self, value):
        """Add element to rear - O(1)"""
        # Check if queue is full
        if self.is_full():
            print("Queue is full!")
            return False
        
        # First element case
        if self.front == -1:
            self.front = 0
        
        # Move rear circularly
        self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = value
        print(f"Enqueued: {value}")
        return True
    
    def dequeue(self):
        """Remove element from front - O(1)"""
        if self.is_empty():
            print("Queue is empty!")
            return None
        
        value = self.queue[self.front]
        
        # Last element case - reset queue
        if self.front == self.rear:
            self.front = -1
            self.rear = -1
        else:
            # Move front circularly
            self.front = (self.front + 1) % self.size
        
        print(f"Dequeued: {value}")
        return value
    
    def get_front(self):
        """Get front element - O(1)"""
        if self.is_empty():
            return None
        return self.queue[self.front]
    
    def is_empty(self):
        """Check if empty - O(1)"""
        return self.front == -1
    
    def is_full(self):
        """Check if full - O(1)"""
        return (self.rear + 1) % self.size == self.front

# Test circular queue
cq = CircularQueue(3)
cq.enqueue(1)  # [1, _, _]
cq.enqueue(2)  # [1, 2, _]
cq.enqueue(3)  # [1, 2, 3] - Full!
cq.enqueue(4)  # Queue is full!
print(f"Front: {cq.get_front()}")  # 1
cq.dequeue()   # [_, 2, 3]
cq.enqueue(4)  # [4, 2, 3] - Wrapped around!
print(f"Front: {cq.get_front()}")  # 2`,
            explanation: 'Python circular queue using modulo (%) to wrap indices. Tracks front and rear pointers for O(1) operations.',
          },
          {
            language: 'javascript',
            code: `class CircularQueue {
    /**
     * Circular Queue with fixed capacity
     * Time: O(1) for all operations, Space: O(k)
     */
    constructor(k) {
        this.queue = new Array(k).fill(null);
        this.size = k;
        this.front = -1;
        this.rear = -1;
    }
    
    enqueue(value) {
        // Add element to rear - O(1)
        if (this.isFull()) {
            console.log("Queue is full!");
            return false;
        }
        
        // First element case
        if (this.front === -1) {
            this.front = 0;
        }
        
        // Move rear circularly
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        console.log(\`Enqueued: \${value}\`);
        return true;
    }
    
    dequeue() {
        // Remove element from front - O(1)
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        
        const value = this.queue[this.front];
        
        // Last element case - reset queue
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            // Move front circularly
            this.front = (this.front + 1) % this.size;
        }
        
        console.log(\`Dequeued: \${value}\`);
        return value;
    }
    
    getFront() {
        // Get front element - O(1)
        if (this.isEmpty()) return null;
        return this.queue[this.front];
    }
    
    isEmpty() {
        // Check if empty - O(1)
        return this.front === -1;
    }
    
    isFull() {
        // Check if full - O(1)
        return (this.rear + 1) % this.size === this.front;
    }
}

// Test circular queue
const cq = new CircularQueue(3);
cq.enqueue(1);  // [1, _, _]
cq.enqueue(2);  // [1, 2, _]
cq.enqueue(3);  // [1, 2, 3] - Full!
cq.enqueue(4);  // Queue is full!
console.log(\`Front: \${cq.getFront()}\`);  // 1
cq.dequeue();   // [_, 2, 3]
cq.enqueue(4);  // [4, 2, 3] - Wrapped around!
console.log(\`Front: \${cq.getFront()}\`);  // 2`,
            explanation: 'JavaScript circular queue with modulo arithmetic for wrapping. Efficient space reuse with O(1) operations.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

/**
 * Circular Queue with fixed capacity
 * Time: O(1) for all operations, Space: O(k)
 */
class CircularQueue {
    vector<int> queue;
    int size;
    int front;
    int rear;
    
public:
    CircularQueue(int k) : size(k), front(-1), rear(-1) {
        queue.resize(k);
    }
    
    // Add element to rear - O(1)
    bool enqueue(int value) {
        if (isFull()) {
            cout << "Queue is full!" << endl;
            return false;
        }
        
        // First element case
        if (front == -1) {
            front = 0;
        }
        
        // Move rear circularly
        rear = (rear + 1) % size;
        queue[rear] = value;
        cout << "Enqueued: " << value << endl;
        return true;
    }
    
    // Remove element from front - O(1)
    int dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return -1;
        }
        
        int value = queue[front];
        
        // Last element case - reset queue
        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            // Move front circularly
            front = (front + 1) % size;
        }
        
        cout << "Dequeued: " << value << endl;
        return value;
    }
    
    // Get front element - O(1)
    int getFront() {
        if (isEmpty()) return -1;
        return queue[front];
    }
    
    // Check if empty - O(1)
    bool isEmpty() {
        return front == -1;
    }
    
    // Check if full - O(1)
    bool isFull() {
        return (rear + 1) % size == front;
    }
};

int main() {
    CircularQueue cq(3);
    cq.enqueue(1);  // [1, _, _]
    cq.enqueue(2);  // [1, 2, _]
    cq.enqueue(3);  // [1, 2, 3] - Full!
    cq.enqueue(4);  // Queue is full!
    cout << "Front: " << cq.getFront() << endl;  // 1
    cq.dequeue();   // [_, 2, 3]
    cq.enqueue(4);  // [4, 2, 3] - Wrapped around!
    cout << "Front: " << cq.getFront() << endl;  // 2
    return 0;
}`,
            explanation: 'C++ circular queue using vector and modulo for circular indexing. Efficient memory usage with constant-time operations.',
          },
          {
            language: 'java',
            code: `/**
 * Circular Queue with fixed capacity
 * Time: O(1) for all operations, Space: O(k)
 */
class CircularQueue {
    private int[] queue;
    private int size;
    private int front;
    private int rear;
    
    public CircularQueue(int k) {
        queue = new int[k];
        size = k;
        front = -1;
        rear = -1;
    }
    
    // Add element to rear - O(1)
    public boolean enqueue(int value) {
        if (isFull()) {
            System.out.println("Queue is full!");
            return false;
        }
        
        // First element case
        if (front == -1) {
            front = 0;
        }
        
        // Move rear circularly
        rear = (rear + 1) % size;
        queue[rear] = value;
        System.out.println("Enqueued: " + value);
        return true;
    }
    
    // Remove element from front - O(1)
    public Integer dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return null;
        }
        
        int value = queue[front];
        
        // Last element case - reset queue
        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            // Move front circularly
            front = (front + 1) % size;
        }
        
        System.out.println("Dequeued: " + value);
        return value;
    }
    
    // Get front element - O(1)
    public Integer getFront() {
        if (isEmpty()) return null;
        return queue[front];
    }
    
    // Check if empty - O(1)
    public boolean isEmpty() {
        return front == -1;
    }
    
    // Check if full - O(1)
    public boolean isFull() {
        return (rear + 1) % size == front;
    }
    
    public static void main(String[] args) {
        CircularQueue cq = new CircularQueue(3);
        cq.enqueue(1);  // [1, _, _]
        cq.enqueue(2);  // [1, 2, _]
        cq.enqueue(3);  // [1, 2, 3] - Full!
        cq.enqueue(4);  // Queue is full!
        System.out.println("Front: " + cq.getFront());  // 1
        cq.dequeue();   // [_, 2, 3]
        cq.enqueue(4);  // [4, 2, 3] - Wrapped around!
        System.out.println("Front: " + cq.getFront());  // 2
    }
}`,
            explanation: 'Java circular queue with array and modulo arithmetic. Prevents space wastage with circular wrapping.',
          },
        ],
      },
      expert: {
        markdownText: `
# Queues - Priority Queue (Heap-Based) 🎯

A priority queue where elements are dequeued based on priority, not insertion order. Higher priority elements come out first!

## Problem: Priority Queue

Implement a priority queue that supports:
- \`insert(value, priority)\` - Add element with priority
- \`extractMax()\` - Remove and return highest priority element
- \`peek()\` - View highest priority element
- \`isEmpty()\` - Check if empty

## Why Priority Queue?

**Regular Queue**: FIFO - first in, first out
**Priority Queue**: Elements with higher priority are dequeued first, regardless of insertion order!

## Implementation: Binary Heap

Use a **max heap** (or min heap) for efficient operations:
- **Insert**: Add to end, bubble up - O(log n)
- **Extract Max**: Remove root, bubble down - O(log n)
- **Peek**: View root - O(1)

## Heap Properties

**Max Heap**: Parent ≥ Children
- Root is maximum element
- Array representation: parent at i, children at 2i+1 and 2i+2

## Time & Space Complexity

| Operation | Time | Space |
|-----------|------|-------|
| Insert | O(log n) | O(n) |
| Extract Max | O(log n) | - |
| Peek | O(1) | - |
| Build Heap | O(n) | - |

## Real-World Applications

- **CPU scheduling**: Process priority management
- **Dijkstra's algorithm**: Shortest path finding
- **Huffman coding**: Data compression
- **Event-driven simulation**: Event ordering
- **A* search**: Pathfinding in games/maps
- **Load balancing**: Task distribution by priority
        `,
        memoryOptimization: 'Binary heap uses array representation for O(1) parent/child access. No extra pointers needed unlike tree structures.',
        systemDesignImplications: 'Used in OS schedulers, network routers (QoS), database query optimizers, and real-time systems. Message queues like RabbitMQ support priority.',
        codeSnippets: [
          {
            language: 'python',
            code: `import heapq

class PriorityQueue:
    """
    Priority Queue using min heap (negate for max heap)
    Time: O(log n) insert/extract, O(1) peek
    """
    def __init__(self):
        self.heap = []
    
    def insert(self, value, priority):
        """Insert with priority - O(log n)"""
        # Python heapq is min heap, negate for max heap
        heapq.heappush(self.heap, (-priority, value))
        print(f"Inserted: {value} with priority {priority}")
    
    def extract_max(self):
        """Remove and return highest priority - O(log n)"""
        if self.is_empty():
            print("Queue is empty!")
            return None
        priority, value = heapq.heappop(self.heap)
        print(f"Extracted: {value} (priority {-priority})")
        return value
    
    def peek(self):
        """View highest priority element - O(1)"""
        if self.is_empty():
            return None
        return self.heap[0][1]
    
    def is_empty(self):
        """Check if empty - O(1)"""
        return len(self.heap) == 0
    
    def size(self):
        """Get size - O(1)"""
        return len(self.heap)

# Test priority queue
pq = PriorityQueue()
pq.insert("Low priority task", 1)
pq.insert("High priority task", 10)
pq.insert("Medium priority task", 5)
pq.insert("Critical task", 20)

print(f"\\nPeek: {pq.peek()}")  # Critical task

# Extract in priority order
while not pq.is_empty():
    pq.extract_max()
# Output: Critical (20), High (10), Medium (5), Low (1)`,
            explanation: 'Python heapq module provides min heap. Negate priorities for max heap behavior. O(log n) for insert/extract.',
          },
          {
            language: 'javascript',
            code: `class PriorityQueue {
    /**
     * Priority Queue using array-based max heap
     * Time: O(log n) insert/extract, O(1) peek
     */
    constructor() {
        this.heap = [];
    }
    
    insert(value, priority) {
        // Insert with priority - O(log n)
        this.heap.push({ value, priority });
        this.bubbleUp(this.heap.length - 1);
        console.log(\`Inserted: \${value} with priority \${priority}\`);
    }
    
    extractMax() {
        // Remove and return highest priority - O(log n)
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        
        const max = this.heap[0];
        const last = this.heap.pop();
        
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        
        console.log(\`Extracted: \${max.value} (priority \${max.priority})\`);
        return max.value;
    }
    
    peek() {
        // View highest priority element - O(1)
        return this.isEmpty() ? null : this.heap[0].value;
    }
    
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].priority <= this.heap[parentIndex].priority) break;
            
            [this.heap[index], this.heap[parentIndex]] = 
                [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    
    bubbleDown(index) {
        while (true) {
            let largest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            
            if (left < this.heap.length && 
                this.heap[left].priority > this.heap[largest].priority) {
                largest = left;
            }
            if (right < this.heap.length && 
                this.heap[right].priority > this.heap[largest].priority) {
                largest = right;
            }
            
            if (largest === index) break;
            
            [this.heap[index], this.heap[largest]] = 
                [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}

// Test priority queue
const pq = new PriorityQueue();
pq.insert("Low priority task", 1);
pq.insert("High priority task", 10);
pq.insert("Medium priority task", 5);
pq.insert("Critical task", 20);

console.log(\`\\nPeek: \${pq.peek()}\`);  // Critical task

// Extract in priority order
while (!pq.isEmpty()) {
    pq.extractMax();
}`,
            explanation: 'JavaScript max heap implementation with bubbleUp/bubbleDown for maintaining heap property. Array-based for efficiency.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <queue>
#include <vector>
#include <string>
using namespace std;

/**
 * Priority Queue using STL (max heap by default)
 * Time: O(log n) insert/extract, O(1) peek
 */
struct Task {
    string name;
    int priority;
    
    // Comparator for max heap (higher priority first)
    bool operator<(const Task& other) const {
        return priority < other.priority;
    }
};

class PriorityQueueDemo {
    priority_queue<Task> pq;
    
public:
    // Insert with priority - O(log n)
    void insert(string name, int priority) {
        pq.push({name, priority});
        cout << "Inserted: " << name << " with priority " << priority << endl;
    }
    
    // Remove and return highest priority - O(log n)
    string extractMax() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return "";
        }
        
        Task task = pq.top();
        pq.pop();
        cout << "Extracted: " << task.name << " (priority " << task.priority << ")" << endl;
        return task.name;
    }
    
    // View highest priority element - O(1)
    string peek() {
        return isEmpty() ? "" : pq.top().name;
    }
    
    // Check if empty - O(1)
    bool isEmpty() {
        return pq.empty();
    }
};

int main() {
    PriorityQueueDemo pq;
    pq.insert("Low priority task", 1);
    pq.insert("High priority task", 10);
    pq.insert("Medium priority task", 5);
    pq.insert("Critical task", 20);
    
    cout << "\\nPeek: " << pq.peek() << endl;  // Critical task
    
    // Extract in priority order
    while (!pq.isEmpty()) {
        pq.extractMax();
    }
    
    return 0;
}`,
            explanation: 'C++ STL priority_queue is max heap by default. Custom comparator for struct. O(log n) push/pop, O(1) top.',
          },
          {
            language: 'java',
            code: `import java.util.PriorityQueue;
import java.util.Comparator;

/**
 * Priority Queue using Java PriorityQueue (min heap by default)
 * Time: O(log n) insert/extract, O(1) peek
 */
class Task {
    String name;
    int priority;
    
    Task(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }
}

class PriorityQueueDemo {
    // Max heap using reverse comparator
    private PriorityQueue<Task> pq;
    
    public PriorityQueueDemo() {
        pq = new PriorityQueue<>(Comparator.comparingInt(t -> -t.priority));
    }
    
    // Insert with priority - O(log n)
    public void insert(String name, int priority) {
        pq.offer(new Task(name, priority));
        System.out.println("Inserted: " + name + " with priority " + priority);
    }
    
    // Remove and return highest priority - O(log n)
    public String extractMax() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return null;
        }
        
        Task task = pq.poll();
        System.out.println("Extracted: " + task.name + " (priority " + task.priority + ")");
        return task.name;
    }
    
    // View highest priority element - O(1)
    public String peek() {
        return isEmpty() ? null : pq.peek().name;
    }
    
    // Check if empty - O(1)
    public boolean isEmpty() {
        return pq.isEmpty();
    }
    
    public static void main(String[] args) {
        PriorityQueueDemo pq = new PriorityQueueDemo();
        pq.insert("Low priority task", 1);
        pq.insert("High priority task", 10);
        pq.insert("Medium priority task", 5);
        pq.insert("Critical task", 20);
        
        System.out.println("\\nPeek: " + pq.peek());  // Critical task
        
        // Extract in priority order
        while (!pq.isEmpty()) {
            pq.extractMax();
        }
    }
}`,
            explanation: 'Java PriorityQueue is min heap by default. Use reverse comparator for max heap. offer() adds, poll() removes, peek() views.',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'queue', params: { operations: ['enqueue', 'dequeue'] } },
      playgroundInitialCode: {
        python: `from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        # Your code here
        pass
    
    def dequeue(self):
        # Your code here
        pass

queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
print(queue.dequeue())`,
        javascript: `class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        // Your code here
    }
    
    dequeue() {
        // Your code here
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());`,
        cpp: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    q.push(1);
    q.push(2);
    cout << q.front() << endl;
    q.pop();
    return 0;
}`,
        java: `import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        queue.add(2);
        System.out.println(queue.poll());
    }
}`,
      },
    },
  },
  {
    _id: '9',
    meta: {
      title: 'Binary Trees',
      slug: 'binary-trees',
      category: 'DSA',
      tags: ['data-structures', 'trees', 'hierarchical'],
      estimatedTime: 45,
    },
    content: {
      beginner: {
        markdownText: `
# Binary Trees - Hierarchical Data Structures 🌳

A binary tree is a hierarchical data structure where each node has at most two children: left and right. Think of it like a family tree!

## What is a Binary Tree?

A tree data structure where:
- Each node contains a **value**
- Each node has at most **two children**: left and right
- One node is the **root** (top of tree)
- Nodes with no children are **leaves**

## Tree Terminology

- **Root**: Top node (no parent)
- **Parent**: Node with children
- **Child**: Node below parent (left or right)
- **Leaf**: Node with no children
- **Height**: Longest path from root to leaf
- **Depth**: Distance from root to a node
- **Subtree**: Tree formed by a node and its descendants

## Tree Traversals

Three main ways to visit all nodes:

1. **Inorder (Left-Root-Right)**: Visit left, then root, then right
2. **Preorder (Root-Left-Right)**: Visit root, then left, then right
3. **Postorder (Left-Right-Root)**: Visit left, then right, then root

## Time & Space Complexity

| Operation | Time | Space |
|-----------|------|-------|
| Traversal | O(n) | O(h) recursion |
| Search | O(n) | O(h) |
| Insert | O(n) | O(h) |

Where h = height of tree

## Real-World Examples

- File system directories
- Organization hierarchies
- HTML DOM structure
- Expression trees in compilers
- Decision trees in AI/ML
        `,
        analogy: "A binary tree is like a family tree where each person can have at most two children. You start at the top (root) and branch down through generations!",
        codeSnippets: [
          {
            language: 'python',
            code: `class TreeNode:
    """Node class for binary tree"""
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Create a binary tree
#       1
#      / \\
#     2   3
#    / \\
#   4   5
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

def inorder_traversal(node):
    """Inorder: Left-Root-Right"""
    if node:
        inorder_traversal(node.left)
        print(node.value, end=' ')
        inorder_traversal(node.right)

def preorder_traversal(node):
    """Preorder: Root-Left-Right"""
    if node:
        print(node.value, end=' ')
        preorder_traversal(node.left)
        preorder_traversal(node.right)

def postorder_traversal(node):
    """Postorder: Left-Right-Root"""
    if node:
        postorder_traversal(node.left)
        postorder_traversal(node.right)
        print(node.value, end=' ')

print("Inorder:  ", end='')
inorder_traversal(root)    # 4 2 5 1 3
print("\\nPreorder: ", end='')
preorder_traversal(root)   # 1 2 4 5 3
print("\\nPostorder:", end='')
postorder_traversal(root)  # 4 5 2 3 1`,
            explanation: 'Python binary tree with recursive traversals. Inorder visits left subtree, root, then right subtree.',
          },
          {
            language: 'javascript',
            code: `class TreeNode {
    // Node class for binary tree
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create a binary tree
//       1
//      / \\
//     2   3
//    / \\
//   4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function inorderTraversal(node) {
    // Inorder: Left-Root-Right
    if (node) {
        inorderTraversal(node.left);
        process.stdout.write(node.value + ' ');
        inorderTraversal(node.right);
    }
}

function preorderTraversal(node) {
    // Preorder: Root-Left-Right
    if (node) {
        process.stdout.write(node.value + ' ');
        preorderTraversal(node.left);
        preorderTraversal(node.right);
    }
}

function postorderTraversal(node) {
    // Postorder: Left-Right-Root
    if (node) {
        postorderTraversal(node.left);
        postorderTraversal(node.right);
        process.stdout.write(node.value + ' ');
    }
}

process.stdout.write("Inorder:   ");
inorderTraversal(root);    // 4 2 5 1 3
process.stdout.write("\\nPreorder:  ");
preorderTraversal(root);   // 1 2 4 5 3
process.stdout.write("\\nPostorder: ");
postorderTraversal(root);  // 4 5 2 3 1`,
            explanation: 'JavaScript binary tree with three traversal methods. Each uses recursion to visit nodes in different orders.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
using namespace std;

// Node structure for binary tree
struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;
    
    TreeNode(int val) : value(val), left(nullptr), right(nullptr) {}
};

// Inorder: Left-Root-Right
void inorderTraversal(TreeNode* node) {
    if (node) {
        inorderTraversal(node->left);
        cout << node->value << " ";
        inorderTraversal(node->right);
    }
}

// Preorder: Root-Left-Right
void preorderTraversal(TreeNode* node) {
    if (node) {
        cout << node->value << " ";
        preorderTraversal(node->left);
        preorderTraversal(node->right);
    }
}

// Postorder: Left-Right-Root
void postorderTraversal(TreeNode* node) {
    if (node) {
        postorderTraversal(node->left);
        postorderTraversal(node->right);
        cout << node->value << " ";
    }
}

int main() {
    // Create a binary tree
    //       1
    //      / \\
    //     2   3
    //    / \\
    //   4   5
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    
    cout << "Inorder:   ";
    inorderTraversal(root);    // 4 2 5 1 3
    cout << "\\nPreorder:  ";
    preorderTraversal(root);   // 1 2 4 5 3
    cout << "\\nPostorder: ";
    postorderTraversal(root);  // 4 5 2 3 1
    cout << endl;
    
    return 0;
}`,
            explanation: 'C++ binary tree using pointers. Three recursive traversal functions visit nodes in different orders.',
          },
          {
            language: 'java',
            code: `// Node class for binary tree
class TreeNode {
    int value;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTreeTraversal {
    // Inorder: Left-Root-Right
    public static void inorderTraversal(TreeNode node) {
        if (node != null) {
            inorderTraversal(node.left);
            System.out.print(node.value + " ");
            inorderTraversal(node.right);
        }
    }
    
    // Preorder: Root-Left-Right
    public static void preorderTraversal(TreeNode node) {
        if (node != null) {
            System.out.print(node.value + " ");
            preorderTraversal(node.left);
            preorderTraversal(node.right);
        }
    }
    
    // Postorder: Left-Right-Root
    public static void postorderTraversal(TreeNode node) {
        if (node != null) {
            postorderTraversal(node.left);
            postorderTraversal(node.right);
            System.out.print(node.value + " ");
        }
    }
    
    public static void main(String[] args) {
        // Create a binary tree
        //       1
        //      / \\
        //     2   3
        //    / \\
        //   4   5
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.print("Inorder:   ");
        inorderTraversal(root);    // 4 2 5 1 3
        System.out.print("\\nPreorder:  ");
        preorderTraversal(root);   // 1 2 4 5 3
        System.out.print("\\nPostorder: ");
        postorderTraversal(root);  // 4 5 2 3 1
        System.out.println();
    }
}`,
            explanation: 'Java binary tree with three traversal methods. Recursion naturally handles the tree structure.',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Binary Trees - Level Order Traversal (BFS) 📊

Level order traversal visits nodes level by level, from left to right. This is also called **Breadth-First Search (BFS)**!

## Problem: Level Order Traversal

Given a binary tree, return values of nodes level by level.

**Example:**
\`\`\`
Tree:      1
          / \\
         2   3
        / \\
       4   5

Output: [[1], [2, 3], [4, 5]]
Or flat: [1, 2, 3, 4, 5]
\`\`\`

## Algorithm: BFS with Queue

Unlike DFS (depth-first) traversals that use recursion/stack, BFS uses a **queue**!

**Steps:**
1. Start with root in queue
2. While queue not empty:
   - Dequeue node
   - Process/print node
   - Enqueue left child (if exists)
   - Enqueue right child (if exists)

## Why Use a Queue?

Queue ensures **FIFO** (First In, First Out):
- Process nodes in order they were discovered
- Naturally visits level by level
- Left to right within each level

## Time & Space Complexity

| Metric | Complexity |
|--------|------------|
| Time | O(n) - visit each node once |
| Space | O(w) - width of tree (max queue size) |

Where w = maximum width (nodes at widest level)

## Real-World Applications

- **Web crawling**: Visit pages level by level
- **Social networks**: Find friends at distance k
- **File systems**: List directory contents by depth
- **Game AI**: Explore game states breadth-first
- **Network broadcasting**: Spread message to all nodes
        `,
        timeComplexityAnalysis: 'Visit each node exactly once (O(n)). Queue stores at most one level of nodes, so space is O(w) where w is maximum width.',
        codeSnippets: [
          {
            language: 'python',
            code: `from collections import deque

class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def level_order_traversal(root):
    """
    Level order traversal using BFS
    Time: O(n), Space: O(w) where w = max width
    """
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        current_level = []
        
        # Process all nodes at current level
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.value)
            
            # Add children to queue for next level
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(current_level)
    
    return result

# Create tree:
#       1
#      / \\
#     2   3
#    / \\   \\
#   4   5   6
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.right = TreeNode(6)

print("Level Order Traversal:")
levels = level_order_traversal(root)
for i, level in enumerate(levels):
    print(f"Level {i}: {level}")

# Output:
# Level 0: [1]
# Level 1: [2, 3]
# Level 2: [4, 5, 6]`,
            explanation: 'Python BFS using deque for O(1) queue operations. Track level size to group nodes by level.',
          },
          {
            language: 'javascript',
            code: `class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {
    /**
     * Level order traversal using BFS
     * Time: O(n), Space: O(w) where w = max width
     */
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        // Process all nodes at current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.value);
            
            // Add children to queue for next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// Create tree:
//       1
//      / \\
//     2   3
//    / \\   \\
//   4   5   6
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log("Level Order Traversal:");
const levels = levelOrderTraversal(root);
levels.forEach((level, i) => {
    console.log(\`Level \${i}: [\${level.join(', ')}]\`);
});

// Output:
// Level 0: [1]
// Level 1: [2, 3]
// Level 2: [4, 5, 6]`,
            explanation: 'JavaScript BFS using array as queue. shift() removes from front, push() adds to back.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int val) : value(val), left(nullptr), right(nullptr) {}
};

/**
 * Level order traversal using BFS
 * Time: O(n), Space: O(w) where w = max width
 */
vector<vector<int>> levelOrderTraversal(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    
    queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        int levelSize = q.size();
        vector<int> currentLevel;
        
        // Process all nodes at current level
        for (int i = 0; i < levelSize; i++) {
            TreeNode* node = q.front();
            q.pop();
            currentLevel.push_back(node->value);
            
            // Add children to queue for next level
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        
        result.push_back(currentLevel);
    }
    
    return result;
}

int main() {
    // Create tree:
    //       1
    //      / \\
    //     2   3
    //    / \\   \\
    //   4   5   6
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    root->right->right = new TreeNode(6);
    
    cout << "Level Order Traversal:" << endl;
    vector<vector<int>> levels = levelOrderTraversal(root);
    
    for (int i = 0; i < levels.size(); i++) {
        cout << "Level " << i << ": [";
        for (int j = 0; j < levels[i].size(); j++) {
            cout << levels[i][j];
            if (j < levels[i].size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }
    
    return 0;
}`,
            explanation: 'C++ BFS using STL queue. front() gets first element, pop() removes it, push() adds to back.',
          },
          {
            language: 'java',
            code: `import java.util.*;

class TreeNode {
    int value;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class LevelOrderTraversal {
    /**
     * Level order traversal using BFS
     * Time: O(n), Space: O(w) where w = max width
     */
    public static List<List<Integer>> levelOrderTraversal(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> currentLevel = new ArrayList<>();
            
            // Process all nodes at current level
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                currentLevel.add(node.value);
                
                // Add children to queue for next level
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            
            result.add(currentLevel);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        // Create tree:
        //       1
        //      / \\
        //     2   3
        //    / \\   \\
        //   4   5   6
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(6);
        
        System.out.println("Level Order Traversal:");
        List<List<Integer>> levels = levelOrderTraversal(root);
        
        for (int i = 0; i < levels.size(); i++) {
            System.out.println("Level " + i + ": " + levels.get(i));
        }
    }
}`,
            explanation: 'Java BFS using LinkedList as Queue. offer() adds, poll() removes and returns front element.',
          },
        ],
      },
      expert: {
        markdownText: `
# Binary Trees - Lowest Common Ancestor (LCA) 🎯

Find the lowest common ancestor of two nodes in a binary tree - a classic interview problem!

## Problem: Lowest Common Ancestor

The **LCA** of two nodes p and q is the lowest (deepest) node that has both p and q as descendants (a node can be a descendant of itself).

**Example:**
\`\`\`
Tree:        3
           /   \\
          5     1
         / \\   / \\
        6   2 0   8
           / \\
          7   4

LCA(5, 1) = 3
LCA(5, 4) = 5
LCA(6, 4) = 5
\`\`\`

## Algorithm Strategy

**Recursive approach:**
1. If root is null or equals p or q → return root
2. Recursively search left and right subtrees
3. If both return non-null → root is LCA
4. If only one returns non-null → that's the LCA
5. If both null → no LCA in this subtree

## Key Insights

- **Both in left**: LCA is in left subtree
- **Both in right**: LCA is in right subtree
- **One left, one right**: Current root is LCA
- **One is ancestor of other**: The ancestor is LCA

## Time & Space Complexity

| Metric | Complexity |
|--------|------------|
| Time | O(n) - may visit all nodes |
| Space | O(h) - recursion stack (h = height) |

Best case: O(log n) for balanced tree
Worst case: O(n) for skewed tree

## Real-World Applications

- **Version control**: Find common commit ancestor (Git)
- **File systems**: Find common parent directory
- **Organization charts**: Find common manager
- **Taxonomy**: Find common ancestor in classification
- **Network routing**: Find common network node
        `,
        memoryOptimization: 'Recursive solution uses O(h) stack space. Iterative with parent pointers uses O(n) space but avoids recursion.',
        systemDesignImplications: 'Used in Git for merge base finding, file system path resolution, and distributed systems for finding common ancestors in version trees.',
        codeSnippets: [
          {
            language: 'python',
            code: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def lowest_common_ancestor(root, p, q):
    """
    Find LCA of two nodes in binary tree
    Time: O(n), Space: O(h) for recursion
    """
    # Base case: empty tree or found one of the nodes
    if not root or root == p or root == q:
        return root
    
    # Search in left and right subtrees
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    
    # If both sides return non-null, root is LCA
    if left and right:
        return root
    
    # Otherwise, return whichever side is non-null
    return left if left else right

# Create tree:
#        3
#      /   \\
#     5     1
#    / \\   / \\
#   6   2 0   8
#      / \\
#     7   4
root = TreeNode(3)
root.left = TreeNode(5)
root.right = TreeNode(1)
root.left.left = TreeNode(6)
root.left.right = TreeNode(2)
root.right.left = TreeNode(0)
root.right.right = TreeNode(8)
root.left.right.left = TreeNode(7)
root.left.right.right = TreeNode(4)

# Test cases
node5 = root.left
node1 = root.right
node4 = root.left.right.right
node6 = root.left.left

lca1 = lowest_common_ancestor(root, node5, node1)
print(f"LCA(5, 1) = {lca1.value}")  # 3

lca2 = lowest_common_ancestor(root, node5, node4)
print(f"LCA(5, 4) = {lca2.value}")  # 5

lca3 = lowest_common_ancestor(root, node6, node4)
print(f"LCA(6, 4) = {lca3.value}")  # 5`,
            explanation: 'Python recursive LCA. If both subtrees return nodes, current root is LCA. Otherwise, return the non-null side.',
          },
          {
            language: 'javascript',
            code: `class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function lowestCommonAncestor(root, p, q) {
    /**
     * Find LCA of two nodes in binary tree
     * Time: O(n), Space: O(h) for recursion
     */
    // Base case: empty tree or found one of the nodes
    if (!root || root === p || root === q) {
        return root;
    }
    
    // Search in left and right subtrees
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    // If both sides return non-null, root is LCA
    if (left && right) {
        return root;
    }
    
    // Otherwise, return whichever side is non-null
    return left || right;
}

// Create tree:
//        3
//      /   \\
//     5     1
//    / \\   / \\
//   6   2 0   8
//      / \\
//     7   4
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// Test cases
const node5 = root.left;
const node1 = root.right;
const node4 = root.left.right.right;
const node6 = root.left.left;

const lca1 = lowestCommonAncestor(root, node5, node1);
console.log(\`LCA(5, 1) = \${lca1.value}\`);  // 3

const lca2 = lowestCommonAncestor(root, node5, node4);
console.log(\`LCA(5, 4) = \${lca2.value}\`);  // 5

const lca3 = lowestCommonAncestor(root, node6, node4);
console.log(\`LCA(6, 4) = \${lca3.value}\`);  // 5`,
            explanation: 'JavaScript recursive LCA using reference equality. Clean logic: both sides found = root is LCA.',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
using namespace std;

struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int val) : value(val), left(nullptr), right(nullptr) {}
};

/**
 * Find LCA of two nodes in binary tree
 * Time: O(n), Space: O(h) for recursion
 */
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    // Base case: empty tree or found one of the nodes
    if (!root || root == p || root == q) {
        return root;
    }
    
    // Search in left and right subtrees
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    
    // If both sides return non-null, root is LCA
    if (left && right) {
        return root;
    }
    
    // Otherwise, return whichever side is non-null
    return left ? left : right;
}

int main() {
    // Create tree:
    //        3
    //      /   \\
    //     5     1
    //    / \\   / \\
    //   6   2 0   8
    //      / \\
    //     7   4
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(5);
    root->right = new TreeNode(1);
    root->left->left = new TreeNode(6);
    root->left->right = new TreeNode(2);
    root->right->left = new TreeNode(0);
    root->right->right = new TreeNode(8);
    root->left->right->left = new TreeNode(7);
    root->left->right->right = new TreeNode(4);
    
    // Test cases
    TreeNode* node5 = root->left;
    TreeNode* node1 = root->right;
    TreeNode* node4 = root->left->right->right;
    TreeNode* node6 = root->left->left;
    
    TreeNode* lca1 = lowestCommonAncestor(root, node5, node1);
    cout << "LCA(5, 1) = " << lca1->value << endl;  // 3
    
    TreeNode* lca2 = lowestCommonAncestor(root, node5, node4);
    cout << "LCA(5, 4) = " << lca2->value << endl;  // 5
    
    TreeNode* lca3 = lowestCommonAncestor(root, node6, node4);
    cout << "LCA(6, 4) = " << lca3->value << endl;  // 5
    
    return 0;
}`,
            explanation: 'C++ recursive LCA with pointer comparison. Elegant solution: if both subtrees have nodes, current is LCA.',
          },
          {
            language: 'java',
            code: `class TreeNode {
    int value;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class LowestCommonAncestor {
    /**
     * Find LCA of two nodes in binary tree
     * Time: O(n), Space: O(h) for recursion
     */
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Base case: empty tree or found one of the nodes
        if (root == null || root == p || root == q) {
            return root;
        }
        
        // Search in left and right subtrees
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        
        // If both sides return non-null, root is LCA
        if (left != null && right != null) {
            return root;
        }
        
        // Otherwise, return whichever side is non-null
        return left != null ? left : right;
    }
    
    public static void main(String[] args) {
        // Create tree:
        //        3
        //      /   \\
        //     5     1
        //    / \\   / \\
        //   6   2 0   8
        //      / \\
        //     7   4
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(5);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(6);
        root.left.right = new TreeNode(2);
        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(8);
        root.left.right.left = new TreeNode(7);
        root.left.right.right = new TreeNode(4);
        
        // Test cases
        TreeNode node5 = root.left;
        TreeNode node1 = root.right;
        TreeNode node4 = root.left.right.right;
        TreeNode node6 = root.left.left;
        
        TreeNode lca1 = lowestCommonAncestor(root, node5, node1);
        System.out.println("LCA(5, 1) = " + lca1.value);  // 3
        
        TreeNode lca2 = lowestCommonAncestor(root, node5, node4);
        System.out.println("LCA(5, 4) = " + lca2.value);  // 5
        
        TreeNode lca3 = lowestCommonAncestor(root, node6, node4);
        System.out.println("LCA(6, 4) = " + lca3.value);  // 5
    }
}`,
            explanation: 'Java recursive LCA with reference comparison. Classic algorithm: both found in different subtrees = root is LCA.',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'tree', params: { structure: 'binary-tree', traversal: 'inorder' } },
      playgroundInitialCode: {
        python: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def inorder_traversal(root):
    # Your code here
    pass

# Create tree and test
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
inorder_traversal(root)`,
        javascript: `class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(root) {
    // Your code here
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
inorderTraversal(root);`,
        cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int val) : value(val), left(nullptr), right(nullptr) {}
};

void inorderTraversal(TreeNode* root) {
    // Your code here
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    inorderTraversal(root);
    return 0;
}`,
        java: `class TreeNode {
    int value;
    TreeNode left, right;
    TreeNode(int value) {
        this.value = value;
        left = right = null;
    }
}

public class Main {
    public static void inorderTraversal(TreeNode root) {
        // Your code here
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        inorderTraversal(root);
    }
}`,
      },
    },
  },
  {
    _id: '10',
    meta: {
      title: 'Graphs',
      slug: 'graphs',
      category: 'DSA',
      tags: ['data-structures', 'graphs', 'networks'],
      estimatedTime: 45,
    },
    content: {
      beginner: {
        markdownText: `
# Graphs - Networks and Connections 🕸️

A graph is a collection of nodes (vertices) connected by edges. Think of it like a social network where people are nodes and friendships are edges!

## What is a Graph?

- **Vertices (Nodes)**: The points in the graph
- **Edges**: Connections between vertices
- **Types**: Directed (one-way) or Undirected (two-way)

## Graph Representations

1. **Adjacency Matrix**: 2D array where matrix[i][j] = 1 if edge exists
2. **Adjacency List**: Array of lists, each list contains neighbors

## Real-World Examples

- Social networks (Facebook friends)
- Maps and navigation (cities and roads)
- Web pages (links between pages)
- Computer networks
        `,
        analogy: "A graph is like a map of cities (nodes) connected by roads (edges). You can travel from one city to another following the roads!",
        codeSnippets: [
          {
            language: 'python',
            code: `# Graph using adjacency list
class Graph:
    def __init__(self):
        self.graph = {}
    
    def add_edge(self, u, v):
        """Add edge between u and v"""
        if u not in self.graph:
            self.graph[u] = []
        if v not in self.graph:
            self.graph[v] = []
        self.graph[u].append(v)
        self.graph[v].append(u)  # Undirected
    
    def print_graph(self):
        """Print adjacency list"""
        for vertex in self.graph:
            print(f"{vertex}: {self.graph[vertex]}")

# Create graph
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.print_graph()
# Output:
# 0: [1, 2]
# 1: [0, 2]
# 2: [0, 1]`,
            explanation: 'Python graph using dictionary for adjacency list representation',
          },
          {
            language: 'javascript',
            code: `// Graph using adjacency list
class Graph {
    constructor() {
        this.graph = new Map();
    }
    
    addEdge(u, v) {
        // Add edge between u and v
        if (!this.graph.has(u)) this.graph.set(u, []);
        if (!this.graph.has(v)) this.graph.set(v, []);
        
        this.graph.get(u).push(v);
        this.graph.get(v).push(u);  // Undirected
    }
    
    printGraph() {
        // Print adjacency list
        for (const [vertex, neighbors] of this.graph) {
            console.log(\`\${vertex}: [\${neighbors.join(', ')}]\`);
        }
    }
}

// Create graph
const g = new Graph();
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.printGraph();
// Output:
// 0: [1, 2]
// 1: [0, 2]
// 2: [0, 1]`,
            explanation: 'JavaScript graph using Map for adjacency list',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <map>
using namespace std;

// Graph using adjacency list
class Graph {
    map<int, vector<int>> graph;
    
public:
    void addEdge(int u, int v) {
        // Add edge between u and v
        graph[u].push_back(v);
        graph[v].push_back(u);  // Undirected
    }
    
    void printGraph() {
        // Print adjacency list
        for (auto& [vertex, neighbors] : graph) {
            cout << vertex << ": [";
            for (int i = 0; i < neighbors.size(); i++) {
                cout << neighbors[i];
                if (i < neighbors.size() - 1) cout << ", ";
            }
            cout << "]" << endl;
        }
    }
};

int main() {
    Graph g;
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.printGraph();
    // Output:
    // 0: [1, 2]
    // 1: [0, 2]
    // 2: [0, 1]
    return 0;
}`,
            explanation: 'C++ graph using map and vectors for adjacency list',
          },
          {
            language: 'java',
            code: `import java.util.*;

// Graph using adjacency list
class Graph {
    private Map<Integer, List<Integer>> graph;
    
    public Graph() {
        graph = new HashMap<>();
    }
    
    public void addEdge(int u, int v) {
        // Add edge between u and v
        graph.putIfAbsent(u, new ArrayList<>());
        graph.putIfAbsent(v, new ArrayList<>());
        
        graph.get(u).add(v);
        graph.get(v).add(u);  // Undirected
    }
    
    public void printGraph() {
        // Print adjacency list
        for (Map.Entry<Integer, List<Integer>> entry : graph.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
    
    public static void main(String[] args) {
        Graph g = new Graph();
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.printGraph();
        // Output:
        // 0: [1, 2]
        // 1: [0, 2]
        // 2: [0, 1]
    }
}`,
            explanation: 'Java graph using HashMap and ArrayList for adjacency list',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Graphs - DFS and BFS Traversal 🔍

Two fundamental ways to explore a graph: Depth-First Search (DFS) and Breadth-First Search (BFS).

## DFS (Depth-First Search)

- Goes as deep as possible before backtracking
- Uses **stack** (or recursion)
- Time: O(V + E), Space: O(V)

## BFS (Breadth-First Search)

- Explores level by level
- Uses **queue**
- Time: O(V + E), Space: O(V)
- Finds shortest path in unweighted graphs

## Applications

- **DFS**: Cycle detection, topological sort, pathfinding
- **BFS**: Shortest path, level-order traversal, peer-to-peer networks
        `,
        timeComplexityAnalysis: 'Both DFS and BFS visit each vertex once and explore each edge once, giving O(V + E) time complexity.',
        codeSnippets: [
          {
            language: 'python',
            code: `from collections import deque

class Graph:
    def __init__(self):
        self.graph = {}
    
    def add_edge(self, u, v):
        if u not in self.graph:
            self.graph[u] = []
        if v not in self.graph:
            self.graph[v] = []
        self.graph[u].append(v)
    
    def dfs(self, start):
        """Depth-First Search - O(V + E)"""
        visited = set()
        result = []
        
        def dfs_helper(vertex):
            visited.add(vertex)
            result.append(vertex)
            
            for neighbor in self.graph.get(vertex, []):
                if neighbor not in visited:
                    dfs_helper(neighbor)
        
        dfs_helper(start)
        return result
    
    def bfs(self, start):
        """Breadth-First Search - O(V + E)"""
        visited = set([start])
        queue = deque([start])
        result = []
        
        while queue:
            vertex = queue.popleft()
            result.append(vertex)
            
            for neighbor in self.graph.get(vertex, []):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        return result

# Test
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(2, 4)

print("DFS:", g.dfs(0))  # [0, 1, 3, 2, 4]
print("BFS:", g.bfs(0))  # [0, 1, 2, 3, 4]`,
            explanation: 'Python DFS (recursive) and BFS (queue-based) implementations',
          },
          {
            language: 'javascript',
            code: `class Graph {
    constructor() {
        this.graph = new Map();
    }
    
    addEdge(u, v) {
        if (!this.graph.has(u)) this.graph.set(u, []);
        if (!this.graph.has(v)) this.graph.set(v, []);
        this.graph.get(u).push(v);
    }
    
    dfs(start) {
        // Depth-First Search - O(V + E)
        const visited = new Set();
        const result = [];
        
        const dfsHelper = (vertex) => {
            visited.add(vertex);
            result.push(vertex);
            
            for (const neighbor of (this.graph.get(vertex) || [])) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };
        
        dfsHelper(start);
        return result;
    }
    
    bfs(start) {
        // Breadth-First Search - O(V + E)
        const visited = new Set([start]);
        const queue = [start];
        const result = [];
        
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            
            for (const neighbor of (this.graph.get(vertex) || [])) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        
        return result;
    }
}

// Test
const g = new Graph();
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

console.log("DFS:", g.dfs(0));  // [0, 1, 3, 2, 4]
console.log("BFS:", g.bfs(0));  // [0, 1, 2, 3, 4]`,
            explanation: 'JavaScript DFS and BFS with Set for visited tracking',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
#include <map>
using namespace std;

class Graph {
    map<int, vector<int>> graph;
    
    void dfsHelper(int vertex, unordered_set<int>& visited, vector<int>& result) {
        visited.insert(vertex);
        result.push_back(vertex);
        
        for (int neighbor : graph[vertex]) {
            if (visited.find(neighbor) == visited.end()) {
                dfsHelper(neighbor, visited, result);
            }
        }
    }
    
public:
    void addEdge(int u, int v) {
        graph[u].push_back(v);
    }
    
    vector<int> dfs(int start) {
        // Depth-First Search - O(V + E)
        unordered_set<int> visited;
        vector<int> result;
        dfsHelper(start, visited, result);
        return result;
    }
    
    vector<int> bfs(int start) {
        // Breadth-First Search - O(V + E)
        unordered_set<int> visited;
        queue<int> q;
        vector<int> result;
        
        visited.insert(start);
        q.push(start);
        
        while (!q.empty()) {
            int vertex = q.front();
            q.pop();
            result.push_back(vertex);
            
            for (int neighbor : graph[vertex]) {
                if (visited.find(neighbor) == visited.end()) {
                    visited.insert(neighbor);
                    q.push(neighbor);
                }
            }
        }
        
        return result;
    }
};

int main() {
    Graph g;
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    
    vector<int> dfsResult = g.dfs(0);
    vector<int> bfsResult = g.bfs(0);
    
    cout << "DFS: ";
    for (int v : dfsResult) cout << v << " ";
    cout << endl;
    
    cout << "BFS: ";
    for (int v : bfsResult) cout << v << " ";
    cout << endl;
    
    return 0;
}`,
            explanation: 'C++ DFS and BFS using unordered_set and queue',
          },
          {
            language: 'java',
            code: `import java.util.*;

class Graph {
    private Map<Integer, List<Integer>> graph;
    
    public Graph() {
        graph = new HashMap<>();
    }
    
    public void addEdge(int u, int v) {
        graph.putIfAbsent(u, new ArrayList<>());
        graph.putIfAbsent(v, new ArrayList<>());
        graph.get(u).add(v);
    }
    
    public List<Integer> dfs(int start) {
        // Depth-First Search - O(V + E)
        Set<Integer> visited = new HashSet<>();
        List<Integer> result = new ArrayList<>();
        dfsHelper(start, visited, result);
        return result;
    }
    
    private void dfsHelper(int vertex, Set<Integer> visited, List<Integer> result) {
        visited.add(vertex);
        result.add(vertex);
        
        for (int neighbor : graph.getOrDefault(vertex, new ArrayList<>())) {
            if (!visited.contains(neighbor)) {
                dfsHelper(neighbor, visited, result);
            }
        }
    }
    
    public List<Integer> bfs(int start) {
        // Breadth-First Search - O(V + E)
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        List<Integer> result = new ArrayList<>();
        
        visited.add(start);
        queue.offer(start);
        
        while (!queue.isEmpty()) {
            int vertex = queue.poll();
            result.add(vertex);
            
            for (int neighbor : graph.getOrDefault(vertex, new ArrayList<>())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Graph g = new Graph();
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 4);
        
        System.out.println("DFS: " + g.dfs(0));
        System.out.println("BFS: " + g.bfs(0));
    }
}`,
            explanation: 'Java DFS and BFS using HashSet and LinkedList as queue',
          },
        ],
      },
      expert: {
        markdownText: `
# Graphs - Dijkstra's Shortest Path 🎯

Find the shortest path from a source to all other vertices in a weighted graph!

## Dijkstra's Algorithm

- Works on graphs with **non-negative** edge weights
- Uses **priority queue** (min-heap)
- Greedy approach: always pick closest unvisited vertex
- Time: O((V + E) log V) with binary heap

## Algorithm Steps

1. Initialize distances: source = 0, others = ∞
2. Add source to priority queue
3. While queue not empty:
   - Extract vertex with minimum distance
   - Update distances to neighbors
   - Add updated neighbors to queue

## Applications

- GPS navigation (shortest route)
- Network routing protocols
- Flight booking (cheapest path)
- Game AI pathfinding
        `,
        memoryOptimization: 'Use Fibonacci heap for O(V log V + E) time complexity.',
        systemDesignImplications: 'Used in OSPF routing protocol, Google Maps, and network packet routing.',
        codeSnippets: [
          {
            language: 'python',
            code: `import heapq

def dijkstra(graph, start):
    """
    Dijkstra's shortest path algorithm
    Time: O((V + E) log V), Space: O(V)
    """
    distances = {vertex: float('inf') for vertex in graph}
    distances[start] = 0
    pq = [(0, start)]  # (distance, vertex)
    
    while pq:
        current_dist, current = heapq.heappop(pq)
        
        # Skip if we've found a better path
        if current_dist > distances[current]:
            continue
        
        # Check neighbors
        for neighbor, weight in graph[current]:
            distance = current_dist + weight
            
            # Found shorter path
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances

# Test graph (adjacency list with weights)
graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('C', 1), ('D', 5)],
    'C': [('D', 8), ('E', 10)],
    'D': [('E', 2)],
    'E': []
}

result = dijkstra(graph, 'A')
print(result)  # {'A': 0, 'B': 4, 'C': 2, 'D': 9, 'E': 11}`,
            explanation: 'Python Dijkstra using heapq for priority queue',
          },
          {
            language: 'javascript',
            code: `class PriorityQueue {
    constructor() {
        this.values = [];
    }
    
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.values.sort((a, b) => a.priority - b.priority);
    }
    
    dequeue() {
        return this.values.shift();
    }
    
    isEmpty() {
        return this.values.length === 0;
    }
}

function dijkstra(graph, start) {
    /**
     * Dijkstra's shortest path algorithm
     * Time: O((V + E) log V), Space: O(V)
     */
    const distances = {};
    const pq = new PriorityQueue();
    
    // Initialize distances
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);
    
    while (!pq.isEmpty()) {
        const {val: current, priority: currentDist} = pq.dequeue();
        
        // Skip if we've found a better path
        if (currentDist > distances[current]) continue;
        
        // Check neighbors
        for (const [neighbor, weight] of graph[current]) {
            const distance = currentDist + weight;
            
            // Found shorter path
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.enqueue(neighbor, distance);
            }
        }
    }
    
    return distances;
}

// Test graph
const graph = {
    'A': [['B', 4], ['C', 2]],
    'B': [['C', 1], ['D', 5]],
    'C': [['D', 8], ['E', 10]],
    'D': [['E', 2]],
    'E': []
};

console.log(dijkstra(graph, 'A'));
// {A: 0, B: 4, C: 2, D: 9, E: 11}`,
            explanation: 'JavaScript Dijkstra with custom priority queue',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <limits>
using namespace std;

/**
 * Dijkstra's shortest path algorithm
 * Time: O((V + E) log V), Space: O(V)
 */
unordered_map<int, int> dijkstra(
    unordered_map<int, vector<pair<int, int>>>& graph, 
    int start
) {
    unordered_map<int, int> distances;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
    
    // Initialize distances
    for (auto& [vertex, _] : graph) {
        distances[vertex] = INT_MAX;
    }
    distances[start] = 0;
    pq.push({0, start});  // {distance, vertex}
    
    while (!pq.empty()) {
        auto [currentDist, current] = pq.top();
        pq.pop();
        
        // Skip if we've found a better path
        if (currentDist > distances[current]) continue;
        
        // Check neighbors
        for (auto [neighbor, weight] : graph[current]) {
            int distance = currentDist + weight;
            
            // Found shorter path
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.push({distance, neighbor});
            }
        }
    }
    
    return distances;
}

int main() {
    unordered_map<int, vector<pair<int, int>>> graph = {
        {0, {{1, 4}, {2, 2}}},
        {1, {{2, 1}, {3, 5}}},
        {2, {{3, 8}, {4, 10}}},
        {3, {{4, 2}}},
        {4, {}}
    };
    
    auto result = dijkstra(graph, 0);
    for (auto [vertex, dist] : result) {
        cout << vertex << ": " << dist << endl;
    }
    
    return 0;
}`,
            explanation: 'C++ Dijkstra using priority_queue (min-heap)',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class Dijkstra {
    /**
     * Dijkstra's shortest path algorithm
     * Time: O((V + E) log V), Space: O(V)
     */
    public static Map<Integer, Integer> dijkstra(
        Map<Integer, List<int[]>> graph, 
        int start
    ) {
        Map<Integer, Integer> distances = new HashMap<>();
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            Comparator.comparingInt(a -> a[0])
        );
        
        // Initialize distances
        for (int vertex : graph.keySet()) {
            distances.put(vertex, Integer.MAX_VALUE);
        }
        distances.put(start, 0);
        pq.offer(new int[]{0, start});  // {distance, vertex}
        
        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int currentDist = current[0];
            int currentVertex = current[1];
            
            // Skip if we've found a better path
            if (currentDist > distances.get(currentVertex)) continue;
            
            // Check neighbors
            for (int[] edge : graph.getOrDefault(currentVertex, new ArrayList<>())) {
                int neighbor = edge[0];
                int weight = edge[1];
                int distance = currentDist + weight;
                
                // Found shorter path
                if (distance < distances.get(neighbor)) {
                    distances.put(neighbor, distance);
                    pq.offer(new int[]{distance, neighbor});
                }
            }
        }
        
        return distances;
    }
    
    public static void main(String[] args) {
        Map<Integer, List<int[]>> graph = new HashMap<>();
        graph.put(0, Arrays.asList(new int[]{1, 4}, new int[]{2, 2}));
        graph.put(1, Arrays.asList(new int[]{2, 1}, new int[]{3, 5}));
        graph.put(2, Arrays.asList(new int[]{3, 8}, new int[]{4, 10}));
        graph.put(3, Arrays.asList(new int[]{4, 2}));
        graph.put(4, new ArrayList<>());
        
        Map<Integer, Integer> result = dijkstra(graph, 0);
        System.out.println(result);
    }
}`,
            explanation: 'Java Dijkstra using PriorityQueue for efficient min extraction',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'graph', params: { algorithm: 'bfs' } },
      playgroundInitialCode: {
        python: `# Implement graph traversal
class Graph:
    def __init__(self):
        self.graph = {}
    
    def add_edge(self, u, v):
        # Your code here
        pass

g = Graph()
g.add_edge(0, 1)`,
        javascript: `class Graph {
    constructor() {
        this.graph = new Map();
    }
    
    addEdge(u, v) {
        // Your code here
    }
}

const g = new Graph();
g.addEdge(0, 1);`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Graph {
public:
    void addEdge(int u, int v) {
        // Your code here
    }
};

int main() {
    Graph g;
    g.addEdge(0, 1);
    return 0;
}`,
        java: `import java.util.*;

class Graph {
    public void addEdge(int u, int v) {
        // Your code here
    }
    
    public static void main(String[] args) {
        Graph g = new Graph();
        g.addEdge(0, 1);
    }
}`,
      },
    },
  },
  {
    _id: '11',
    meta: {
      title: 'Recursion',
      slug: 'recursion',
      category: 'DSA',
      tags: ['algorithms', 'recursion', 'divide-and-conquer'],
      estimatedTime: 40,
    },
    content: {
      beginner: {
        markdownText: `
# Recursion - Functions Calling Themselves 🔄

Recursion is when a function calls itself to solve a problem by breaking it into smaller subproblems!

## What is Recursion?

A function that calls itself with:
1. **Base case**: When to stop
2. **Recursive case**: Call itself with smaller input

## Classic Examples

- Factorial: n! = n × (n-1)!
- Fibonacci: fib(n) = fib(n-1) + fib(n-2)
- Tree traversal
- Divide and conquer algorithms

## Real-World Uses

- File system navigation
- JSON parsing
- Fractal generation
- Game AI (minimax)
        `,
        analogy: "Recursion is like Russian nesting dolls - each doll contains a smaller version of itself until you reach the smallest one!",
        codeSnippets: [
          {
            language: 'python',
            code: `def factorial(n):
    """Calculate n! recursively"""
    # Base case
    if n <= 1:
        return 1
    # Recursive case
    return n * factorial(n - 1)

print(factorial(5))  # 120

def fibonacci(n):
    """Calculate nth Fibonacci number"""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(6))  # 8

def sum_array(arr):
    """Sum array elements recursively"""
    if len(arr) == 0:
        return 0
    return arr[0] + sum_array(arr[1:])

print(sum_array([1, 2, 3, 4]))  # 10`,
            explanation: 'Python recursion with base and recursive cases',
          },
          {
            language: 'javascript',
            code: `function factorial(n) {
    // Calculate n! recursively
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);  // Recursive case
}

console.log(factorial(5));  // 120

function fibonacci(n) {
    // Calculate nth Fibonacci number
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));  // 8

function sumArray(arr) {
    // Sum array elements recursively
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4]));  // 10`,
            explanation: 'JavaScript recursion - each call waits for smaller calls to complete',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

// Calculate n! recursively
int factorial(int n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);  // Recursive case
}

// Calculate nth Fibonacci number
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Sum array elements recursively
int sumArray(vector<int>& arr, int index = 0) {
    if (index >= arr.size()) return 0;
    return arr[index] + sumArray(arr, index + 1);
}

int main() {
    cout << factorial(5) << endl;  // 120
    cout << fibonacci(6) << endl;  // 8
    
    vector<int> arr = {1, 2, 3, 4};
    cout << sumArray(arr) << endl;  // 10
    
    return 0;
}`,
            explanation: 'C++ recursion - uses call stack to track function calls',
          },
          {
            language: 'java',
            code: `public class Recursion {
    // Calculate n! recursively
    public static int factorial(int n) {
        if (n <= 1) return 1;  // Base case
        return n * factorial(n - 1);  // Recursive case
    }
    
    // Calculate nth Fibonacci number
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Sum array elements recursively
    public static int sumArray(int[] arr, int index) {
        if (index >= arr.length) return 0;
        return arr[index] + sumArray(arr, index + 1);
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(5));  // 120
        System.out.println(fibonacci(6));  // 8
        System.out.println(sumArray(new int[]{1, 2, 3, 4}, 0));  // 10
    }
}`,
            explanation: 'Java recursion - method calls itself until base case is reached',
          },
        ],
      },
      intermediate: {
        markdownText: `
# Recursion - Backtracking 🎯

Backtracking is a recursive technique for solving problems by trying possibilities and undoing (backtracking) when they don't work!

## Backtracking Pattern

1. Choose an option
2. Explore with that choice
3. If it doesn't work, undo (backtrack)
4. Try next option

## Classic Problems

- N-Queens problem
- Sudoku solver
- Maze solving
- Permutations and combinations

## Time Complexity

Often exponential O(2ⁿ) or O(n!), but pruning helps!
        `,
        timeComplexityAnalysis: 'Backtracking explores decision trees. Complexity depends on branching factor and depth.',
        codeSnippets: [
          {
            language: 'python',
            code: `def permutations(arr):
    """Generate all permutations using backtracking"""
    result = []
    
    def backtrack(current, remaining):
        if not remaining:
            result.append(current[:])
            return
        
        for i in range(len(remaining)):
            # Choose
            current.append(remaining[i])
            # Explore
            backtrack(current, remaining[:i] + remaining[i+1:])
            # Undo (backtrack)
            current.pop()
    
    backtrack([], arr)
    return result

print(permutations([1, 2, 3]))
# [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

def subsets(arr):
    """Generate all subsets"""
    result = []
    
    def backtrack(start, current):
        result.append(current[:])
        
        for i in range(start, len(arr)):
            current.append(arr[i])
            backtrack(i + 1, current)
            current.pop()
    
    backtrack(0, [])
    return result

print(subsets([1, 2, 3]))`,
            explanation: 'Python backtracking for permutations and subsets',
          },
          {
            language: 'javascript',
            code: `function permutations(arr) {
    // Generate all permutations using backtracking
    const result = [];
    
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            // Choose
            current.push(remaining[i]);
            // Explore
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            backtrack(current, newRemaining);
            // Undo (backtrack)
            current.pop();
        }
    }
    
    backtrack([], arr);
    return result;
}

console.log(permutations([1, 2, 3]));

function subsets(arr) {
    // Generate all subsets
    const result = [];
    
    function backtrack(start, current) {
        result.push([...current]);
        
        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}

console.log(subsets([1, 2, 3]));`,
            explanation: 'JavaScript backtracking with choose-explore-undo pattern',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

void backtrack(vector<int>& current, vector<int>& remaining, 
               vector<vector<int>>& result) {
    if (remaining.empty()) {
        result.push_back(current);
        return;
    }
    
    for (int i = 0; i < remaining.size(); i++) {
        // Choose
        current.push_back(remaining[i]);
        
        // Explore
        vector<int> newRemaining;
        for (int j = 0; j < remaining.size(); j++) {
            if (j != i) newRemaining.push_back(remaining[j]);
        }
        backtrack(current, newRemaining, result);
        
        // Undo (backtrack)
        current.pop_back();
    }
}

vector<vector<int>> permutations(vector<int>& arr) {
    vector<vector<int>> result;
    vector<int> current;
    backtrack(current, arr, result);
    return result;
}

int main() {
    vector<int> arr = {1, 2, 3};
    auto result = permutations(arr);
    
    for (auto& perm : result) {
        for (int num : perm) {
            cout << num << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
            explanation: 'C++ backtracking for generating permutations',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class Backtracking {
    public static List<List<Integer>> permutations(int[] arr) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(new ArrayList<>(), arr, result);
        return result;
    }
    
    private static void backtrack(List<Integer> current, int[] arr, 
                                   List<List<Integer>> result) {
        if (current.size() == arr.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        for (int num : arr) {
            if (current.contains(num)) continue;
            
            // Choose
            current.add(num);
            // Explore
            backtrack(current, arr, result);
            // Undo (backtrack)
            current.remove(current.size() - 1);
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        List<List<Integer>> result = permutations(arr);
        
        for (List<Integer> perm : result) {
            System.out.println(perm);
        }
    }
}`,
            explanation: 'Java backtracking with ArrayList for tracking current path',
          },
        ],
      },
      expert: {
        markdownText: `
# Recursion - Optimization Techniques 🚀

Advanced recursion with memoization and tail recursion optimization!

## Memoization

Cache results to avoid redundant calculations:
- Fibonacci: O(2ⁿ) → O(n)
- Dynamic programming foundation

## Tail Recursion

When recursive call is the last operation:
- Can be optimized to iteration by compiler
- Saves stack space

## Stack Overflow Prevention

- Use iteration for deep recursion
- Increase stack size
- Use trampolining
        `,
        memoryOptimization: 'Tail recursion uses O(1) space vs O(n) for regular recursion. Memoization trades space for time.',
        systemDesignImplications: 'Recursion powers parsers, compilers, and tree-based algorithms in databases and file systems.',
        codeSnippets: [
          {
            language: 'python',
            code: `# Memoization decorator
def memoize(func):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper

@memoize
def fibonacci(n):
    """Fibonacci with memoization - O(n)"""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(100))  # Fast!

# Tail recursion
def factorial_tail(n, acc=1):
    """Tail recursive factorial"""
    if n <= 1:
        return acc
    return factorial_tail(n - 1, n * acc)

print(factorial_tail(5))  # 120

# Trampolining for deep recursion
def trampoline(func):
    """Execute bouncing functions"""
    result = func
    while callable(result):
        result = result()
    return result

def sum_to_n(n, acc=0):
    """Sum 1 to n with trampolining"""
    if n == 0:
        return acc
    return lambda: sum_to_n(n - 1, acc + n)

print(trampoline(lambda: sum_to_n(10000)))`,
            explanation: 'Python memoization, tail recursion, and trampolining techniques',
          },
          {
            language: 'javascript',
            code: `// Memoization
function memoize(func) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, func(...args));
        }
        return cache.get(key);
    };
}

const fibonacci = memoize(function(n) {
    // Fibonacci with memoization - O(n)
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(100));  // Fast!

// Tail recursion
function factorialTail(n, acc = 1) {
    // Tail recursive factorial
    if (n <= 1) return acc;
    return factorialTail(n - 1, n * acc);
}

console.log(factorialTail(5));  // 120

// Trampolining
function trampoline(func) {
    // Execute bouncing functions
    let result = func;
    while (typeof result === 'function') {
        result = result();
    }
    return result;
}

function sumToN(n, acc = 0) {
    // Sum 1 to n with trampolining
    if (n === 0) return acc;
    return () => sumToN(n - 1, acc + n);
}

console.log(trampoline(() => sumToN(10000)));`,
            explanation: 'JavaScript memoization and trampolining for stack-safe recursion',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <unordered_map>
#include <functional>
using namespace std;

// Memoization with map
unordered_map<int, long long> memo;

long long fibonacci(int n) {
    // Fibonacci with memoization - O(n)
    if (n <= 1) return n;
    
    if (memo.find(n) != memo.end()) {
        return memo[n];
    }
    
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
}

// Tail recursion
long long factorialTail(int n, long long acc = 1) {
    // Tail recursive factorial
    if (n <= 1) return acc;
    return factorialTail(n - 1, n * acc);
}

// Iterative version (compiler optimization of tail recursion)
long long factorialIterative(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

int main() {
    cout << fibonacci(50) << endl;  // Fast with memoization
    cout << factorialTail(20) << endl;
    cout << factorialIterative(20) << endl;
    
    return 0;
}`,
            explanation: 'C++ memoization with unordered_map and tail recursion',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class RecursionOptimization {
    // Memoization with HashMap
    private static Map<Integer, Long> memo = new HashMap<>();
    
    public static long fibonacci(int n) {
        // Fibonacci with memoization - O(n)
        if (n <= 1) return n;
        
        if (memo.containsKey(n)) {
            return memo.get(n);
        }
        
        long result = fibonacci(n - 1) + fibonacci(n - 2);
        memo.put(n, result);
        return result;
    }
    
    // Tail recursion
    public static long factorialTail(int n, long acc) {
        // Tail recursive factorial
        if (n <= 1) return acc;
        return factorialTail(n - 1, n * acc);
    }
    
    public static long factorialTail(int n) {
        return factorialTail(n, 1);
    }
    
    // Iterative version
    public static long factorialIterative(int n) {
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(fibonacci(50));  // Fast with memoization
        System.out.println(factorialTail(20));
        System.out.println(factorialIterative(20));
    }
}`,
            explanation: 'Java memoization and tail recursion with wrapper method',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'tree', params: { visualization: 'recursion-tree' } },
      playgroundInitialCode: {
        python: `def factorial(n):
    # Implement recursively
    pass

print(factorial(5))`,
        javascript: `function factorial(n) {
    // Implement recursively
}

console.log(factorial(5));`,
        cpp: `#include <iostream>
using namespace std;

int factorial(int n) {
    // Implement recursively
}

int main() {
    cout << factorial(5) << endl;
    return 0;
}`,
        java: `public class Main {
    public static int factorial(int n) {
        // Implement recursively
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(5));
    }
}`,
      },
    },
  },
  {
    _id: '12',
    meta: {
      title: 'Merge Sort',
      slug: 'merge-sort',
      category: 'DSA',
      tags: ['sorting', 'divide-and-conquer', 'algorithms'],
      estimatedTime: 35,
    },
    content: {
      beginner: {
        markdownText: `# Merge Sort - Divide and Conquer Sorting 🔀

Merge Sort divides the array into halves, sorts them, and merges them back together!

## How It Works
1. Divide array into two halves
2. Recursively sort each half
3. Merge the sorted halves

## Time Complexity
- Always O(n log n) - even in worst case!
- Space: O(n) for temporary arrays

## Real-World Uses
- External sorting (large files)
- Stable sorting (maintains order)
- Linked list sorting`,
        analogy: "Like organizing a deck of cards by splitting it in half, sorting each half, then merging them back in order!",
        codeSnippets: [
          {
            language: 'python',
            code: `def merge_sort(arr):
    """Merge sort - O(n log n) time, O(n) space"""
    if len(arr) <= 1:
        return arr
    
    # Divide
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    # Conquer (merge)
    return merge(left, right)

def merge(left, right):
    """Merge two sorted arrays"""
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

arr = [64, 34, 25, 12, 22, 11, 90]
print(merge_sort(arr))  # [11, 12, 22, 25, 34, 64, 90]`,
            explanation: 'Python merge sort with clean divide and conquer approach',
          },
          {
            language: 'javascript',
            code: `function mergeSort(arr) {
    // Merge sort - O(n log n) time, O(n) space
    if (arr.length <= 1) return arr;
    
    // Divide
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    // Conquer (merge)
    return merge(left, right);
}

function merge(left, right) {
    // Merge two sorted arrays
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(arr));  // [11, 12, 22, 25, 34, 64, 90]`,
            explanation: 'JavaScript merge sort with array slicing',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

vector<int> merge(vector<int>& left, vector<int>& right) {
    vector<int> result;
    int i = 0, j = 0;
    
    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) {
            result.push_back(left[i++]);
        } else {
            result.push_back(right[j++]);
        }
    }
    
    while (i < left.size()) result.push_back(left[i++]);
    while (j < right.size()) result.push_back(right[j++]);
    
    return result;
}

vector<int> mergeSort(vector<int> arr) {
    if (arr.size() <= 1) return arr;
    
    int mid = arr.size() / 2;
    vector<int> left(arr.begin(), arr.begin() + mid);
    vector<int> right(arr.begin() + mid, arr.end());
    
    left = mergeSort(left);
    right = mergeSort(right);
    
    return merge(left, right);
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    vector<int> sorted = mergeSort(arr);
    
    for (int num : sorted) {
        cout << num << " ";
    }
    return 0;
}`,
            explanation: 'C++ merge sort using vectors',
          },
          {
            language: 'java',
            code: `import java.util.*;

public class MergeSort {
    public static int[] mergeSort(int[] arr) {
        if (arr.length <= 1) return arr;
        
        int mid = arr.length / 2;
        int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));
        int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));
        
        return merge(left, right);
    }
    
    private static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result[k++] = left[i++];
            } else {
                result[k++] = right[j++];
            }
        }
        
        while (i < left.length) result[k++] = left[i++];
        while (j < right.length) result[k++] = right[j++];
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        int[] sorted = mergeSort(arr);
        System.out.println(Arrays.toString(sorted));
    }
}`,
            explanation: 'Java merge sort with array copying',
          },
        ],
      },
      intermediate: {
        markdownText: `# Merge Sort - In-Place Optimization

Optimize merge sort to reduce space complexity!

## Standard vs In-Place
- Standard: O(n) extra space
- In-place: O(1) extra space (more complex)

## Stability
Merge sort is stable - maintains relative order of equal elements

## Applications
- External sorting for large datasets
- Sorting linked lists (O(1) space!)
- Parallel sorting algorithms`,
        timeComplexityAnalysis: 'Always O(n log n) regardless of input. Divides problem in half (log n levels), merges n elements at each level.',
        codeSnippets: [
          {
            language: 'python',
            code: `def merge_sort_inplace(arr, left=0, right=None):
    """In-place merge sort"""
    if right is None:
        right = len(arr) - 1
    
    if left < right:
        mid = (left + right) // 2
        merge_sort_inplace(arr, left, mid)
        merge_sort_inplace(arr, mid + 1, right)
        merge_inplace(arr, left, mid, right)
    
    return arr

def merge_inplace(arr, left, mid, right):
    """Merge in-place"""
    temp = []
    i, j = left, mid + 1
    
    while i <= mid and j <= right:
        if arr[i] <= arr[j]:
            temp.append(arr[i])
            i += 1
        else:
            temp.append(arr[j])
            j += 1
    
    temp.extend(arr[i:mid+1])
    temp.extend(arr[j:right+1])
    
    for i, val in enumerate(temp):
        arr[left + i] = val

arr = [64, 34, 25, 12, 22, 11, 90]
merge_sort_inplace(arr)
print(arr)`,
            explanation: 'Python in-place merge sort modifying original array',
          },
          {
            language: 'javascript',
            code: `function mergeSortInPlace(arr, left = 0, right = arr.length - 1) {
    // In-place merge sort
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSortInPlace(arr, left, mid);
        mergeSortInPlace(arr, mid + 1, right);
        mergeInPlace(arr, left, mid, right);
    }
    return arr;
}

function mergeInPlace(arr, left, mid, right) {
    // Merge in-place
    const temp = [];
    let i = left, j = mid + 1;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++]);
        }
    }
    
    while (i <= mid) temp.push(arr[i++]);
    while (j <= right) temp.push(arr[j++]);
    
    for (let k = 0; k < temp.length; k++) {
        arr[left + k] = temp[k];
    }
}

const arr = [64, 34, 25, 12, 22, 11, 90];
mergeSortInPlace(arr);
console.log(arr);`,
            explanation: 'JavaScript in-place merge sort',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

void mergeInPlace(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp;
    int i = left, j = mid + 1;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp.push_back(arr[i++]);
        } else {
            temp.push_back(arr[j++]);
        }
    }
    
    while (i <= mid) temp.push_back(arr[i++]);
    while (j <= right) temp.push_back(arr[j++]);
    
    for (int k = 0; k < temp.size(); k++) {
        arr[left + k] = temp[k];
    }
}

void mergeSortInPlace(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSortInPlace(arr, left, mid);
        mergeSortInPlace(arr, mid + 1, right);
        mergeInPlace(arr, left, mid, right);
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    mergeSortInPlace(arr, 0, arr.size() - 1);
    
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}`,
            explanation: 'C++ in-place merge sort',
          },
          {
            language: 'java',
            code: `public class MergeSortInPlace {
    public static void mergeSortInPlace(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSortInPlace(arr, left, mid);
            mergeSortInPlace(arr, mid + 1, right);
            mergeInPlace(arr, left, mid, right);
        }
    }
    
    private static void mergeInPlace(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;
        
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }
        
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];
        
        for (int p = 0; p < temp.length; p++) {
            arr[left + p] = temp[p];
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        mergeSortInPlace(arr, 0, arr.length - 1);
        System.out.println(java.util.Arrays.toString(arr));
    }
}`,
            explanation: 'Java in-place merge sort',
          },
        ],
      },
      expert: {
        markdownText: `# Merge Sort - Advanced Techniques

External sorting and parallel merge sort!

## External Sorting
For data too large for memory:
1. Sort chunks that fit in memory
2. Merge sorted chunks from disk

## Parallel Merge Sort
Divide work across multiple threads/processors

## K-Way Merge
Merge k sorted arrays simultaneously`,
        memoryOptimization: 'Use iterative bottom-up approach to avoid recursion overhead. External sorting for massive datasets.',
        systemDesignImplications: 'Used in database systems for sorting large tables, MapReduce for distributed sorting, and file system operations.',
        codeSnippets: [
          {
            language: 'python',
            code: `import heapq

def k_way_merge(arrays):
    """Merge k sorted arrays using heap - O(n log k)"""
    heap = []
    result = []
    
    # Initialize heap with first element from each array
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    
    while heap:
        val, arr_idx, elem_idx = heapq.heappop(heap)
        result.append(val)
        
        # Add next element from same array
        if elem_idx + 1 < len(arrays[arr_idx]):
            next_val = arrays[arr_idx][elem_idx + 1]
            heapq.heappush(heap, (next_val, arr_idx, elem_idx + 1))
    
    return result

# Test k-way merge
arrays = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]
print(k_way_merge(arrays))  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
            explanation: 'Python k-way merge using heap for efficient merging',
          },
          {
            language: 'javascript',
            code: `class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }
    
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][0] >= this.heap[parentIndex][0]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    
    bubbleDown(index) {
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            
            if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }
            if (smallest === index) break;
            
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

function kWayMerge(arrays) {
    const heap = new MinHeap();
    const result = [];
    
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            heap.push([arrays[i][0], i, 0]);
        }
    }
    
    while (heap.heap.length > 0) {
        const [val, arrIdx, elemIdx] = heap.pop();
        result.push(val);
        
        if (elemIdx + 1 < arrays[arrIdx].length) {
            heap.push([arrays[arrIdx][elemIdx + 1], arrIdx, elemIdx + 1]);
        }
    }
    
    return result;
}

const arrays = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
console.log(kWayMerge(arrays));`,
            explanation: 'JavaScript k-way merge with custom min heap',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Element {
    int value;
    int arrayIndex;
    int elementIndex;
    
    bool operator>(const Element& other) const {
        return value > other.value;
    }
};

vector<int> kWayMerge(vector<vector<int>>& arrays) {
    priority_queue<Element, vector<Element>, greater<Element>> minHeap;
    vector<int> result;
    
    for (int i = 0; i < arrays.size(); i++) {
        if (!arrays[i].empty()) {
            minHeap.push({arrays[i][0], i, 0});
        }
    }
    
    while (!minHeap.empty()) {
        Element current = minHeap.top();
        minHeap.pop();
        result.push_back(current.value);
        
        if (current.elementIndex + 1 < arrays[current.arrayIndex].size()) {
            minHeap.push({
                arrays[current.arrayIndex][current.elementIndex + 1],
                current.arrayIndex,
                current.elementIndex + 1
            });
        }
    }
    
    return result;
}

int main() {
    vector<vector<int>> arrays = {{1, 4, 7}, {2, 5, 8}, {3, 6, 9}};
    vector<int> result = kWayMerge(arrays);
    
    for (int num : result) {
        cout << num << " ";
    }
    return 0;
}`,
            explanation: 'C++ k-way merge using priority queue',
          },
          {
            language: 'java',
            code: `import java.util.*;

class Element {
    int value;
    int arrayIndex;
    int elementIndex;
    
    Element(int value, int arrayIndex, int elementIndex) {
        this.value = value;
        this.arrayIndex = arrayIndex;
        this.elementIndex = elementIndex;
    }
}

public class KWayMerge {
    public static List<Integer> kWayMerge(List<List<Integer>> arrays) {
        PriorityQueue<Element> minHeap = new PriorityQueue<>(
            Comparator.comparingInt(e -> e.value)
        );
        List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < arrays.size(); i++) {
            if (!arrays.get(i).isEmpty()) {
                minHeap.offer(new Element(arrays.get(i).get(0), i, 0));
            }
        }
        
        while (!minHeap.isEmpty()) {
            Element current = minHeap.poll();
            result.add(current.value);
            
            if (current.elementIndex + 1 < arrays.get(current.arrayIndex).size()) {
                minHeap.offer(new Element(
                    arrays.get(current.arrayIndex).get(current.elementIndex + 1),
                    current.arrayIndex,
                    current.elementIndex + 1
                ));
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        List<List<Integer>> arrays = Arrays.asList(
            Arrays.asList(1, 4, 7),
            Arrays.asList(2, 5, 8),
            Arrays.asList(3, 6, 9)
        );
        System.out.println(kWayMerge(arrays));
    }
}`,
            explanation: 'Java k-way merge using PriorityQueue',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'sorting', params: { algorithm: 'merge' } },
      playgroundInitialCode: {
        python: `def merge_sort(arr):
    # Implement merge sort
    pass

arr = [64, 34, 25, 12, 22]
print(merge_sort(arr))`,
        javascript: `function mergeSort(arr) {
    // Implement merge sort
}

const arr = [64, 34, 25, 12, 22];
console.log(mergeSort(arr));`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeSort(vector<int> arr) {
    // Implement merge sort
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22};
    return 0;
}`,
        java: `public class Main {
    public static int[] mergeSort(int[] arr) {
        // Implement merge sort
        return arr;
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22};
    }
}`,
      },
    },
  },
  {
    _id: '13',
    meta: {
      title: 'Quick Sort',
      slug: 'quick-sort',
      category: 'DSA',
      tags: ['sorting', 'divide-and-conquer', 'algorithms'],
      estimatedTime: 35,
    },
    content: {
      beginner: {
        markdownText: `# Quick Sort - Fast Partitioning Sort ⚡

Quick Sort picks a pivot, partitions array around it, and recursively sorts!

## How It Works
1. Choose a pivot element
2. Partition: elements < pivot go left, > pivot go right
3. Recursively sort left and right partitions

## Time Complexity
- Best/Average: O(n log n)
- Worst: O(n²) - rare with good pivot selection
- Space: O(log n) for recursion

## Real-World Uses
- Most standard library sort implementations
- In-place sorting (low memory)
- Cache-friendly`,
        analogy: "Like organizing books by picking a middle book as reference, putting smaller books left, larger right, then repeating!",
        codeSnippets: [
          {
            language: 'python',
            code: `def quick_sort(arr):
    """Quick sort - O(n log n) average"""
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

arr = [64, 34, 25, 12, 22, 11, 90]
print(quick_sort(arr))  # [11, 12, 22, 25, 34, 64, 90]

# In-place version
def quick_sort_inplace(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pi = partition(arr, low, high)
        quick_sort_inplace(arr, low, pi - 1)
        quick_sort_inplace(arr, pi + 1, high)
    
    return arr

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

arr2 = [64, 34, 25, 12, 22, 11, 90]
quick_sort_inplace(arr2)
print(arr2)`,
            explanation: 'Python quick sort with list comprehension and in-place versions',
          },
          {
            language: 'javascript',
            code: `function quickSort(arr) {
    // Quick sort - O(n log n) average
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));

// In-place version
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSortInPlace(arr, low, pi - 1);
        quickSortInPlace(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

const arr2 = [64, 34, 25, 12, 22, 11, 90];
quickSortInPlace(arr2);
console.log(arr2);`,
            explanation: 'JavaScript quick sort with filter and in-place partitioning',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    quickSort(arr, 0, arr.size() - 1);
    
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}`,
            explanation: 'C++ in-place quick sort with Lomuto partition scheme',
          },
          {
            language: 'java',
            code: `public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1;
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        quickSort(arr, 0, arr.length - 1);
        System.out.println(java.util.Arrays.toString(arr));
    }
}`,
            explanation: 'Java in-place quick sort with classic partitioning',
          },
        ],
      },
      intermediate: {
        markdownText: `# Quick Sort - Pivot Selection Strategies

Different ways to choose pivot affect performance!

## Pivot Selection Methods
1. **First/Last element**: Simple but worst case on sorted data
2. **Middle element**: Better for partially sorted
3. **Random**: Avoids worst case
4. **Median-of-three**: Best average performance

## Partitioning Schemes
- **Lomuto**: Simpler, less efficient
- **Hoare**: More efficient, fewer swaps

## 3-Way Partitioning
For arrays with many duplicates`,
        timeComplexityAnalysis: 'Average O(n log n) with good pivot. Worst O(n²) with bad pivot (sorted array, always picking first/last).',
        codeSnippets: [
          {
            language: 'python',
            code: `import random

def quick_sort_random(arr, low=0, high=None):
    """Quick sort with random pivot"""
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pi = partition_random(arr, low, high)
        quick_sort_random(arr, low, pi - 1)
        quick_sort_random(arr, pi + 1, high)
    
    return arr

def partition_random(arr, low, high):
    # Random pivot
    random_idx = random.randint(low, high)
    arr[random_idx], arr[high] = arr[high], arr[random_idx]
    
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# 3-way partitioning for duplicates
def quick_sort_3way(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        lt, gt = partition_3way(arr, low, high)
        quick_sort_3way(arr, low, lt - 1)
        quick_sort_3way(arr, gt + 1, high)
    
    return arr

def partition_3way(arr, low, high):
    pivot = arr[low]
    lt = low
    gt = high
    i = low
    
    while i <= gt:
        if arr[i] < pivot:
            arr[lt], arr[i] = arr[i], arr[lt]
            lt += 1
            i += 1
        elif arr[i] > pivot:
            arr[i], arr[gt] = arr[gt], arr[i]
            gt -= 1
        else:
            i += 1
    
    return lt, gt

arr = [64, 34, 25, 12, 22, 11, 90, 22, 22]
quick_sort_3way(arr)
print(arr)`,
            explanation: 'Python quick sort with random pivot and 3-way partitioning',
          },
          {
            language: 'javascript',
            code: `function quickSortRandom(arr, low = 0, high = arr.length - 1) {
    // Quick sort with random pivot
    if (low < high) {
        const pi = partitionRandom(arr, low, high);
        quickSortRandom(arr, low, pi - 1);
        quickSortRandom(arr, pi + 1, high);
    }
    return arr;
}

function partitionRandom(arr, low, high) {
    // Random pivot
    const randomIdx = Math.floor(Math.random() * (high - low + 1)) + low;
    [arr[randomIdx], arr[high]] = [arr[high], arr[randomIdx]];
    
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Median-of-three pivot
function medianOfThree(arr, low, high) {
    const mid = Math.floor((low + high) / 2);
    
    if (arr[low] > arr[mid]) [arr[low], arr[mid]] = [arr[mid], arr[low]];
    if (arr[low] > arr[high]) [arr[low], arr[high]] = [arr[high], arr[low]];
    if (arr[mid] > arr[high]) [arr[mid], arr[high]] = [arr[high], arr[mid]];
    
    [arr[mid], arr[high - 1]] = [arr[high - 1], arr[mid]];
    return arr[high - 1];
}

const arr = [64, 34, 25, 12, 22, 11, 90];
quickSortRandom(arr);
console.log(arr);`,
            explanation: 'JavaScript quick sort with random and median-of-three pivot selection',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
using namespace std;

int partitionRandom(vector<int>& arr, int low, int high) {
    srand(time(0));
    int randomIdx = low + rand() % (high - low + 1);
    swap(arr[randomIdx], arr[high]);
    
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSortRandom(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partitionRandom(arr, low, high);
        quickSortRandom(arr, low, pi - 1);
        quickSortRandom(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    quickSortRandom(arr, 0, arr.size() - 1);
    
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}`,
            explanation: 'C++ quick sort with random pivot selection',
          },
          {
            language: 'java',
            code: `import java.util.Random;

public class QuickSortOptimized {
    private static Random rand = new Random();
    
    public static void quickSortRandom(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partitionRandom(arr, low, high);
            quickSortRandom(arr, low, pi - 1);
            quickSortRandom(arr, pi + 1, high);
        }
    }
    
    private static int partitionRandom(int[] arr, int low, int high) {
        int randomIdx = low + rand.nextInt(high - low + 1);
        swap(arr, randomIdx, high);
        
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        
        swap(arr, i + 1, high);
        return i + 1;
    }
    
    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        quickSortRandom(arr, 0, arr.length - 1);
        System.out.println(java.util.Arrays.toString(arr));
    }
}`,
            explanation: 'Java quick sort with randomized pivot for better average case',
          },
        ],
      },
      expert: {
        markdownText: `# Quick Sort - Advanced Optimizations

Hybrid approaches and tail recursion optimization!

## Introsort (Introspective Sort)
- Start with quick sort
- Switch to heap sort if recursion depth exceeds limit
- Used in C++ std::sort

## Tail Recursion Optimization
Eliminate one recursive call to save stack space

## Hybrid with Insertion Sort
Switch to insertion sort for small subarrays (< 10 elements)`,
        memoryOptimization: 'Tail recursion optimization reduces stack space from O(n) to O(log n). Iterative version uses explicit stack.',
        systemDesignImplications: 'Quick sort powers most standard library implementations. Used in databases for in-memory sorting.',
        codeSnippets: [
          {
            language: 'python',
            code: `def quick_sort_optimized(arr, low=0, high=None):
    """Optimized quick sort with tail recursion elimination"""
    if high is None:
        high = len(arr) - 1
    
    while low < high:
        # Small arrays: use insertion sort
        if high - low < 10:
            insertion_sort(arr, low, high)
            break
        
        pi = partition(arr, low, high)
        
        # Tail recursion optimization: recurse on smaller partition
        if pi - low < high - pi:
            quick_sort_optimized(arr, low, pi - 1)
            low = pi + 1
        else:
            quick_sort_optimized(arr, pi + 1, high)
            high = pi - 1
    
    return arr

def insertion_sort(arr, low, high):
    for i in range(low + 1, high + 1):
        key = arr[i]
        j = i - 1
        while j >= low and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

arr = [64, 34, 25, 12, 22, 11, 90, 5, 3, 1]
quick_sort_optimized(arr)
print(arr)`,
            explanation: 'Python optimized quick sort with tail recursion and insertion sort for small arrays',
          },
          {
            language: 'javascript',
            code: `function quickSortOptimized(arr, low = 0, high = arr.length - 1) {
    // Optimized quick sort with tail recursion elimination
    while (low < high) {
        // Small arrays: use insertion sort
        if (high - low < 10) {
            insertionSort(arr, low, high);
            break;
        }
        
        const pi = partition(arr, low, high);
        
        // Tail recursion optimization
        if (pi - low < high - pi) {
            quickSortOptimized(arr, low, pi - 1);
            low = pi + 1;
        } else {
            quickSortOptimized(arr, pi + 1, high);
            high = pi - 1;
        }
    }
    return arr;
}

function insertionSort(arr, low, high) {
    for (let i = low + 1; i <= high; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= low && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5, 3, 1];
quickSortOptimized(arr);
console.log(arr);`,
            explanation: 'JavaScript hybrid quick sort with insertion sort for small subarrays',
          },
          {
            language: 'cpp',
            code: `#include <iostream>
#include <vector>
using namespace std;

void insertionSort(vector<int>& arr, int low, int high) {
    for (int i = low + 1; i <= high; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= low && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSortOptimized(vector<int>& arr, int low, int high) {
    while (low < high) {
        if (high - low < 10) {
            insertionSort(arr, low, high);
            break;
        }
        
        int pi = partition(arr, low, high);
        
        if (pi - low < high - pi) {
            quickSortOptimized(arr, low, pi - 1);
            low = pi + 1;
        } else {
            quickSortOptimized(arr, pi + 1, high);
            high = pi - 1;
        }
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90, 5, 3, 1};
    quickSortOptimized(arr, 0, arr.size() - 1);
    
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}`,
            explanation: 'C++ optimized quick sort similar to std::sort implementation',
          },
          {
            language: 'java',
            code: `public class QuickSortExpert {
    private static final int INSERTION_SORT_THRESHOLD = 10;
    
    public static void quickSortOptimized(int[] arr, int low, int high) {
        while (low < high) {
            if (high - low < INSERTION_SORT_THRESHOLD) {
                insertionSort(arr, low, high);
                break;
            }
            
            int pi = partition(arr, low, high);
            
            if (pi - low < high - pi) {
                quickSortOptimized(arr, low, pi - 1);
                low = pi + 1;
            } else {
                quickSortOptimized(arr, pi + 1, high);
                high = pi - 1;
            }
        }
    }
    
    private static void insertionSort(int[] arr, int low, int high) {
        for (int i = low + 1; i <= high; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= low && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
    
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90, 5, 3, 1};
        quickSortOptimized(arr, 0, arr.length - 1);
        System.out.println(java.util.Arrays.toString(arr));
    }
}`,
            explanation: 'Java production-ready quick sort with hybrid approach',
          },
        ],
      },
    },
    interactive: {
      animationConfig: { type: 'sorting', params: { algorithm: 'quick' } },
      playgroundInitialCode: {
        python: `def quick_sort(arr):
    # Implement quick sort
    pass

arr = [64, 34, 25, 12, 22]
print(quick_sort(arr))`,
        javascript: `function quickSort(arr) {
    // Implement quick sort
}

const arr = [64, 34, 25, 12, 22];
console.log(quickSort(arr));`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

void quickSort(vector<int>& arr, int low, int high) {
    // Implement quick sort
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22};
    return 0;
}`,
        java: `public class Main {
    public static void quickSort(int[] arr, int low, int high) {
        // Implement quick sort
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22};
    }
}`,
      },
    },
  },
];

export const mockUser = {
  _id: 'user1',
  profile: {
    name: 'Alex Chen',
    email: 'alex@omnilearn.dev',
    bio: 'Aspiring software engineer',
    university: 'MIT',
  },
  gamification: {
    xp: 250,
    streak: 7,
    level: 3,
    badges: ['First Steps', 'Week Warrior'],
    heatMapData: [
      { date: '2024-12-01', count: 3 },
      { date: '2024-12-02', count: 5 },
      { date: '2024-12-03', count: 2 },
      { date: '2024-12-04', count: 4 },
      { date: '2024-12-05', count: 6 },
      { date: '2024-12-06', count: 3 },
      { date: '2024-12-07', count: 5 },
    ],
  },
  settings: {
    theme: 'dark',
    defaultLanguage: 'python',
    accessibilityMode: false,
  },
  progress: [
    {
      topicId: '1',
      status: 'active',
      currentSkillTier: 'beginner',
      quizScores: [80, 90],
    },
  ],
};
