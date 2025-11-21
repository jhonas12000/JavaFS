# QC Questions on Hibernate

 - What is an ORM?
   
 - What is the benefit of using Hibernate over JDBC? 
 
 - What are the major classes / interfaces of Hibernate? 
   -
 - Tell me how you set up / configure hibernate? What about setting up entity mapping? What files are you editing, what goes in them, etc. 
   
 - Tell me about some of the JPA annotations you have worked with? What do they do? 
   
 - How do you specify multiplicity relationships with JPA annotations? 
  
 - In the session interface, what is the difference between... 
   - Save and persist methods? 
     
   - Get vs load methods? 
     - get() returns null if not found. Get is eager
     - load() throws ObjectNotFoundException if not found. Load is Lazy (a proxy object is returned until a method is invoked and then the proxy is fulfilled)
   - Update vs merge methods? 
 - What is the difference between Eager and Lazy fetching and how to setup either? 
   
 - Under what circumstances would your program throw a LazyInitializationException? 

 - What are the different ways to make a query using Hibernate? 
   
 - What is HQL? What makes it different from SQL? 
   
 - What is the Criteria API? Can you perform all DDL and DML commands with it?
   
 - What is caching? 
  
 - What is the difference between L1 and L2 cache? 
   -
 - How do you enable second level caching? 

 - Tell me about NamedQueries. 
 
 - Can you write native SQL with Hibernate? Is this a good idea? 

 - How to specify the SQL dialect? 
 
 - What data must be specified for the SessionFactory? 

 - What is hbm2ddl (.auto?)? 
 
 - How would you configure Hibernate to print to the console all SQL statements run? 

 - What are the different object states in Hibernate?
  
 - What methods move objects to different states? 

 - What is a proxy? When does the proxy resolve to the real object? 
 
 - What is the difference between Dynamic Insert and Dynamic Update? 
  
 - What is automatic dirty checking?
 
 - What is Transactional Write Behind? 

