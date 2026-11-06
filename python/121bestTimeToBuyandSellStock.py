# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        min_price = float('inf')
        max_profit = 0

        for price in prices:
            # update minimum price seen on the ith day
            min_price = min(min_price, price)
            
            # calculate profit if sold today
            profit = price - min_price
            
            # update maximum profit seen so far
            max_profit = max(max_profit, profit)

        # return maximum profit to achieve from transaction
        return max_profit