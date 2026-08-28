package CondionalStatements;
import java.util.*; 
public class ElseIf {
    public static void main(String args[]){
        // int num = 20;
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        if(num>=18){
            System.out.println("Adult");
        }else if(num<=13&&num>18){
            System.out.println("Teenager");
        }else{
            System.out.println("Not an Adult nor a Teenager");
        }
    }
}
