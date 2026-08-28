public class TypePromotion {
    public static void main(String args[]){
        // byte, short, char --> int
        // byte b = 5;
        // short s = 10;
        // char c = 'a';
        // int n = s + b + c;
        // System.out.print(n);

        // int, float, long, double --> double
        // int, float, long --> float ( long explicitely )
        // int, float --> float

        int n = 12;
        float F = 1.52f;
        long l = 45;
        // double d = 56;
        // float dou = n+F+l;
        long dou = (long)(n+F+l);
        System.out.print(dou);
        

    }
}
