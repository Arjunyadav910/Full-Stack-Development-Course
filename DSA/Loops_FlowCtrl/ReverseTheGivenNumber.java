public class ReverseTheGivenNumber {
    public static void main(String args[]){
        int n = 10899;
        int Rev = 0;
        while(n > 0){
            int LastDigit = n % 10;
            System.out.println(LastDigit);
            n = n / 10;
            Rev = (Rev * 10) + LastDigit;
            
        }
        System.out.println(Rev);
    }
}
