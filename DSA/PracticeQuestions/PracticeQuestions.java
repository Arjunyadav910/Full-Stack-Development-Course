import java.util.Scanner;

public class PracticeQuestions {
    public static void main(String args[]){

        // Question 1 : In a program, input 3 numbers : A,B and C.You have to output the average of these 3 numbers.

        Scanner sc = new Scanner(System.in);
        /*
        System.out.println("Enter the first number :");
        int A = sc.nextInt();
        System.out.println("Enter the Second NUmber :");
        int B = sc.nextInt();
        System.out.println("Enter the third number :");
        int C = sc.nextInt();
        float Average = (A+B+C)/3;
        System.out.println("Average of these 3 numbers is :"+Average);
        */

        // Questions 2 : In a program, input the side of a square. you have to output the area of the square
        
        /*
        System.out.println("Enter the side of a square :");
        int a = sc.nextInt();
        int SquareArea = a*a;
        System.out.println("Area of the square :"+SquareArea);
        */

        // Question 3 : Enter the cost of 3 items from the user (using float data type)-a pencil, a pen, and an eraser.You have to output the total cost of the items back to the user as their bill.(Add on : You can also try addding 18% gst to the items in the bill as an advanced problem)
        System.out.print("Enter the cost of a pencil :");
        float pencil = sc.nextFloat();
        System.out.print("Enter the cost of a pen :");
        float pen = sc.nextFloat();
        System.out.print("Enter the cost of an eraser :");
        float eraser = sc.nextFloat();
        System.out.print("Total cost of the items :");
        float bill = (pencil+pen+eraser);
        System.out.println(bill);

        float AddOnGST = (bill+(bill*0.18f));
        System.out.println(AddOnGST);
        // Question 4 : 
        /* 
        byte b = 4;
        char c = 'a';
        short s = 512;
        int i = 1000;
        float f = 3.14f;
        double d = 99.9954;
        
        double result = (f*b)+(i%c)-(d*s);
        System.out.println(result);
        */

        //  Question 5 :

        // int $ = 24;
        // System.out.println($);
    

    }
    
}
