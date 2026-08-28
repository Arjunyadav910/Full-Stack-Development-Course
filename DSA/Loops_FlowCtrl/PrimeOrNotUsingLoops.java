import java.util.*;

public class PrimeOrNotUsingLoops {
        public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n = sc.nextInt();


        if(n == 2){
            System.out.println(n+" is a prime number");
        }else{
            boolean isPrime = true;
            for (int i = 2; i<=Math.sqrt(n); i++){
                if(n % i == 0){
                isPrime = false;
                }
            }


            if(isPrime == true){
                System.out.println(n +" is a prime number.");
            }else{
                System.out.println(n +" is not a prime number.");
            }
        }
        



        // int number = sc.nextInt();

        // if (number <= 1) {
        //     System.out.println(number + " is not a prime number.");
        //     return;
        // }

        // int i = 2;
        // boolean isPrime = true;

        // do {
        //     if (number % i == 0) {
        //         isPrime = false;
        //         break;
        //     }
        //     i++;
        // } while (i <= number / 2);

        // if (isPrime) {
        //     System.out.println(number + " is a prime number.");
        // } else {
        //     System.out.println(number + " is not a prime number.");
        // }
    }
}

