import java.util.*;

public class RomanNumberToInteger {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        String romanNumber = sc.nextLine();
        System.out.println(romanToInt(romanNumber));
    }

    public static int romanToInt(String s) {
        Map<Character, Integer> romanToIntMap = new HashMap<>();
        romanToIntMap.put('I', 1);
        romanToIntMap.put('V', 5);
        romanToIntMap.put('X', 10);
        romanToIntMap.put('L', 50);
        romanToIntMap.put('C', 100);
        romanToIntMap.put('D', 500);
        romanToIntMap.put('M', 1000);
        
        int result = 0;
        for (int i = 0; i < s.length(); i++) {
            int currentVal = romanToIntMap.get(s.charAt(i));
            int nextVal = (i < s.length() - 1) ? romanToIntMap.get(s.charAt(i + 1)) : 0;

            if (currentVal < nextVal) {
                result -= currentVal;
            } 
            else {
                result += currentVal;
            }
        }

        return result;
    }
}
