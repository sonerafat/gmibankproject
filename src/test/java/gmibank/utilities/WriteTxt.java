package gmibank.utilities;

import gmibank.pojos.Customer;
import gmibank.pojos.States;
import gmibank.pojos.User;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;

public class WriteTxt {

    public static void saveDataInFile(String fileName, Customer[] customers)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i=0;i<customers.length;i++)

                writer.append(customers[i].getSsn()+",\n");

            writer.close();
        } catch(Exception e){

        }
    }
    public static void saveDataInFileWithSSN(String fileName, Customer customers)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            writer.append(customers.getSsn());
            writer.close();
        } catch(Exception e){
        }
    }


    public static void saveDataInFileWithUserInfo(String fileName, User[] users)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i=0; i<users.length; i++)
            writer.append(users[i].getId()+", "+ users[i].getFirstName()+", "+users[i].getLastName()+", " +users[i].getAuthorities()+"\n");
            writer.close();
        } catch(Exception e){
        }
    }

    public static void saveDataInFileWithAllCustomerInfo(String fileName, Customer[] customers)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));


            for (int i =0; i<customers.length;i++){

                writer.append(customers[i].getFirstName()+" , "+customers[i].getLastName()+"\n"+customers[i].getCity()+" , "+customers[i].getAddress()+"\n");
                if(customers[i].getUser() != null)
                    writer.append(customers[i].getUser().getFirstName());
                if(customers[i].getCountry() != null)
                    writer.append(customers[i].getCountry().getName());

            }

            writer.close();
        } catch(Exception e){

        }
    }

    public static void saveAllStates(String fileName, States[] states)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i=0; i<states.length; i++)
                writer.append(String.valueOf(states[i].getId()+"\n"));

            writer.close();
        } catch(Exception e){

        }
    }

    public static void saveAllCustomers(String fileName, Customer[] customers)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i = 0; i < customers.length; i++){
                writer.append(customers[i].getSsn() + "," + customers[i].getFirstName() + ",");
            if (customers[i].getCountry() != null)
                writer.append(customers[i].getCountry().getName() + "," + customers[i].getCountry().getId() + "\n");

        }
            writer.close();
        } catch(Exception e){

        }
    }


}
