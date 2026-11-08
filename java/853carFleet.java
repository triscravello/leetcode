// There are n cars at given miles away from the starting line 0, traveling to reach the mile target.

// You are given two integer arrays position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hor.

// A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.
// A car fleet is a single car or a group of cars driving next to each other. THe speed of the car fleet is the minimum speed of any car in the fleet.

// If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

// Return the number of car fleets that will arrive at the destination.

import java.util.Arrays;

class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        int n = position.length;
        int[][] cars = new int[n][2];
        for (int i = 0; i < n; i++) {
            cars[i][0] = position[i];
            cars[i][1] = speed[i];
        }
        
        // Sort descending by position (closest to target first)
        Arrays.sort(cars, (a, b) -> Integer.compare(b[0], a[0]));
        
        int fleets = 0;
        double maxTime = 0;
        
        for (int[] car : cars) {
            double time = (double) (target - car[0]) / car[1];
            // If this car takes strictly more time than the fleet ahead of it,
            // it starts a new car fleet.
            if (time > maxTime) {
                fleets++;
                maxTime = time;
            }
        }
        
        return fleets;
    }
}