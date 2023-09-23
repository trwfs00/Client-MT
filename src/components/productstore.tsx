import React from 'react'

type Props = {
    datas: [Data]
  }
  
  type Data = {
    _id: string
    type: string,
    productName: string,
    productDesc: string,
    thumbnail: {
        data: Buffer,
        contentType: string
    }[],
    idSKU:{
        _id: string
    }[],
    created_at: string,
    updated_at: string,
    deleted_at: string
  }

function productstore({ datas }: Props) {
    return (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">productName</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">productDesc</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">thumbnail</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-gray-400">created_at</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-gray-400">deleted_at</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {datas?.length > 0 ? (
                    datas.map((product, index) => {
                        return (
                            <tr >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{product._id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{product.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{product.productName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{product.productDesc}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{product.productDesc}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                <img src={`data:image/jpeg;base64,${product.thumbnail}`} alt="Product Thumbnail" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{product.created_at}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{product.created_at}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <p className='text-white p-4'>no product in store</p>
                )}
            </tbody>
        </table>
    )
}

export default productstore