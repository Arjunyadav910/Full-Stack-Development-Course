import java.util.*;
public class PracticeQuestions3{
    public static void main(String args[]){

        // Question 1 Write a java progrsm to get a number from the user and print whether it is positive or negative.
        Scanner sc = new Scanner(System.in);
        /*
        int num = sc.nextInt();
        String state = (num>=0)?"Positive":"Negative";
        System.out.println("Entered number is :"+state);*/



        // Question 2
        // double temp = 103.5;
        /*if(temp > 100){
            System.out.println("You have a fewer...");
        
        }else {
            System.out.println("You don't have fewer");
        }*/


        //Question 3
        
        // int num = sc.nextInt();
        // switch(num){
        //     case 1: System.out.println("Mo45nday");
        //             break;
        //     case 2: System.out.println("Tuesday");
        //             break;
        //     case 3: System.out.println("Wednesday");
        //             break;
        //     case 4: System.out.println("Thursday");
        //             break;
        //     case 5: System.out.println("Friday");
        //             break;
        //     case 6: System.out.println("Saturday");
        //             break;
        //     case 7: System.out.println("Sunday");
        //             break;
        //     default: System.out.println("Invalid number...");
        // }

        // Question 4

        // int a = 63,b = 36;
        // boolean x = (a < b) ? true : false;
        // int y = (a > b) ? a : b;
        // System.out.println(x);
        // System.out.println(y);

        // Question 5

        int Year = sc.nextInt();
        if(Year%4==0){
            System.out.println("Not a leap year..");
        }else if(Year%100==0){
            System.out.println("Leap year..");
        }else if(Year%400==0){
            System.out.println("Leap Year..");
        }else{
            System.out.println("Not a leap year..");
        }
        
    }
}