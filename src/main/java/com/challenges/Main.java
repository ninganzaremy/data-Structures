package com.challenges;

import com.challenges.arrays.NumberSum;
import com.challenges.arrays.Overlapping;
import com.challenges.greedy.GreedyAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {

        logger.info("mergeOverlappingIntervals - STARTED");
        int[][] intervals = {{1, 2}, {3, 5}, {4, 7}, {6, 8}, {9, 10}};
        Overlapping merge = new Overlapping();
        merge.mergeOverlappingIntervals(intervals);
        logger.info("mergeOverlappingIntervals - ENDS");

        logger.info("fourNumberSum - STARTED");
        int[] array = {7, 6, 4, -1, 1, 2};
        int targetSum = 16;
        NumberSum sum = new NumberSum();
        List<Integer[]> outputArrays = sum.fourNumberSum(array, targetSum);
        logger.debug(String.valueOf(outputArrays));
        logger.info("fourNumberSum - ENDS");

        logger.info("GreedyAlgorithm - STARTED");
        int[] queries = {3, 2, 1, 2, 6};
        GreedyAlgorithm algo = new GreedyAlgorithm();
        int sumOfWaitingTime = algo.minimumWaitingTime(queries);
        logger.debug("sumOfWaitingTime = " + sumOfWaitingTime);
        logger.info("GreedyAlgorithm - ENDS");
    }

}