const orderList = [
    {
        "id": "1",
        "category": "Furniture",
        "subCategory": "Tables",
        "segment": "Corporate",
        "productName": "Bevis Round Conference Table Top & Single Column Base",
        "orderDate": "2019/7/13",
        "region": "West",
        "profit": "$4",
        "sales": "$351",
        "image": "orderid-1.jpeg"
    },
    {
        "id": "2",
        "category": "Furniture",
        "subCategory": "Furnishings",
        "segment": "Home Office",
        "productName": "Deflect-o Glass Clear Studded Chair Mats",
        "orderDate": "2020/9/1",
        "region": "East",
        "profit": "$27",
        "sales": "$124"
    },
    {
        "id": "3",
        "category": "Furniture",
        "subCategory": "Chairs",
        "segment": "Home Office",
        "productName": "Global Value Steno Chair, Gray",
        "orderDate": "2020/9/1",
        "region": "East",
        "profit": "$15",
        "sales": "$61"
    },
    {
        "id": "4",
        "category": "Furniture",
        "subCategory": "Furnishings",
        "segment": "Corporate",
        "productName": "GE General Purpose, Extra Long Life, Showcase & Floodlight Incandescent Bulbs",
        "orderDate": "2021/12/23",
        "region": "Central",
        "profit": "($1)",
        "sales": "$2"
    },
    {
        "id": "5",
        "category": "Furniture",
        "subCategory": "Tables",
        "segment": "Corporate",
        "productName": "Bretford CR4500 Series Slim Rectangular Table",
        "orderDate": "2021/12/13",
        "region": "West",
        "profit": "$42",
        "sales": "$1,114"
    },
    {
        "id": "6",
        "category": "Furniture",
        "subCategory": "Furnishings",
        "segment": "Consumer",
        "productName": "Eldon ClusterMat Chair Mat with Cordless Antistatic Protection",
        "orderDate": "2020/7/9",
        "region": "East",
        "profit": "$20",
        "sales": "$182"
    }
];

const orderLineItemList = [
    { "orderId": "1", "id": "1", "item": "Table A", "profit": "$3", "sales": "$100" },
    { "orderId": "1", "id": "2", "item": "Table B", "profit": "$1", "sales": "$151" }
]

module.exports = { orderList, orderLineItemList };

