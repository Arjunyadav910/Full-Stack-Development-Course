package CondionalStatements;
import java.util.*;
public class PassOrFail {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int marks = sc.nextInt();

        String Result = (marks>=33)?"Pass":"Fail";
        System.out.println("Result based on the marks : "+Result);
    }
}
