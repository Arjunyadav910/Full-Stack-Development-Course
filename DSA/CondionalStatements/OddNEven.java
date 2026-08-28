package CondionalStatements;
import java.util.Scanner;

public class OddNEven {
    public static void main(String args[]){
        // int number = 4;
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        if(number%2==0){
            System.out.println("Number is Even....");
        } else {
            System.out.println("Number is Odd....");
        }
        System.out.println(number);
    }
}
