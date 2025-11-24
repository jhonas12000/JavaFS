package org.example.daos;

import org.example.models.Author;
import org.example.utils.HibernateUtil;
import org.junit.jupiter.api.*;
import org.example.models.Book;

import java.util.List;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class BookDAOTest {
    
    private static BookDao dao;
    
    @BeforeAll 
    static void setup(){
        dao = new BookDao();
    }
    
    @Test
    @Order(1)
    void testInsertBook(){
        Book b = new Book();
        Author a = new Author("Test Author","Author Test",1000);
        b.setTitle("JUnit Test Book");

        
        dao.insertBook(b);

        Assertions.assertNotEquals(0,b.getId(),"ID should be generated after insert");
        
    }

    @Test
    @Order(2)
    void testSelectBookById(){
        Book b = dao.selectBookById(1);

        Assertions.assertNotNull(b);
        Assertions.assertEquals("JUnit Test Book", b.getTitle());
    }

    @Test
    @Order(3)
    void testFindAllBooks(){
        List<Book> books = dao.findAllBooks();
        //System.out.println(books);
        Assertions.assertFalse(books.isEmpty());
    }

    @Test
    void testUpdateBook(){
        Book b = dao.selectBookById(1);
        b.setTitle("Updated Title");

        dao.updateBook(b);

        Book updated = dao.selectBookById(1);

        Assertions.assertEquals("Updated Title",updated.getTitle());
    }


}
