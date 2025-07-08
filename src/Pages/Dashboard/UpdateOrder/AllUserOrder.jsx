import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import CustomerAddress from './UserAddress';
import CartOrder from './UserBooking';
import ReactPaginate from 'react-paginate';

const AllUserOrder = () => {
    const [ordering, setOrder] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const ordersPerPage = 10;

    useEffect(() => {
        fetch(`https://server.virtualshopbd.com/userMy`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://server.virtualshopbd.com/manageAllOrderDelete/${id}`)
                    .then(() => {
                        setOrder(ordering.filter((order) => order._id !== id));
                        Swal.fire('Deleted!', 'Order has been deleted.', 'success');
                    })
                    .catch(() => Swal.fire('Error!', 'Failed to delete the order.', 'error'));
            }
        });
    };

    // Filter by search (phone number or email)
    const filteredOrders = ordering.filter(order =>
        order?.cus_email?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination logic
    const pageCount = Math.ceil(filteredOrders.length / ordersPerPage);
    const displayedOrders = filteredOrders.slice(currentPage * ordersPerPage, (currentPage + 1) * ordersPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="container mx-auto p-4">
            {/* Search Input */}
           <div className="mb-6 flex flex-col items-center justify-center text-center space-y-4">
  <span className={`px-4 py-2 text-white rounded ${ordering.length === 0 ? 'bg-red-500' : 'bg-green-500'}`}>
    {ordering.length === 0 ? "My Order Not Found" : "Customer Orders"}
  </span>
  <input
    type="text"
    placeholder="Search by Phone/Email"
    className="border p-2 rounded w-full max-w-md"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>


            <h1 className='text-2xl font-bold mb-6'>Total Order {filteredOrders.length}</h1>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Customer</th>
                            <th className="border p-2">Total Price</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Phone</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedOrders.map((order) => (
                            <tr key={order._id} className="border">
                                <td className="border p-2">{order.cus_name}</td>
                                <td className="border p-2">{order.total_amount}</td>
                                <td className="border p-2">{order.status}</td>
                                <td className="border p-2">{order.cus_email}</td>
                                <td className="border p-2 flex gap-2">
                                    <button onClick={() => setSelectedOrder(order)} className="bg-gray-500 text-white px-2 py-1 rounded">View</button>
                                    <button onClick={() => handleDelete(order._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="mt-4 flex justify-center">
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={"flex items-center space-x-2"}
                    previousClassName={"px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"}
                    nextClassName={"px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"}
                    activeClassName={"px-3 py-1 bg-blue-500 text-white rounded"}
                    pageLinkClassName={"px-3 py-1 border rounded hover:bg-gray-200"}
                />
            </div>

            {/* Order Details */}
            {selectedOrder && (
                <div className="mt-6 p-4 border rounded bg-gray-100">
                    <h2 className="text-xl font-bold mb-2">Order Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CustomerAddress order={selectedOrder} />
                        <CartOrder cart={selectedOrder.cartProducts} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllUserOrder;
