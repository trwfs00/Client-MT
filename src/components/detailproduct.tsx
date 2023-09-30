import React from 'react'

type Props = {
  datas: Data[];
};

type ContentPageProps = {
  datas : Data;
}

type Data = {
  _id: string,
  type: string,
  productName: string,
  productDesc: string,
  thumbnail: string,
  idSKU: {
    _id: string;
  }[]
}

function detailproduct({ datas : { _id, type,productName,productDesc,thumbnail,idSKU } }: ContentPageProps) {

  if (!_id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <img src={thumbnail} alt={productName} className="w-full h-48 object-cover" /><div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-bold">{productName}</h3>
        <p className="text-sm">{productDesc}</p>
        <span className="text-gray-500">{type}</span>
      </div>
    </div>
  );
}

export default detailproduct