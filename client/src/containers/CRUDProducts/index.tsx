import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_PRODUCTS,
  GET_DELETED,
  GET_CATEGORIES,
  GET_BRANDS,
  GET_MODELS,
} from "../../graphql/queries";
import {
  DELETE_PRODUCT,
  UNDELETE_PRODUCT,
  ADD_PRODUCT,
  EDIT_STOCK,
} from "../../graphql/mutations";
import { StyledCRUDProducts } from "./StyledCRUDProducts";
import { ProductAttributes } from "../../types";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";

export default function CRUDProducts() {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const {
    data: deletedQuery,
    loading: loadingDeleted,
    error: errorDeleted,
  } = useQuery(GET_DELETED);
  const allProducts = data ? data.products : null;
  const deletedProducts = deletedQuery ? deletedQuery.deleted : null;
  const [editStock] = useMutation(EDIT_STOCK);
  const [createProduct, { error: errorMutationProduct }] = useMutation(
    ADD_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }],
    }
  );
  const { data: dataCat, loading: loadingCat, error: errorCat } = useQuery(
    GET_CATEGORIES
  );
  const {
    data: dataBrands,
    loading: loadingBrands,
    error: errorBrands,
  } = useQuery(GET_BRANDS);
  const { data: dataMod, loading: loadingMod, error: errorMod } = useQuery(
    GET_MODELS
  );
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DELETE_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }, { query: GET_DELETED }],
    }
  );
  const [undeleteProduct, { loading: loadingRestore }] = useMutation(
    UNDELETE_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }, { query: GET_DELETED }],
    }
  );

  // const { categories } = dataCat;
  // const { brand } = dataBrands;
  // const { models } = dataMod;
  if (
    loading ||
    loadingDeleted ||
    loadingDelete ||
    loadingRestore ||
    loadingBrands ||
    loadingCat ||
    loadingMod
  )
    return <Loader />;
  if (error || errorDeleted) return <span> error {error.message} </span>;

  const handleAddProduct = () => {
    let brandInputOptions = {};
    dataBrands?.brand?.map(
      (brand) => (brandInputOptions[brand.id] = brand.name)
    );

    const templateSelectCategory = (catName, catId) => {
      return `<div>
      <input style="height:1.5rem;width:1.5rem;" type="checkbox" id=${catName} name=${catName} value=${catId} >
      <label style="line-height:1.5;font-size:1.2rem;font-weight:bold;">${catName}</label>
      </input><br/></div>`;
    };
    let categoryInputOptions = dataCat?.categories?.map((category) => {
      return templateSelectCategory(category.name, category.id);
    });

    const templateSelectModel = (modelSize, modelColor, modelId) => {
      return `<div><input style="height:1.5rem;width:1.5rem;" type="checkbox" id=${modelId} name=${modelId} value=${modelId} >
      <label style="line-height:1.5;font-size:1.2rem;font-weight:bold;">${modelSize} - ${modelColor}</label>
      </input><br/></div>`;
    };
    let modelInputOptions = dataMod?.models?.map((model) => {
      return templateSelectModel(model.size, model.color, model.id);
    });

    Swal.mixin({
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      width: "36rem",
      progressSteps: ["1", "2", "3", "4", "5", "6", "7"],
    })
      .queue([
        {
          title: "New product",
          text: "Product name",
          input: "text",
          inputValidator: (value) => {
            if (!value) {
              return "You need to name your product.";
            }
          },
        },
        {
          title: "New product",
          text: "Product description",
          input: "text",
          inputValidator: (value) => {
            if (!value) {
              return "You need to describe your product.";
            }
          },
        },
        {
          title: "New product",
          text: "Product price",
          input: "number",
          inputAttributes: {
            min: "1",
          },
          inputValidator: (value) => {
            if (!value) {
              return "You need to set a price for your product.";
            }
          },
        },
        {
          title: "New product",
          text: "Product brand",
          input: "select",
          inputOptions: brandInputOptions,
        },
        {
          title: "Select product categories",
          html:
            '<div style="display:grid; grid-template-columns:1fr 1fr; grid-template-rows:auto;justify-items:start; justify-content: space-around;">' +
            categoryInputOptions.join("") +
            "</div>",
          preConfirm: () => {
            var checked = [];
            var checkboxes = document.querySelectorAll(
              "input[type=checkbox]:checked"
            ) as any;
            for (var i = 0; i < checkboxes.length; i++) {
              checked.push(checkboxes[i].value);
            }
            return checked;
          },
        },
        {
          title: "Select product models",
          html:
            '<div style="display:grid; grid-template-columns:1fr 1fr; grid-template-rows:auto;justify-items:start; justify-content: space-around;">' +
            modelInputOptions.join("") +
            "</div>",
          preConfirm: () => {
            var checked = [];
            var checkboxes = document.querySelectorAll(
              "input[type=checkbox]:checked"
            ) as any;
            for (var i = 0; i < checkboxes.length; i++) {
              checked.push(checkboxes[i].value);
            }
            return checked;
          },
        },
        {
          title: "Upload image",
          html: `<div style="display:grid; grid-template-columns:1fr; grid-template-rows:auto;justify-items:center; justify-content: space-around;">
          <input type="file" accept="image/*" id="imageCloud" aria-label='Upload your profile picture' multiple>
          </div>`,
          preConfirm: async () => {
            let imagesInCloud = [];
            const image: any = document.querySelector("#imageCloud");

            async function uploadFile(file) {
              const fd = new FormData();
              fd.append("upload_preset", "kvo7ryen");
              fd.append("tags", "browser_upload");
              fd.append("file", file);

              const url = `https://api.cloudinary.com/v1_1/ecommerceft09/upload`;
              await fetch(url, {
                method: "POST",
                body: fd,
              })
                .then((response) => response.json())
                .then((result) => {
                  imagesInCloud.push(result.secure_url);
                  return;
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }

            if (image) {
              for (let i = 0; i < image.files.length; i++) {
                await uploadFile(image.files[i]);
              }
            }
            return imagesInCloud;
          },
        },
      ])
      .then(async (result: any) => {
        if (result.value) {
          try {
            await createProduct({
              variables: {
                name: result.value[0],
                description: result.value[1],
                price: parseInt(result.value[2]),
                brandId: result.value[3],
                CategoriesId: result.value[4],
                ModelsId: result.value[5],
                muestraimg: result.value[6][0],
                detalleimg1: result.value[6][1],
                detalleimg2: result.value[6][2],
                detalleimg3: result.value[6][3],
              },
            }).then((res) => {
              const productId = res.data.createProduct.id;
              editStock({
                variables: {
                  productId,
                  modelId: "all",
                  input: 0,
                },
              });
            });
            Swal.fire({
              icon: "success",
              title: "Product added",
              text:
                "Product " +
                result.value[0] +
                " added successfully. Please check stock and images for this product.",
            });
          } catch (err) {
            console.log(err);
            return;
          }
        }
      });
  };

  const handleDelete = (id) => {
    deleteProduct({ variables: { id } });
  };

  const handleRestore = (id) => {
    undeleteProduct({ variables: { id } });
  };
  const handleReviews = (id) => {
    history.push(`/admin/productReviews/${id}`);
  };

  const handleEdit = (id) => {
    history.push(`/admin/editProduct/${id}`);
  };

  return (
    <StyledCRUDProducts>
      <div className="productContainer crud_container">
        <button className="addButton" onClick={handleAddProduct}>
          Add new product
        </button>
        <ul className="activeProducts">
          <li className="titles">
            <h5>ID</h5>
            <h5>Name</h5>
            <h5>Price</h5>
            <div></div>
          </li>
          {allProducts?.map((item: ProductAttributes) => (
            <li key={item.id}>
              <span className="id"> {item.id} </span>
              <span className="name"> {item.name} </span>
              <span className="price"> $ {item.price} </span>

              <div className="buttons">
                <i
                  onClick={() => handleReviews(item.id)}
                  className="far fa-star"
                />
                <i
                  onClick={() => handleEdit(item.id)}
                  className="fas fa-edit"
                />
                <i
                  onClick={() => handleDelete(item.id)}
                  className="fas fa-trash-alt"
                />
                {/* <button onClick={() => handleEdit(item.id)}> edit </button>
              <button onClick={() => handleDelete(item.id)}> delete </button> */}
              </div>
            </li>
          ))}
        </ul>
        <div className="deleted">
          <h4> Deleted products </h4>
          <ul className="deletedProducts">
            {deletedProducts?.map((item: ProductAttributes) => (
              <li key={item.id}>
                <span className="id"> {item.id} </span>
                <span className="name"> {item.name} </span>
                <span className="price"> {item.price} </span>
                <div className="buttons">
                  <i
                    onClick={() => handleRestore(item.id)}
                    className="fas fa-trash-restore"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footerFake"></div>
    </StyledCRUDProducts>
  );
}
