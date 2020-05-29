insert into inventory (
    product_name,
    product_image,
    price
) values (
    $1, $2, $3
) returning * ;