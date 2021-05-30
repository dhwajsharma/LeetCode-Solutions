class Solution {
    public boolean isSumEqual(String firstWord, String secondWord, String targetWord) {
        return answer(firstWord) + answer(secondWord) == answer(targetWord);
    }
    
    private int answer(String s){
        int result = 0;
        for(int i = 0; i< s.length(); i++){
            result = result * 10 + (s.charAt(i) - 'a');
        }
        
        return result;
    }
}
