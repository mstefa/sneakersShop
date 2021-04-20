import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { StyledCRUDCategory } from "./StyledCRUDCategory";
import { CategoryAttributes } from "../../types";
import { GET_CATEGORIES, GET_DELETED_CATEGORIES } from "../../graphql/queries";
import { useHistory } from "react-router-dom";
import {
  DELETE_CATEGORY,
  UNDELETE_CATEGORY,
  EDIT_CATEGORY,
  ADD_CATEGORY,
} from "../../graphql/mutations";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";

export default function CRUDCategory() {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const {
    data: deletedCategories,
    loading: loadingDeleted,
    error: errorDeleted,
  } = useQuery(GET_DELETED_CATEGORIES);
  const allCategory = data ? data.categories : null;
  const [createCategory, { error: errorMutationModel }] = useMutation(
    ADD_CATEGORY,
    {
      refetchQueries: [{ query: GET_CATEGORIES }],
    }
  );
  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [
      { query: GET_CATEGORIES },
      { query: GET_DELETED_CATEGORIES },
    ],
  });
  const [restoreCategory, { loading: loadingRestore }] = useMutation(
    UNDELETE_CATEGORY,
    {
      refetchQueries: [
        { query: GET_CATEGORIES },
        { query: GET_DELETED_CATEGORIES },
      ],
    }
  );
  const [updateCategory] = useMutation(EDIT_CATEGORY, {
    refetchQueries: [{ query: GET_CATEGORIES }],
  });

  if (loading) return <Loader />;
  if (error) return <span> error {error.message} </span>;
  const handleAdd = () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Create category",
      showCancelButton: true,
      inputAttributes: {
        min: "0",
      },
      inputValidator: (value) => {
        if (!value) {
          return "You need to write a name!";
        }
      },
    })
      .queue([
        {
          title: "Create new category:",
        },
      ])
      .then(async (result: any) => {
        if (result.value) {
          console.log(result.value[0], typeof result.value[0]);
          // const answers = JSON.stringify(result.value)
          try {
            await createCategory({
              variables: {
                name: result.value[0],
              },
            });
            history.push("/admin/category");
          } catch (e) {
            console.log(e);
          } finally {
            // console.log(productId);
            // console.log(modelId);
            // console.log(modify);
          }

          Swal.fire({
            icon: "success",
            title: "Category " + result.value[0] + " added",
          });
        }
      });
  };
  const handleDelete = (id) => {
    deleteCategory({ variables: { id } });
  };
  const handleEdit = (id, name) => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Change category",
      showCancelButton: true,
      inputAttributes: {
        min: "0",
      },
      inputValidator: (value) => {
        if (!value) {
          return "You need to write a name!";
        }
      },
    })
      .queue([
        {
          title: "Change the name of:",
          text: "Category: " + name,
        },
      ])
      .then(async (result: any) => {
        if (result.value) {
          console.log(result.value[0], typeof result.value[0]);
          // const answers = JSON.stringify(result.value)
          try {
            await updateCategory({
              variables: {
                id,
                input: result.value[0],
              },
            });
            history.push("/admin/category");
          } catch (e) {
            console.log(e);
          } finally {
            // console.log(productId);
            // console.log(modelId);
            // console.log(modify);
          }

          Swal.fire({
            icon: "success",
            title: "Category modified",
          });
        }
      });
    // history.push(`/admin/editCategory/${id}`);
  };

  const handleRestore = (id) => {
    restoreCategory({ variables: { id } });
  };

  return (
    <StyledCRUDCategory>
      <div className="categoryContainer crud_container">
        <button className="addButton" onClick={handleAdd}>
          Add new Category
        </button>
        <ul>
          <li className="titles">
            <h5>ID</h5>
            <h5>Category</h5>
            <div></div>
          </li>
          {allCategory?.map((item: CategoryAttributes) => (
            <li key={item.id}>
              <span className="id"> {item.id} </span>
              <span className="name"> {item.name} </span>
              <div className="buttons">
                <i
                  onClick={() => handleEdit(item.id, item.name)}
                  className="fas fa-edit"
                />
                <i
                  onClick={() => handleDelete(item.id)}
                  className="fas fa-trash-alt"
                />
                {/* <button onClick={() => handleEdit(item.id)}> Edit </button> */}
                {/* <button onClick={() => handleDelete(item.id)}> Delete </button> */}
              </div>
            </li>
          ))}
        </ul>
        <div className="deleted">
          <h4>Deleted categories</h4>
          <ul className="deletedCategories">
            {deletedCategories?.deletedCategories?.map(
              (item: CategoryAttributes) => (
                <li key={item.id}>
                  <span className="id">{item.id}</span>
                  <span className="name">{item.name}</span>
                  <span>
                    <div className="buttons">
                      <i
                        onClick={() => handleRestore(item.id)}
                        className="fas fa-trash-restore"
                      />
                    </div>
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="footerFake"></div>
    </StyledCRUDCategory>
  );
}
