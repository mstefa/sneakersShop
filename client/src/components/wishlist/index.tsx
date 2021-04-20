import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { StyledWishListTable } from "./StyledWishList";
import { GET_WISHLIST } from "../../graphql/queries";
import { DELETE_FROM_WISHLIST } from "../../graphql/mutations";
import Loader from "../Loader";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/AuthProvider";
import { Link } from "react-router-dom";

const WishListTable = () => {
  const {userId} = useAuth()
  const { data, loading, error } = useQuery(GET_WISHLIST, {
    variables: { 
      userId:  userId && userId
    }
  });
  
  const [deletefromWishList] = useMutation(DELETE_FROM_WISHLIST, {
    refetchQueries: [
      {
        query: GET_WISHLIST,
        variables: {
          userId: userId && userId,
        },
      },
    ],
  });
  
  
  if (loading) return <Loader />;
  if (error)return <span> Error! {error?.message} </span>;
  
const wishList = data.wishList

const handleDelete = (productId) => {
    deletefromWishList({
      variables: {
        productId,
        userId,
      },
    });
}

  return (
    <StyledWishListTable>
      
      <div className='productContainer'>
        <h2>Your WishList</h2>
        <ul>
          { wishList?.map((w) => (
            <li>
              <div className='divImg'>
                <span>
                  <Link to={`/product/${w.product.id}`} className="white">
                    <img src={w.product.muestraimg} alt="muestraImg"/>
                  </Link>
                </span>
                <span>
                  <Link to={`/product/${w.product.id}`} className="white">
                    <strong>{w.product.name}</strong>
                  </Link>
                </span>
              </div>
              <div className='divText'>
              <span className="white">
                <strong>{w.product.brand.name}</strong>
              </span>
              <span>
              <i className="fas fa-trash-alt" onClick={() => {
                Swal.fire({
                  title: "Sure?",
                  text: "Please confirm if you want to remove this item from your wish list.",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete.",
                          showConfirmButton: true,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            handleDelete(
                              w.product.id
                              );
                            }
                          });
                        }}/>
              </span>
              </div>
            </li>
          )) }
        </ul>
      </div>
      <div className= 'footerFake'> </div>      
    </StyledWishListTable>
  );
};

export default WishListTable;
