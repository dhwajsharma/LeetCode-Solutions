class Solution {
    public String maxValue(String n, int x) {
        
        for (int i = 0; i < n.length(); i++) {
            if (n.charAt(0) != '-' && n.charAt(i) - '0' < x || n.charAt(0) == '-' && n.charAt(i) - '0' > x)
                return n.substring(0, i) + x + n.substring(i);
        }
        return n + x;
    }
}
