package FunctionsAndMethods;
import java.util.*;
public class SumWithParameters {
    public static void SumTwoNumbers(int a, int b){
        int Sum = a + b;
        System.out.println(Sum);
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        SumTwoNumbers(a,b);
    }
}
