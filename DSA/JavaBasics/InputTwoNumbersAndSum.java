import java.util.Scanner;

public class InputTwoNumbersAndSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        System.out.println("This is First number.....");
        int B = sc.nextInt();
        System.out.println("This is Second number.....");
        int Sum = A + B;
        System.out.println("Sum Of Two Numbers With Input From User :"+Sum);
    }
}
