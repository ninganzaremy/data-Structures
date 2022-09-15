package com.challenges.arrays;
/* Merge Overlapping Intervals•
Write a function that takes in a non-empty array of arbitrary intervals,merges any overlapping intervals,and returns the new intervals in no particular order.Each interval interval is an array of two integers,with interval[0]as the start of the interval and interval[1]as the end of the interval.Note that back-to-back intervals aren'tconsidered to be overlapping.For example,[1,5]and[6,7]aren't overlapping;however,[1,6]and[6,7]are indeed overlapping.
Also note that the start of any particular interval will always be less than or equal to the end of that interval.

Sample Input
int[][] intervals = { { 1, 2 }, { 3, 5 }, { 4, 7 }, { 6, 8 }, { 9, 10 } };

Sample Output
{{1,2},{3,8},{9,10}}

Merge the intervals [3, 5], [4, 7], and [6, 8].
The intervals could be ordered differently. */

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

 public class Overlapping {

     private static final Logger logger = LoggerFactory.getLogger(Overlapping.class);
    public void mergeOverlappingIntervals(int[][] intervals) {
        if (intervals.length <= 1) {
            logger.debug(Arrays.deepToString(intervals));
        }
        Arrays.sort(intervals, (i1, i2) -> Integer.compare(i1[0], i2[0]));
        int[] previousInterval = intervals[0];
        List<int[]> mergedIntervals = new ArrayList<>();

        for (int i = 1; i < intervals.length; i++) {
            int[] currentInterval = intervals[i];
            /*
             * if currentInterval overlaps with previousInterval, we merge and update the
             * previousInterval. We don't add it right the way to the result as we need to
             * check it in the next interval
             */

            if (previousInterval[1] >= currentInterval[0]) {
                previousInterval[1] = Math.max(currentInterval[1], previousInterval[1]);

            } else {
                /*
                 * if previousInterval overlaps with currentInterval, we add previousInterval to
                 * the result and update previousInterval to currentInterval. We dont add it
                 * right the way to the result as we need to check it in the next interval
                 */
                mergedIntervals.add(previousInterval);
                previousInterval = currentInterval;

            }
            /*
             * if it's the last element of the interval Array , then we don't have
             * anymore comparisons to be done, so add the previousInterval to the results
             */
            if (i == intervals.length - 1) {
                mergedIntervals.add(previousInterval);

            }
        }
        logger.debug(Arrays.deepToString(mergedIntervals.toArray(new int[mergedIntervals.size()][])));
    }

}
