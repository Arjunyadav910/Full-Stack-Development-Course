package ArrayPartOne;

public class BinarySearch {
    public static int BinarySearch(int numbers[], int key){
        int start = 0;
        int end = numbers.length-1;
        while(start <= end){
            int mid = (start + end) / 2;
            if(numbers[mid] == key){    // comparisons
                return mid;
            }
            if(numbers[mid] > key){  // left
                end = mid - 1;
            }else{
                start = mid + 1;  // right
            }
        }
        return -1;
    }
    public static void main(String args[]){
        int numbers[] = {2, 4, 6, 8, 10, 12, 14};
        int key = 4;
        System.out.println("Index of key value is : " + BinarySearch(numbers, key));
    }
}
