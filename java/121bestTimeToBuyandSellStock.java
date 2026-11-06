// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int price : prices) {
            // update minimum price seen on the ith day
            minPrice = Math.min(minPrice, price);

            // calculate profit if sold today
            int profit = price - minPrice;

            // update maximum profit seen so far
            maxProfit = Math.max(maxProfit, profit);
        }

        // return maximum profit to achieve from transaction
        return maxProfit;
    }
}