package FunctionsAndMethods;

public class CallByValue {

    public static void SwappedValue(int a, int b){ // passing the copy of original variable
        int temp = a;
        a = b;
        b = temp;
        System.out.println("a = "+a);
        System.out.println("a = "+b);
    }
    public static void main(String args[]){
        int a = 4;
        int b = 8;
        SwappedValue(a,b); // this will make a copy of a and b
    }
}
