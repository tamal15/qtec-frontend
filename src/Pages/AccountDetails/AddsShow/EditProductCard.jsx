import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting_key = "87e8c93db3b7d5540df8a8f00585cbe9";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditProductCard = () => {
  const [product, setProduct] = useState({
    condition: "",
    productStatus: "",
    brand: "",
    title: "",
    model: "",
    edition: "",
    description: "",
    price: "",
    images: [],
  });
  const [imageFile, setImageFile] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://servers.sellflit.com/editcategoryproducts/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data?.data?.url) {
      return data.data.url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    let updatedProduct = { ...product };

    if (imageFile) {
      try {
        const imageUrl = await uploadImage(imageFile);
        updatedProduct.images = [imageUrl];
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Image Upload Failed",
          text: error.message,
        });
        return;
      }
    }

    fetch(`https://servers.sellflit.com/catehorypartsupdate/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Success",
            text: "Product updated successfully!",
          }).then(() => {
            navigate(-1);
          });
        }
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  return (
    <div>
      <div className="py-5 md:px-64">
        <div className="container">
          <div>
            <div
              className="relative login-form text-center shadow"
              style={{ borderRadius: "20px" }}
            >
              <Link to={-1}>
                <FaArrowLeft className="relative top-2 left-2 text-[#01c0c9] bg-primary text-3xl p-2 rounded-full duration-300 active:scale-90 cursor-pointer select-none" />
              </Link>
              <h2 className="mb-5 text-black text-3xl font-semibold">
                Update Product
              </h2>
              <form onSubmit={handleUpdate}>
                {[
                  "condition",
                  "brand",
                  "title",
                  "model",
                  
                  "description",
                  "price",
                ].map((field) => (
                  <input
                    key={field}
                    name={field}
                    value={product[field]}
                    onChange={handleChange}
                    className="input input-text border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                ))}
                <br />

                <input
                  type="file"
                  onChange={handleImageChange}
                  className="input-file border-[2px] border-[#01c0c9] hover:border-[#007cde] rounded-3xl px-5 py-2 w-full input-wrapper md:min-w-[450px] max-w-[20.5rem] mx-2 text-xl mt-2"
                />
                <br />
                <button
                  className="bg-[#01c0c9] font-semibold text-white mt-5 mb-10 px-6 py-2 text-xl rounded-2xl"
                  type="submit"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductCard;
