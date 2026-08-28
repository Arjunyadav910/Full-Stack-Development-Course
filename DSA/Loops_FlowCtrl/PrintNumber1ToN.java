import java.util.Scanner;
public class PrintNumber1ToN {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int SV = 0;
        int n = sc.nextInt();
        while(SV <= n){
            System.out.println("Number 1 to N :"+SV);
            SV++;
        }
    }
    
}
