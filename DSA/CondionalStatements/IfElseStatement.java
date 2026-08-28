package CondionalStatements;

public class IfElseStatement {
    public static void main(String args[]){
        int age = 19;
        if(age >= 18){
            System.out.println("Adult : Able to vote and drive");
        }
        if(age > 13 && age < 18){
            System.out.println("Teenager");
        }
        else{
            System.out.println("You're not an Adult");
        }
    }

    
}