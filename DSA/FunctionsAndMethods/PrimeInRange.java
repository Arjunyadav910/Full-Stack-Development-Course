package FunctionsAndMethods;
import java.util.*;
public class PrimeInRange {

    public static boolean PrimeInRange(int n){
    
        for(int i = 2; i<=Math.sqrt(n); i++){
            if(n % i == 0){
                return false;
            } 
        }
        return true;
        
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the range : ");
        int R = sc.nextInt();

            for(int i = 2; i<=R; i++){
                if(PrimeInRange(i)){
                System.out.print(" "+i);
            }
        }

    }
}
