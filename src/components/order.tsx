import React from 'react';

type Props = {
    orders: [OrderData];
    orderDetails: [OrderDetailData];
    skus: [SKUsData];
};

type OrderData = {
    _id: string;
    user_id: string;
    total: number;
    notes: string;
    status: string;
    //   orderDetails: [OrderDetailData];
    created_at: string;
    updated_at: string;
    deleted_at: string;
};

type OrderDetailData = {
    _id: string;
    Orders_idOrders: string,
    SKUs: [{
        _id: string,
        size: String,
        qty: number
    }]
};

type SKUsData = {
    _id: string;
    color: string;
    goldWeight: string;
    price: number;
    cost: number;
    idPictures: [string];
    created_at: string;
    updated_at: string;
    deleted_at: string;
};
//มั่วๆ
// function Order({ orders, orderDetails, skus }: Props) {
//     return (
//       <div>
//         {orders?.length > 0 ? (
//           orders.map((order, index) => (
//             <div key={order._id}>
//               {/* แสดงข้อมูลคำสั่งซื้อที่อยู่ที่นี่ */}
//               <h3>Order ID: {order._id}</h3>
//               <p>Total: {order.total}</p>
//               <p>Notes: {order.notes}</p>
//               <p>Status: {order.status}</p>

//               <h4>Order Details:</h4>
//               <ul>
//                 {orderDetails?.map((detail) => (
//                   <li key={detail.Orders_idOrders}>
//                     <p>Orders_idOrders: {order._id}</p>
//                     <p>Size: {detail.SKUs[0].size}</p>
//                     {/* แสดงข้อมูล orderDetail ที่อยู่ที่นี่ */}
//                     <ul>
//                       {detail.SKUs.map((sku) => (
//                         <li key={sku._id}>
//                           <p>SKU ID: {sku._id}</p>
//                           {skus.map((skuData) => (
//                             skuData._id === sku._id && (
//                               <div key={skuData._id}>
//                                 <p>Color: {skuData.color}</p>
//                                 <p>Gold Weight: {skuData.goldWeight}</p>
//                                 <p>Price: {skuData.price}</p>
//                                 <p>Cost: {skuData.cost}</p>
//                               </div>
//                             )
//                           ))}
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//               <br />
//             </div>
//           ))
//         ) : (
//           <p>No orders available</p>
//         )}
//       </div>
//     );
//   }

///2


//3 เหลือ sku 
function Order({ orders, orderDetails, skus }: Props) {
    return (
        <div>
            {orders?.length > 0 ? (
                orders.map((order) => (
                    <div key={order._id}>
                        <h3>Order ID: {order._id}</h3>
                        <p>Total: {order.total}</p>
                        <p>Notes: {order.notes}</p>
                        <p>Status: {order.status}</p>

                        <h4>Order Details:</h4>
                        <ul>
                            {orderDetails
                                .filter((detail) => detail.Orders_idOrders === order._id)
                                .map((detail) => (
                                    <li key={detail._id}>
                                        {/* <p>Size: {detail.SKUs[0].size}</p>
                      <p>Qty: {detail.SKUs[0].qty}</p>
                      <p>SKUs Array</p>
   */}
                                        <ul>
                                            {detail.SKUs.map((sku) => (
                                                <li key={sku._id}>
                                                    <p>SKU ID: {sku._id}</p>
                                                    <p>Size: {sku.size}</p>
                                                    <p>Qty: {sku.qty}</p>

                                                    {skus
                                                        .filter((skuData) => skuData._id ===  sku._id)
                                                        .map((skuData) => (
                                                            <div key={skuData._id}>
                                                                <p>Color: {skuData.color}</p>
                                                                <p>Gold Weight: {skuData.goldWeight}</p>
                                                                <p>Price: {skuData.price}</p>
                                                                <p>Cost: {skuData.cost}</p>
                                                            </div>
                                                        ))}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                        </ul>
                        <br />
                    </div>
                ))
            ) : (
                <p>No orders available</p>
            )}
        </div>
    );
}

//4
// function Order({ orders, orderDetails, skus }: Props) {
//     return (
//         <div>
//             {orders?.length > 0 ? (
//                 orders.map((order) => (
//                     <div key={order._id}>
//                         <h3>Order ID: {order._id}</h3>
//                         <p>Total: {order.total}</p>
//                         <p>Notes: {order.notes}</p>
//                         <p>Status: {order.status}</p>

//                         <h4>Order Details:</h4>
//                         <ul>
//                             {orderDetails
//                                 .filter((detail) => detail.Orders_idOrders === order._id)
//                                 .map((detail) => (
//                                     <li key={detail._id}>
//                                         {/* <p>Size: {detail.SKUs[0].size}</p>
//                       <p>Qty: {detail.SKUs[0].qty}</p>
//                       <p>SKUs Array</p>
//    */}
//                                         <ul>
//                                             {detail.SKUs.map((sku) => (
//                                                 <li key={sku._id}>
//                                                     <p>SKU ID: {sku._id}</p>
//                                                     <p>Size: {sku.size}</p>
//                                                     <p>Qty: {sku.qty}</p>

//                                                     {skus
//     .filter((skuData) => detail.SKUs.some((sku) => sku._id === skuData._id)) // กรอง SKUs ที่ตรงกับ Order Details ในรายการนี้
//     .map((skuData) => (
//         <div key={skuData._id}>
//             <p>Color: {skuData.color}</p>
//             <p>Gold Weight: {skuData.goldWeight}</p>
//             <p>Price: {skuData.price}</p>
//             <p>Cost: {skuData.cost}</p>
//         </div>
//     ))}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </li>
//                                 ))}
//                         </ul>
//                         <br />
//                     </div>
//                 ))
//             ) : (
//                 <p>No orders available</p>
//             )}
//         </div>
//     );
// }

export default Order;
