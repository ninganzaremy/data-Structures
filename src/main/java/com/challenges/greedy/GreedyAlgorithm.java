package com.challenges.greedy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class GreedyAlgorithm {

    /*Minimum Waiting Time O f
        You're given a non-empty array of positive integers representing the amounts of
        time that specific queries take to execute. Only one query can be executed at a
        time, but the queries can be executed in any order.
        A query's waiting time is defined as the amount of time that it must wait before
        its execution starts. In other words, if a query is executed second, then its waiting
        time is the duration of the first query; if a query is executed third, then its waiting
        time is the sum of the durations of the first two queries.
        Write a function that returns the minimum amount of total waiting time for all of
        the queries. For example, if you're given the queries of durations [1, 4, 5]
        then the total waiting time if the queries were executed in the order of
        [5, 1, 4] would be (0) + (5) + (5 + 1) = 11 . The first query of
        duration 5 would be executed immediately, so its waiting time would be 0, the
        second query of duration 1 would have to wait 5 seconds (the duration of the
        first query) to be executed, and the last query would have to wait the duration of
        the first two queries before being executed.
        Note: you're allowed to mutate the input array.
        Sample Input: queries = [3, 2, 1, 2, 6]
        Sample Output
        17*/

    public int minimumWaitingTime(int[] queries) {
        Arrays.sort(queries);
        int lastWaitingTime = 0;
        int sumOfWaitingTime = 0;
        for (int i = 1; i < queries.length; i++) {
            lastWaitingTime += queries[i - 1];
            sumOfWaitingTime += lastWaitingTime;
        }
        return sumOfWaitingTime;
    }


    /*
    Class Photos
It's photo day at the local school, and you're the photographer assigned to take
class photos. The class that you'll be photographing has an even number of
students, and all these students are wearing red or blue shirts. In fact, exactly half
of the class is wearing red shirts, and the other half is wearing blue shirts. You're
responsible for arranging the students in two rows before taking the photo. Each
row should contain the same number of the students and should adhere to the
following guidelines:
• All students wearing red shirts must be in the same row.
• All students wearing blue shirts must be in the same row.
• Each student in the back row must be strictly taller than the student directly
in front of them in the front row.
You're given two input arrays: one containing the heights of all the students with
red shirts and another one containing the heights of all the students with blue
shirts. These arrays will always have the same length, and each height will be a
positive integer. Write a function that returns whether a class photo that
follows the stated guidelines can be taken.
Note: you can assume that each class has at least 2 students.
Sample Input
redShirtHeights= [5, 8, 1, 3, 4]
blueShirtHeights= [6, 9, 2, 4, 5]
Sample Output
true // Place all students with blue shirts in the back row.*/

    public boolean classPhotos(ArrayList<Integer> redShirtHeights, ArrayList<Integer> blueShirtHeights) {
        Collections.sort(redShirtHeights);
        Collections.sort(blueShirtHeights);
        boolean blueBack = true;
        boolean redBack = true;
        int diff = redShirtHeights.get(0) - blueShirtHeights.get(0);
        for (int i = 0; i < redShirtHeights.size(); i++) {
            if (redShirtHeights.get(i) <= blueShirtHeights.get(i)) {
                redBack = false;
            }
            if (redShirtHeights.get(i) >= blueShirtHeights.get(i)) {
                blueBack = false;
            }
        }
        return blueBack || redBack;

    }

}
