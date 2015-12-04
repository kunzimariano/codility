package com.lesson.two;

/**
 * Created by guillermo on 02/12/15.
 */
public class MissingInteger {
    public int solution(int[] A) {
        int minimum = 1;
        int[] B = new int[A.length];

        for(int i=0; i<A.length; i++) {
            if(A[i]-1 > 0 && A[i]-1 < A.length) {
                if(B[ A[i]-1 ] == 0) {
                    minimum++;
                }

                B[ A[i]-1 ]++;
            }
        }

        return minimum;
    }
}

/*
Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2

the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

Copyright 2009–2015 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

*/