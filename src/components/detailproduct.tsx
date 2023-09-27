import React from 'react'

type Props = {
  datas: Data[];
};

type Data = {
  _id: string;
  type: string;
  productName: string;
  productDesc: string;
  thumbnail: string;
  idSKU: {
    _id: string;
  }[];
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

function detailproduct({ datas }: Props) {

  return (
    <div className="flex flex-col">
      {datas.length > 0 ? (
        datas.map((product) => (
          <><img src={product.thumbnail} alt={product.productName} className="w-full h-48 object-cover" /><div className="p-4 flex flex-col justify-between">
            <h3 className="text-lg font-bold">{product.productName}</h3>
            <p className="text-sm">{product.productDesc}</p>
            <span className="text-gray-500">{product.type}</span>
          </div></>
        ))
      ) : (
        <><img src="https://siriraj-foundation.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2023/07/4.png" className="w-full h-48 object-cover" /><div className="p-4 flex flex-col justify-between">
          <h3 className="text-lg font-bold">nothing</h3>
          <p className="text-sm">nothing</p>
          <span className="text-gray-500">nothing</span>
        </div></>
      )}
    </div>
  )
}

export default detailproduct