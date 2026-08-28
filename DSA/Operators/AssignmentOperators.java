public class AssignmentOperators {
    public static void  main(String args[]){
        int a = 12;
        int b = 45;
        System.out.println(a=b); // a = 45 
        System.out.println(a+=b); // a = a + b --> 45+45=90
        System.out.println(a-=b); // a = a - b --> 90-45=45
        System.out.println(a*=b); // a = a * b --> 45*45=2025
        System.out.println(a/=b); // a = a / b --> 2025/45=45
    }
}
