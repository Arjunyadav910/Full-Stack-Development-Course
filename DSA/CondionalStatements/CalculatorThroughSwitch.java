package CondionalStatements;
import java.util.*;
public class CalculatorThroughSwitch {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the first operand value :");
        int op1 = sc.nextInt();
        System.out.print("Enter the second operand value :");
        int op2 = sc.nextInt();
        System.out.print("Enter the operator you want to perform(+, -, *, /, %) :");
        char Operator = sc.next().charAt(0);
        switch(Operator){
            case '+':
                System.out.print("Addition of operands is :");
                System.out.print(op1+op2);
                break;
            case '-':
                System.out.print("Substraction of operands is :");
                System.out.print(op1-op2);
                break;
            case '*':
                System.out.print("Multiplication of operands is :");
                System.out.print(op1*op2);
                break;
            case '/':
                System.out.print("Division of operands :");
                System.out.print(op1/op2);
                break;
            case '%':
                System.out.print("Modulation of opernads :");
                System.out.print(op1%op2);
                break;
            default:
                System.out.println("Perform another operation.....");
        }
        
    }
}
