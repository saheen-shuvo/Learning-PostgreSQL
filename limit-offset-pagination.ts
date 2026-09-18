//Pagination: Limit and Offset

//Limit: The limit parameter specifies the maximum number of items to return in a single response. It is used to control the size of the result set and can help improve performance by reducing the amount of data transferred over the network. For example, if you set a limit of 10, the API will return only 10 items in the response, even if there are more items available.

//select * from users limit 10; // Returns the first 10 users from the users table

//Offset: The offset parameter specifies the number of items to skip before starting to return results. It is used in conjunction with the limit parameter to implement pagination. For example, if you set an offset of 20 and a limit of 10, the API will skip the first 20 items and return the next 10 items in the response.

//select * from users limit 10 offset 20; // Skips the first 20 users and returns the next 10 users from the users table

//By using limit and offset together, you can retrieve data in smaller chunks, making it easier to navigate through large datasets and improving the overall user experience.