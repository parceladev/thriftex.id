import { PropTypes } from 'prop-types';

const CardProduct = (props) => {
  const { product } = props;
  return (
    <div className="flex flex-col gap-5 border border-black dark:border-gray-600">
      <img className="h-72" src={product.file_path} alt={product.nama_item} />
      <p className="text-center text-black">{product.nama_item}</p>
      <p className="py-3 font-bold text-center text-white uppercase bg-black dark:bg-gray-300 dark:text-black">
        {product.check_result || 'waiting'}
      </p>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    file_path: PropTypes.string,
    nama_item: PropTypes.string,
    check_result: PropTypes.string,
  }).isRequired,
};
export default CardProduct;
