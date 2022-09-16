package com.challenges.arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*Four Number Sum
        Write a function that takes in a non-empty array of distinct integers and an integer
        representing a target sum. The function should find all quadruplets in the array
        that sum up to the target sum and return a two-dimensional array of all these
        quadruplets in no particular order.
        If no four numbers sum up to the target sum, the function should return an empty
        array.
        Sample Input
        array = [7, 6, 4, -1, 1, 2]
        targetSum = 16
        Sample Output
        [[7, 6, 4,-1], [7, 6, 1, 2]] // the quadruplets could be ordered differently*/
public class NumberSum {
    private static final Logger logger = LoggerFactory.getLogger(NumberSum.class);

    public List<Integer[]> fourNumberSum(int[] array, int targetSum) {
        Arrays.sort(array);
        List<Integer[]> answer = new ArrayList<Integer[]>();
        for (int i = 0; i < array.length; i++) {
            for (int j = i + 1; j < array.length; j++) {
                int newTarget = targetSum - (array[i] + array[j]);
                int left = j + 1;
                int right = array.length - 1;
                while (left < right) {
                    logger.info("i " + array[i] + " j " + array[j] + " left " + array[left] + " right " + array[right]);
                    if (newTarget - (array[left] + array[right]) == 0) {
                        Integer[] ans = new Integer[]{array[i], array[j], array[left], array[right]};
                        answer.add(ans);
                        left++;
                        right--;

                    } else if (newTarget > ((array[left] + array[right]))) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        return answer;
    }
}
