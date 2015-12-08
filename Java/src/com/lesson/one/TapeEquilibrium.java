package com.lesson.one;

/**
 * Created by guillermo on 14/11/15.
 * The following issues have been detected: wrong answers.
 *
 * For example, for the input [-1000, 1000] the solution returned a wrong answer (got 0 expected 2000).
 *
 * The following issues have been detected: wrong answers.
 * For example, for the input [1, 1] the solution returned a wrong answer (got 2147483647 expected 0).
 *
 */
public class TapeEquilibrium {
    private int minimumDifference = Integer.MAX_VALUE;

    private void checkMinimum(int a) {
        int difference = Math.abs(a);

        if(difference < this.minimumDifference) {
            this.minimumDifference = difference;
        }
    }

    public int solution(int[] A) {
        int[] B = new int[A.length-1];

        int leftSum = A[0];
        int rightSum = A[A.length-1];

        for(int i=1, j=A.length-1; i<A.length; i++, j--) {
            B[i-1] += leftSum;
            B[j-1] -= rightSum;

            if(j <= i) {
                this.checkMinimum(B[i-1]);
                this.checkMinimum(B[j-1]);
            }

            leftSum += A[i];
            rightSum += A[j-1];
        }

        return this.minimumDifference;
    }
}

/*
 A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.
 Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
 The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
 In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

 For example, consider array A such that:

 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3

 We can split this tape in four places:

 P = 1, difference = |3 − 10| = 7
 P = 2, difference = |4 − 9| = 5
 P = 3, difference = |6 − 7| = 1
 P = 4, difference = |10 − 3| = 7
 Write a function:

 class TapeEquilibrium { public int solution(int[] A); }

 that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.

 For example, given:

 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3

 the function should return 1, as explained above.

 Assume that:

 N is an integer within the range [2..100,000];
 each element of array A is an integer within the range [−1,000..1,000].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.

 Copyright 2009–2015 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/
