package ArrayPartOne;
import java.util.*;
public class LargestNumber {
    public static int LargestNumber(int numbers[]){
        int LargestKey = Integer.MIN_VALUE;
        int SmallestKey= Integer.MAX_VALUE;
        for(int i = 0; i<numbers.length; i++){
            if(LargestKey < numbers[i] ){
                LargestKey = numbers[i];
            }
            if(SmallestKey > numbers[i]){
                SmallestKey = numbers[i];
            }
        }
        System.out.println("Smallest key is : " + SmallestKey);
        return LargestKey;
    }
    public static void main(String args[]){
        int numbers[] = {1, 2, 6, 3, 5};
        
        int LargestNumber=LargestNumber(numbers);
        System.out.println(LargestNumber);
    }
}
