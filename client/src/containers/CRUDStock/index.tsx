import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { StyledCRUDStock } from "./StyledCRUDStock";
import { StockAttributes } from "../../types";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { GET_ALL_STOCK } from "../../graphql/queries";
import { EDIT_STOCK } from "../../graphql/mutations";


export default function CRUDStock() {
  const history = useHistory();
  const [filters, setFilters] = React.useState({
    name: '',
    size: '',
    color: ''
  })

  const { data, loading, error: stockError } = useQuery(GET_ALL_STOCK);
  const [editStock] = useMutation(EDIT_STOCK, {
    refetchQueries: [{ query: GET_ALL_STOCK }],
  });

  if (loading) return <Loader />;
  if (stockError) return <span> error {stockError.message} </span>;

  const handleEdit = (
    productId,
    modelId,
    productName,
    modelSize,
    modelColor
  ) => {
    Swal.mixin({
      input: "number",
      confirmButtonText: "Change stock",
      showCancelButton: true,
      inputAttributes: {
        min: "0",
      },
      inputValidator: (value) => {
        if (!value) {
          return "You need to write a number!";
        }
      },
    })
      .queue([
        {
          title: "Change the stock of:",
          text: productName + ", Size " + modelSize + ", Color " + modelColor,
        },
      ])
      .then(async (result: any) => {
        if (result.value) {
          try {
            await editStock({
              variables: {
                productId,
                modelId,
                input: parseInt(result.value[0]),
              },
            });
            history.push("/admin/stock");
          } catch (e) {
            console.log(e);
          } finally {
          }

          Swal.fire({
            icon: "success",
            title: "Stock was changed",
            text:
              "Stock of " +
              productName +
              ", Size " +
              modelSize +
              ", Color " +
              modelColor +
              "was changed",
          });
        }
      });
  };

  function uniq(info: [StockAttributes]) {
    console.log(`info`, info)
    var seenName = {};
    var seenColor = {};
    var seenSize = {};
    let names = info.map(function(item) {
        if (seenName.hasOwnProperty(item.product?.name) ){
          return null 
        }else{
          seenName[item.product?.name] = true;
          return item.product?.name
        }
    });
    let colors = info.map(function(item) {
      if (seenColor.hasOwnProperty(item.model.color) ){
        return null 
      }else{
        seenColor[item.model.color] = true;
        return item.model.color
      }
    })
    let sizes = info.map(function(item) {
      if (seenSize.hasOwnProperty(item.model.size) ){
        return null 
      }else{
        seenSize[item.model.size] = true;
        return item.model.size
      }
    })

    return {names, colors, sizes}
  }
  
  let {names, colors, sizes} = uniq(data.allStock);
  names = names.filter((e:String)=> !!e)
  colors = colors.filter((e:String) => !!e)
  sizes = sizes.filter((e:String) => !!e)


  return (
    <StyledCRUDStock>
      <div className="stockContainer crud_container">
        <ul>
          <li className="titles">
            <h5>ID</h5>
            <h5>Name</h5>
            <h5>Color</h5>
            <h5>Size</h5>
            <h5>Stock</h5>
            <div></div>
          </li>
          <li>
            <h5> - </h5>
            <select onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
            setFilters({...filters, name: ev.target.value})
          }>
              <option value=''>All</option>
              { names.map(item =>
                <option>{item}</option>)}
            </select>
            <select onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
            setFilters({...filters, color: ev.target.value})
            }>
              <option value=''>All</option>
              { colors.map(item =>
                <option>{item}</option>)}
            </select>
            <select onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
            setFilters({...filters, size: ev.target.value})
            }>
              <option value=''>All</option>
              { sizes.map(item =>
                <option>{item}</option>)}
            </select>
            <h5> -  </h5>
            <div></div>
          </li>
          {data.allStock?.map((item: StockAttributes) => {
            if((item.product?.name === filters.name || filters.name.length < 1)
              && (item.model.size === filters.size || filters.size.length < 1)
              && (item.model.color === filters.color || filters.color.length < 1)
              ){
              return (<li key={item.id}>
                <span className="itemId">
                  <p className="itemId">ID</p>
                  {item.id}{" "}
                </span>
                <span className="itemName">
                  <p className="itemName">Nombre</p>
                  {item.product?.name}{" "}
                </span>
                <span className="itemColor">
                  <p className="itemColor">Color</p>
                  {item.model.color}{" "}
                </span>
                <span className="itemSize">
                  <p className="itemSize">Talle</p>
                  {item.model.size}{" "}
                </span>
                <span className="itemStock">
                  <p className="itemStock">Stock</p>
                  {item.stock}{" "}
                </span>
                <div className="buttons">
                  <button
                    type="submit"
                    onClick={() =>
                      handleEdit(
                        item.product.id,
                        item.model.id,
                        item.product.name,
                        item.model.size,
                        item.model.color
                      )
                    }
                  >
                    Modificar stock
                  </button>
                </div>
              </li>)}
              else{
                return <></>
              }
          })}
        </ul>
      </div>
      <div className="footerFake"></div>
    </StyledCRUDStock>
  );
}
