package FunctionsAndMethods;

public class Decimal2Binary {

    public static void D2B(int n){
        int Pow = 0;
        int bin = 0;
        while(n>0){
            int rem = n % 2;
            n = n / 2;
            bin = bin + (int)(rem*(Math.pow(10, Pow)));
            Pow++;

        }
        System.out.println(bin);
    }
    public static void main(String args[]){
        D2B(7);
    }
}
