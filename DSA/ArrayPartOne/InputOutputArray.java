package ArrayPartOne;
import java.util.*;
public class InputOutputArray {
    public static void main(String args[]){

    int marks[]=new int[100];
    Scanner sc = new Scanner(System.in);
     

    // int phy;
    // phy = sc.nextInt();
    System.out.println("Length of Array : "+marks.length);


    marks[0]=sc.nextInt();
    marks[1]=sc.nextInt();
    marks[2]=sc.nextInt();

    System.out.println("Software Engineering : "+ marks[0]);
    System.out.println("E-Commerce : "+marks[1]);
    System.out.println("DBMS : "+marks[2]);

    int Percentage = (marks[0]+marks[1]+marks[2])/3;
    System.out.println("Percentage = "+Percentage+"%");
    }
    
}
 