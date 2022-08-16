
package webapp;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import javax.servlet.ServletContext;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name="WebappMain", urlPatterns="/webapp")
public class WebappMain extends HttpServlet {

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response){
        response.addHeader("Access-Control-Allow-Origin", "*");
        String fileName = "htmlSections/" + request.getParameter("section") + ".html";
        ServletContext context = getServletContext();
        InputStream inputStream =context.getResourceAsStream(fileName);
        try{
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            String contents = new String();
            PrintWriter writer = response.getWriter();
            while( (contents = reader.readLine()) != null){
                writer.write(contents);
            }
            
        }
        catch(Exception e){
            e.printStackTrace();
        }
        
    }//end doGet()
    
    
}//end WebappMain class
