package CondionalStatements;
import java.util.Scanner;
public class IncomeTaxCalculator {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int income = sc.nextInt();
        float tax;
        if(income<=500000){
            tax = 0;
            System.out.println("0% Tax applied");
        }else if(income>=500000&&income<1000000){
            tax = income * 0.2f;
            System.out.println("20% Tax applied : "+tax);
        }else{
            tax = income * 0.3f;
            System.out.println("30% Tax applied : "+tax);
        }
    }
}
