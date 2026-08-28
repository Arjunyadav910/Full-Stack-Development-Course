
import java.util.*;
public class HollowRectangle {
    // ma'am logic-------------------->
    public static void HollowRectangle(int tot_rows, int tot_cols){
        for(int i = 1; i<=tot_rows; i++){
            for(int j = 1; j<=tot_cols; j++){
                if(i == 1 || i == tot_rows || j == 1 || j == tot_cols){
                    System.out.print("*");
                }else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

    } 
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the total rows : ");
        int tot_rows = sc.nextInt();
        System.out.print("Enter the total columnns : ");
        int tot_cols = sc.nextInt();

        HollowRectangle(tot_rows,tot_cols);

        // self logic-------------------->
        // for(int i = 1; i<=n; i++){
        //     for(int j = 1; j<=5; j++){
        //         if(i>1 && i<4 && j>1 && j<5){
        //             System.out.print(" ");
        //         }else{
        //         System.out.print("*");
        //         }
        //     }
        //     System.out.println();
        // }
    }
}
