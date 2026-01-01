// Mock data for development without MongoDB


console.log("Loading mockData...");
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
                analogy: "An array is like a row of mailboxes - each has a unique index number, and you can go directly to any mailbox if you know its number. But to add a new mailbox in the middle, you'd have to move all the others!",
                visualizations: [
                    {
                        title: "The Mailbox Row 📬",
                        imageUrl: "/images/array_mailboxes.png",
                        description: "Just like mailboxes numbered 0, 1, 2... Arrays allow instant access to any item if you know its index. O(1) Access!"
                    },
                    {
                        title: "Theater Seating 🎬",
                        imageUrl: "/images/analogies/arrays.png",
                        description: "Seats are fixed in place. You can't just shove an extra seat in the middle of a row without inspecting everything else. Fixed Size!"
                    }
                ],
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
];

export const mockUser = {
    _id: 'user1',
    profile: {
        name: 'Guest User',
        email: 'guest@example.com',
        avatar: '/avatars/default.png',
        bio: 'Learning DSA one step at a time!',
        university: 'Self-Taught',
        socialLinks: {}
    },
    gamification: {
        xp: 1250,
        streak: 5,
        level: 3,
        badges: ['first-step', 'array-master'],
        heatMapData: [
            { date: '2024-03-20', count: 5 },
            { date: '2024-03-21', count: 8 },
            { date: '2024-03-22', count: 3 }
        ]
    },
    settings: {
        theme: 'dark',
        defaultLanguage: 'python',
        accessibilityMode: false
    },
    progress: [
        {
            topicId: '0',
            status: 'mastered',
            currentSkillTier: 'expert',
            quizScores: [100, 100]
        },
        {
            topicId: '1',
            status: 'active',
            currentSkillTier: 'beginner',
            quizScores: [80]
        }
    ]
};
