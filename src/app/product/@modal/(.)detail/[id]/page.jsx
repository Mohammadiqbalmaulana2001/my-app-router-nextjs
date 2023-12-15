import { getData } from '../../../../../services/products'
import Modal from '../../../../../components/core/Modal'

export default async function DetailProductPage(props) {
    const { params } = props;
    const product = await getData("http://localhost:3000/api/product/?id=" +params.id)
    return (
        <Modal >
                <img src={product.data.image}  alt="" className="w-full object-cover aspect-square col-span-2"/>
                <div className='bg-white p-4 px-6'>
                    <h3>{product.data.title}</h3>
                    <p>price : {product.data.price}</p>
                </div>
        </Modal>
    )
}