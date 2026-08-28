package FunctionsAndMethods;
import java.util.*;
public class PrimeOrNot {


    public static boolean Isprime(int n){
        if(n == 2){
            return true;
        }
        for(int i = 2; i<=Math.sqrt(n); i++){
            if(n % i == 0){
                return false;
            }
        }
        return true;
    }
    public static void main(String args[]){
        System.out.println(Isprime(43));
    }
}

//     public static boolean IsPrime(int n){
//     if(n == 2){
//         return true;
//     }
//         for(int i = 2; i<n; i++){
//             if(n % i == 0){
//             return false;
//             }
//         }
//         return true;
//    }
//    public static void main(String args[]){
//     System.out.println(IsPrime(13));
//    }


//     public static void CheckPrime(int n){
//         boolean isPrime = true;
//         if(n == 2){
//             System.out.print("Is a Prime number...");
//         }else{
//         for(int i = 2; i<n; i++){
//             if(n % i==0){  // completely dividing
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime == true){
//             System.out.println("Prime Number..");
//         }else{
//             System.out.println("Not a prime number..");
//         }
//     }
        
//     }
//     public static void main(String args[]){
//         Scanner sc =new Scanner(System.in);
//         System.out.print("Enter the number : ");
//         int n = sc.nextInt();

//         CheckPrime(n);

//     }
// }
