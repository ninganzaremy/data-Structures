package com.challenges;

import com.challenges.arrays.Overlapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {

        logger.info("mergeOverlappingIntervals - STARTED");
        int[][] intervals = {{1, 2}, {3, 5}, {4, 7}, {6, 8}, {9, 10}};
        Overlapping merge = new Overlapping();
        merge.mergeOverlappingIntervals(intervals);
        logger.info("mergeOverlappingIntervals - ENDS");
    }

}