import java.util.*;

public class PangramOrNot {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        String str = sc.nextLine();
        System.out.println(pangramChecker(str));
    }

    public static boolean pangramChecker(String s) {
        if(s.length()<26)
            return false;
        String alphabets= "abcdefghijklmnopqrstuvwxyz";
        s=s.toLowerCase(); 
        int counter=0;
        for(int i=0;i<alphabets.length();i++)
        {
            if(s.contains(String.valueOf(alphabets.charAt(i))))
                counter+=1;
            else
                return false;
        }
        return (counter==26)?true:false; 
    }
}
