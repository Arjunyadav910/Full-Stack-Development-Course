package Pattern;

public class CharacterPattern {
    public static void main(String args[]){
        char chhh = 'A';
        for(int ch = 1; ch<=5; ch++){
            for(int chh = 1; chh<=ch; chh++){
                System.out.print(chhh++);
            }
            System.out.println();
        }
    }
}
