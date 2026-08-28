package FunctionsAndMethods;
import java.util.*;
public class BinomialCoefficient{

    public static int Factorial(int N){
        int fact = 1;
        for(int i = 1; i<=N; i++){
            fact = fact * i;
        }
        return fact;
    }
    public static int BinCoeff(int n, int r){
        int fact_n = Factorial(n);
        int fact_r = Factorial(r);
        int fact_nmr = Factorial(n-r);

        int BinCoeff = fact_n / (fact_r * fact_nmr);
        // System.out.print("Binomial Coefficient is : "+BinCoeff);
        return BinCoeff;

    }
public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter n : ");
    int n = sc.nextInt();
    System.out.print("Enter r : ");
    int r = sc.nextInt();
    

    System.out.println(BinCoeff(5,2));


}
}