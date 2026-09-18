//GROUP BY: Groups rows that have the same values in specified columns into summary rows

//select country, count(*) from customers group by country;

//select country, count(*) as customer_count from customers group by country;

//Group by Having: Groups rows that have the same values in specified columns into summary rows and allows filtering of groups based on aggregate functions

//select country, count(*) as customer_count from customers group by country having count(*) > 10;

//select country, count(*) as customer_count from customers group by country having count(*) > 10 order by customer_count desc;