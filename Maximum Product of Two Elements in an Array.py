class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        m = n = -math.inf
        
        for num in nums:
            if num >= m:
                n = m
                m = num
            elif num > n:
                n = num
        return (m-1) * (n-1)
        
