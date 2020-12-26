package gmibank.utilities;

import gmibank.pojos.Country;
import gmibank.pojos.Customer;
import gmibank.pojos.States;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.List;

public class WriteToTxt {

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


    public static void saveDataInFileWithUserInfo(String fileName, Customer customer)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            writer.append(customer.getUser().getFirstName());

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
                writer.append(states[i].getName()+" , "+states[i].getId()+"\n");

            writer.close();
        } catch(Exception e){

        }
    }



    public static void saveAllStates2(String fileName, States[] states)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i=0; i<states.length; i++)
                writer.append(states[i].getName()+" , "+states[i].getId()+"\n");

            writer.close();
        } catch(Exception e){

        }
    }

    public static void saveAllCustomers(String fileName, Customer [] customers)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i=0; i<customers.length; i++) {
                writer.append(customers[i].getSsn() + " , " + customers[i].getFirstName() + ", ");
                if (customers[i].getCountry() !=null)
                    writer.append(customers[i].getCountry().getName() + " , " + customers[i].getCountry().getId() + ", \n");
            }
            writer.close();
        } catch(Exception e){

        }
    }
    public static void saveAllCountries(String fileName, Country[] countries)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i=0; i<countries.length; i++)
                writer.append(countries[i].getId()+"\n");

            writer.close();
        } catch(Exception e){

        }
    }
    public static void saveAllUSerDatasFromDataBase(String fileName, List<Object> allDatas)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i=0; i<allDatas.size(); i++)
                writer.append(allDatas.get(i)+"\n");

            writer.close();
        } catch(Exception e){

        }
    }
    public static void saveAllCustomersFromDB(String fileName, List <Object> allDatas)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i=0; i<allDatas.size(); i++) {
                writer.append(allDatas.get(i)+"\n");

            }
            writer.close();
        } catch(Exception e){

        }
    }



}

