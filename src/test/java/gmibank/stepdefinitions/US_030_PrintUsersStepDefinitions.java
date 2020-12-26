package gmibank.stepdefinitions;
import com.itextpdf.layout.element.*;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.element.IBlockElement;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPTable;
import gmibank.pojos.User;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Table;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.fasterxml.jackson.databind.ObjectMapper;
import gmibank.utilities.ConfigReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import static io.restassured.RestAssured.given;

public class US_030_PrintUsersStepDefinitions {
    Response responseAll;
    User [] users;

    @Given("user sets the users to response using {string}")
    public void user_sets_the_users_to_response_using(String url) {
        responseAll = given().headers(
                "Authorization",
                "Bearer " + ConfigReader.getProperty("token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .get(url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();
//        responseAll.prettyPrint();
    }

    @Given("user is deserializing all data to Java")
    public void user_is_deserializing_all_data_to_java() throws IOException, DocumentException {
        ObjectMapper obj = new ObjectMapper();
        users = obj.readValue(responseAll.asString(), User[].class);
        System.out.println(users.length);
    }

    @And("user sets User information to related files")
    public void user_sets_user_information_to_related_files() throws FileNotFoundException, MalformedURLException {
        String path = "src/test/resources/test_data/AllUserInfo.pdf";
        PdfDocument pdfDoc = new PdfDocument(new PdfWriter(path));
        Document doc = new Document(pdfDoc);

        String imageFile = "C:/Users/User/Desktop/TECHPROED/PROJECTS/GMI BANK/photo.jpg";
        ImageData data = ImageDataFactory.create(imageFile);
        Image img = new Image(data);
        img.scaleAbsolute(500, 200);
        doc.add(img);

        doc.add(new Paragraph(" "));

//      Font headerFont = new Font(Font.FontFamily.ZAPFDINGBATS, 24, Font.BOLD);
        Paragraph  header = new Paragraph("USER INFO");
        header.setBold();
        doc.add(header);

        Table table = new Table(3);
        table.addHeaderCell("FIRST NAME");
        table.addHeaderCell("LAST NAME");
        table.addHeaderCell("ROLE");
        doc.setBold();

        for (int i = 0; i < users.length; i++) {
         table.addCell(users[i].getFirstName());
         table.addCell(users[i].getLastName());
         table.addCell(users[i].getAuthorities().toString());
        }
        table.setWidth(500);
        doc.add(table);
        doc.close();

//      WriteTxt.saveDataInFileWithUserInfo("src/test/resources/test_data/UserInfo.txt", users);
    }
}
