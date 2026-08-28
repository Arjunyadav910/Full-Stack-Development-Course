package FunctionsAndMethods;
import java.util.*;
public class FactorialOfNumber {

    public static void Factorial(int N, int fact){
        // int fact = 1; this is correct 
        for(int i = 1; i<=N; i++){
            fact = fact * i;
        }
        System.out.print("Factorial of the number is : "+fact);
    }
    public static void main(String args[]){
        int fact = 1;
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        Factorial(N,fact);
    }
}
