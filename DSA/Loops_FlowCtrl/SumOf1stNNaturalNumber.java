import java.util.Scanner;
public class SumOf1stNNaturalNumber {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int Sum = 0;
        int N = 1;
        int FirstNatural = sc.nextInt();
        while(N <= FirstNatural){
            Sum = Sum + N;
            N++;
            System.out.println("Sum of first Natural Number :"+Sum);

        }
    }
}
