update inventory
set product_name = $2,
    product_image = $3,
    price = $4
where product_id = $1;