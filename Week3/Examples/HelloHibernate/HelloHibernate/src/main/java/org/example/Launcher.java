package org.example;

import org.example.daos.BookDao;
import org.example.models.Author;
import org.example.models.Book;

import java.util.List;

public class Launcher {
    private static BookDao bDAO = new BookDao();
    public static void main(String[] args) {


        Author a1 = new Author("Will", "Terry", 1998);
        Book b1 = new Book("CoolBook", "Fantasy", a1);

        bDAO.insertBook(b1);

        List<Book> books = bDAO.findAllBooks();

        for(Book b: books){
            System.out.println(b);
        }
    }



}