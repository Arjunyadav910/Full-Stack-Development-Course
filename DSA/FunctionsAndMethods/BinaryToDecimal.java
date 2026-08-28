package FunctionsAndMethods;
import java.util.*;
public class BinaryToDecimal {
    public static int B2D(int n){
        int decimal = 0;
        int Power = 0;
        int Lastdigit;
        while(n>0){
        Lastdigit = n % 10;
        n = n / 10;

        decimal = (int)(decimal + (Lastdigit*(Math.pow(2, Power))));
        Power++;
        }
        return decimal;
        // System.out.println(decimal);

    }
        
    public static void main(String args[]){
        System.out.println(B2D(111));
        
        
    }
}
