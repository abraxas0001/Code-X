import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Topic from './models/Topic.js';
import User from './models/User.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Topic.deleteMany({});
    await User.deleteMany({});

    // Create Binary Search Topic
    const binarySearchTopic = new Topic({
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
print(f"Found at index: {result}")`,
              explanation: 'Simple implementation that keeps halving the search space',
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

## Standard Library Usage
- Python: \`bisect.bisect_left()\`
- C++: \`std::binary_search()\`, \`std::lower_bound()\`
- Java: \`Arrays.binarySearch()\`
          `,
          timeComplexityAnalysis: 'Each iteration eliminates half the remaining elements, leading to logarithmic time complexity. For n elements, maximum iterations = log₂(n).',
          codeSnippets: [
            {
              language: 'python',
              code: `import bisect

def binary_search_recursive(arr, target, left, right):
    if left > right:
        return -1
    
    mid = left + (right - left) // 2  # Prevents overflow
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

# Using standard library
arr = [1, 3, 5, 7, 9]
index = bisect.bisect_left(arr, 5)
print(f"Insert position: {index}")`,
              explanation: 'Recursive approach with overflow prevention',
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
5. **Square Root Calculation**

## Memory Optimization
- Iterative approach uses O(1) space vs O(log n) for recursive
- Cache-friendly due to sequential memory access in sorted arrays

## Edge Cases to Consider
- Empty array
- Single element
- Duplicate elements
- Target smaller/larger than all elements
- Integer overflow in mid calculation

## System Design Implications
- Database indexing (B-trees use binary search principles)
- Load balancing (finding optimal server)
- Version control (git bisect for bug finding)
          `,
          memoryOptimization: 'Use iterative approach to avoid call stack overhead. For very large datasets, consider memory-mapped files.',
          edgeCases: [
            'Empty array: return -1 immediately',
            'Overflow: use mid = left + (right - left) // 2',
            'Duplicates: specify whether to find first or last occurrence',
          ],
          systemDesignImplications: 'Binary search principles power database indexes, distributed systems (consistent hashing), and version control systems.',
          codeSnippets: [
            {
              language: 'cpp',
              code: `template<typename T>
int lower_bound(const vector<T>& arr, T target) {
    int left = 0, right = arr.size();
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}

// Search in rotated sorted array
int searchRotated(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) return mid;
        
        // Determine which half is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}`,
              explanation: 'Advanced variants with template and rotated array handling',
            },
          ],
        },
      },
      interactive: {
        animationConfig: {
          type: 'array',
          params: {
            initialArray: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            target: 7,
          },
        },
        playgroundInitialCode: {
          python: `def binary_search(arr, target):
    # Your code here
    pass

# Test
arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(arr, 7))`,
          javascript: `function binarySearch(arr, target) {
    // Your code here
}

// Test
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
    });

    await binarySearchTopic.save();

    // Create demo user
    const demoUser = new User({
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
        ],
      },
      progress: [
        {
          topicId: binarySearchTopic._id,
          status: 'active',
          currentSkillTier: 'beginner',
          quizScores: [80, 90],
        },
      ],
    });

    await demoUser.save();

    console.log('✅ Database seeded successfully!');
    console.log(`Demo User ID: ${demoUser._id}`);
    console.log(`Binary Search Topic ID: ${binarySearchTopic._id}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedData();
