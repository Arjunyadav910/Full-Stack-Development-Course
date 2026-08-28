

public class InvertedRotatedHalfPyramid {
    public static void Inverted_Rotated_Half_Pyramid(int n){
        for(int i = 1; i<=n; i++){
            for(int j = 1; j<=n-i; j++){
                System.out.print(" ");
            }
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void main(String agrs[]){
        Inverted_Rotated_Half_Pyramid(10);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     for(int i = 1; i<=4; i++){
    //         for(int j = 1; j<=4; j++){
    //             if(j >= 5 - i){
    //             System.out.print("*");
    //             }else{
    //                 System.out.print(" ");
    //             }
    //         }
    //         System.out.println();
    //     }
    }
    
}
