public class ContinueStatement {
    public static void main(String args[]){
        // int n=0;
        // do{
            
        //     n++;
        //     if(n==3){
        //         continue;
        //     }
        //     System.out.println(n);
            
        // }while(n < 10);

        for (int n=0; n<=10; n++){
            if (n==5) {
                continue;
            }
            System.out.println(n);
        }
    }
}
