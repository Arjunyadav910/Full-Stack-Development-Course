import java.util.*;
public class BreakQuestion {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        // for(;;){
        //     System.out.println("Enter a number :");
        //     int N = sc.nextInt();
        //     if(N % 10 == 0){
        //         System.out.println("You have entered the multiple of 10.");
        //         break;
        //     }
        // }

        do{
            int n = sc.nextInt();
            if (n%10==0){
                System.out.println(n);
                break;
            }
        }while(true);
        
    }
}
