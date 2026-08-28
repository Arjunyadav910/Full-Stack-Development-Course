package ArrayPartOne;

public class PairsInArray {
    public static void ArrayPair(int arr[]){
        int totalpairs = 0;  //tp=(n*(n-1))/2
        for(int i = 0; i<arr.length; i++){
            int curr = arr[i];
            for(int j = i+1; j<arr.length; j++){
                System.out.print("(" + curr + "," + arr[j] + ")");
                totalpairs++;
            }
            System.out.println();
        }
        System.out.println("Total number of pairs is : " + totalpairs);

    }
    public static void main(String args[]){
        int arr[] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};

        ArrayPair(arr);
    }
}
