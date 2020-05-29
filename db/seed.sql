create table inventory(
    product_id serial primary key,
    product_name varchar(60),
    price decimal,
    product_image text
);



-- insert into inventory(
--     product_name,
--     product_image,
--     price
-- ) values (
--     'Stuff',
--     'https://www.responsesource.com/content/uploads/2016/06/Stuff.jpg',
--     10.99
-- );