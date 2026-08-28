package ArrayPartOne;

public class PassingArrayByReference {
    public static void update(int  marks[], int nonChangeable){
        nonChangeable = 33;
        for(int i = 0; i<marks.length; i++){
            marks[i] = marks[i] + 1;
        }
    }
    public static void main(String args[]){
        int marks[] = {32,33,34};
        int nonChangeable = 30;
        update(marks, nonChangeable);
        System.out.println(nonChangeable);
        for(int i = 0; i<marks.length; i++){
            System.out.print(marks[i]+ " ");
        }
        System.out.println();
    }
}
