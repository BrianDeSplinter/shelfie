create table inventory(
    product_id serial primary key,
    product_name varchar(60),
    price decimal,
    product_image text
);