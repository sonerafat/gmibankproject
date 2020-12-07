package gmibank.utilities;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;


public class DateUtil {
    // MMMM dd, yyy  --> Nowember 15, 2020
    public static String todaysDate(){
        String today = new SimpleDateFormat("MMMM dd, yyy").format(new Date());
        return today ;
    }
    // MM-dd-yy     --> 11-15-20
    public static String todaysDate2(){
        String today = new SimpleDateFormat("MM-dd-yy").format(new Date());
        return today ;
    }
    // dd-MM-yy    --> 15-11-20
    public static String todaysDate3(){
        String today = new SimpleDateFormat("dd-MM-yy").format(new Date());
        return today ;
    }
    // yyyy-MM-dd hh:mm:ss   --> 2020-11-15 08:25:17
    public static String todaysDate4(){
        String today = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss ").format(new Date());
        return today ;
    }
    public static String todaysDate5() throws ParseException {
//        String today = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss ").format(new Date());
//        return today ;
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss a", Locale.US);
        Date date = format.parse("1/15/2014 9:57:03 AM");
        format = new SimpleDateFormat("HH:mm:ss");
        String dateString = format.format(date);

        return dateString;
    }
    public static String todaysDate6() {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss a");
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);
    }


}
