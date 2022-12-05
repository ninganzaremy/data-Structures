import com.challenges.greedy.GreedyAlgorithm;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestCases {
    private static final Logger logger = LoggerFactory.getLogger(Test.class);

    @Test
    public void greedyAlgorithm() {
        logger.info("GreedyAlgorithm - STARTED");
        int[] queries = {3, 2, 1, 2, 6};
        GreedyAlgorithm algo = new GreedyAlgorithm();
        int sumOfWaitingTime = algo.minimumWaitingTime(queries);
        logger.debug("sumOfWaitingTime = " + sumOfWaitingTime);
        assertEquals(401, validPhone, "401");
        logger.info("GreedyAlgorithm - ENDS");
    }

}