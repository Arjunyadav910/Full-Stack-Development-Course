package CondionalStatements;
import java.util.*;
public class SwitchStatement {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        switch(N){
            case 1:
                System.out.println("Mango shake");
                break;
            case 2:
                System.out.println("Samosa");
                break;
            case 3:
                System.out.println("Burger");
                break;
            default:
                System.out.println("Other items");
        }
    }
}
