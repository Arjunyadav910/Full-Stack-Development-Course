

public class InvertedHalfPyramidNumbers {
    public static void Inverted_half_pyramid_numbers(int n){
        for(int i = 1; i<=n; i++){
            for(int j = 1; j<=n-i+1; j++){
                System.out.print(j);
            }
            System.out.println();
        }
        
    }
    public static void main(String args[]){
       Inverted_half_pyramid_numbers(5);
    }
}
