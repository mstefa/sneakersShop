import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, GET_DELETED_USERS } from "../../graphql/queries";
import {
  DELETE_USER,
  UPDATE_USER,
  RESTORE_USER,
} from "../../graphql/mutations";
import { StyledCRUDUsers } from "./StyledCRUDUsers";
import Loader from "../../components/Loader";
import { UserAttributes } from "../../types";

export default function CRUDUsers() {
  const { data: allUsers, loading: loadingUsers, error: errorUsers } = useQuery(
    GET_USERS
  );
  const {
    data: deletedUsers,
    loading: loadingDeleted,
    error: errorDeleted,
  } = useQuery(GET_DELETED_USERS);

  const [deleteUser, { loading: loadingDelete }] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }, { query: GET_DELETED_USERS }],
  });
  const [updateUser, { loading: loadingUpdate }] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_USERS }, { query: GET_DELETED_USERS }],
  });
  const [restoreUser, { loading: loadingRestore }] = useMutation(RESTORE_USER, {
    refetchQueries: [{ query: GET_USERS }, { query: GET_DELETED_USERS }],
  });

  if (
    loadingUsers ||
    loadingDelete ||
    loadingUpdate ||
    loadingDeleted ||
    loadingRestore
  )
    return <Loader />;
  if (errorUsers || errorDeleted)
    return <span> Error! {errorUsers?.message} </span>;

  const makeAdmin = (id: String, isAdmin: Boolean) => {
    let input: string | boolean = !isAdmin;
    input = input.toString();
    updateUser({
      variables: { id, atr: "isAdmin", input },
    });
  };

  const handleDelete = (id: String) => {
    deleteUser({ variables: { id } });
  };

  const handleRestore = (id) => {
    restoreUser({ variables: { id } });
  };

  return (
    <StyledCRUDUsers className="crud_container">
      <ul className="activeUsers">
        <li className="titles">
          <h5>Username</h5>
          <h5>Email</h5>
          <h5>isAdmin</h5>
          <div></div>
        </li>
        {allUsers?.users?.map((user: UserAttributes) => (
          <li key={user.id}>
            <span className="username">
              <p className="username">Username</p>
              {user.userName}{" "}
            </span>
            <span className="email">
              <p className="email">Email</p>
              {user.email}{" "}
            </span>
            <span>
              <p className="isAdmin">isAdmin</p>
              <div
                className="isAdmin"
                onClick={() => makeAdmin(user.id, user.isAdmin)}
              >
                <span className={user.isAdmin ? "adminSpan" : "clientSpan"} />
              </div>
            </span>
            <span>
              <div className="buttons">
                <i
                  onClick={() => makeAdmin(user.id, user.isAdmin)}
                  className="fas fa-edit"
                />
                <i
                  onClick={() => handleDelete(user.id)}
                  className="fas fa-trash-alt"
                />
              </div>
            </span>
          </li>
        ))}
      </ul>
      <div className="deleted">
        <h4> Deleted users </h4>
        <ul className="deletedProducts">
          {deletedUsers?.deletedUsers?.map((user: UserAttributes) => (
            <li key={user.id}>
              <span className="username">
                <p className="username">Username</p>
                {user.userName}{" "}
              </span>
              <span className="email">
                <p className="email">Email</p>
                {user.email}{" "}
              </span>
              <span>
                <p className="isAdmin">isAdmin</p>
                <div className="isAdmin">
                  <span className={user.isAdmin ? "adminSpan" : "clientSpan"} />
                </div>
              </span>
              <span>
                <div className="buttons">
                  <i
                    onClick={() => handleRestore(user.id)}
                    className="fas fa-trash-restore"
                  />
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </StyledCRUDUsers>
  );
}
