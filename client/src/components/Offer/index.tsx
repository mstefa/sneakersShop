import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Swal from "sweetalert2";
import { StyledOffer } from "./StyledOffer";
import { SET_OFFER } from "../../graphql/mutations";
import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_OFFERS,
} from "../../graphql/queries";

interface Offer {
  className: String;
}

export default function Offer() {
  const [setOffer, { error: errorMutationReview }] = useMutation(SET_OFFER, {
    refetchQueries: [
      { query: GET_PRODUCTS },
      { query: GET_OFFERS, variables: { active: true } },
    ],
  });

  if (errorMutationReview) {
    console.error(errorMutationReview);
  }

  const { data: catData, loading: catLoading } = useQuery(
    GET_CATEGORIES,
    {}
  );
  const { data: prodData, loading: prodLoading } = useQuery(
    GET_PRODUCTS,
    {}
  );
  const { data: offerData, loading: offerLoading } = useQuery(GET_OFFERS, {
    variables: { active: true },
  });

  let productsNames = [];
  let categoriesNames = [];

  if (!prodLoading && !catLoading) {
    productsNames = prodData.products.map((e) => e.name);
    categoriesNames = catData.categories.map((e) => e.name);
  }

  const [form, setForm] = useState({
    target: "",
    targetId: "",
    discount: "0",
    duration: "0",
  });
  const [options, setOptions] = useState([]);

  const handleTargetSelector = (value: string) => {
    if (value === "notSelected") {
      setOptions([]);

      setForm({ ...form, target: "", targetId: "" });

      return;
    }

    setForm({ ...form, target: value });

    if (value === "category") {
      catData.categories && setOptions(catData.categories);
      setOptions(catData.categories);
    }

    if (value === "product") {
      prodData.products && setOptions(prodData.products);
    }
  };

  const handleTargetIdSelector = (key: string) => {
    setForm({
      ...form,
      targetId: key,
    });
  };

  const handleInputChange = function (ev: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = async function (ev: React.ChangeEvent<HTMLFormElement>) {
    ev.preventDefault();

    let result = await Swal.fire({
      title: "Are you sure?",
      text: "this action will send email and notifications to clients",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      try {
        await setOffer({
          variables: {
            target: form.target,
            targetId: form.targetId,
            discount: parseFloat(form.discount),
            duration: parseFloat(form.duration),
          },
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  //---------------------------------------------------------------------------------------------------------

  return (
    <StyledOffer>
      <div className="discountContainer crud_container">
        <h2>Create New Discount</h2>

        <form
          onSubmit={(ev: React.ChangeEvent<HTMLFormElement>): any =>
            handleSubmit(ev)
          }
        >
          <div className="inputGroup">
            <select
              name="target"
              id="target"
              onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
                handleTargetSelector(ev.target.value)
              }
            >
              <option value="notSelected" key="notSelected">
                Choose an option
              </option>
              <option value="product" key="product">
                Product
              </option>
              <option value="category" key="category">
                Category
              </option>
            </select>
            {options.length < 1 ? (
              <select name="targetId" id="targetId">
                <option value="0" key="notSelected">
                  Choose an option
                </option>
                <option>...</option>
              </select>
            ) : (
              <select
                name="targetId"
                id="targetId"
                onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
                  handleTargetIdSelector(ev.target.value)
                }
              >
                <option value="notSelected" key="notSelected">
                  Choose an option
                </option>
                {options.map((e) => (
                  <option value={e.id} key={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="inputGroup">
            <div className="inputField">
              <label> Discount: </label>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                name="discount"
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                  handleInputChange(event)
                }
              ></input>
              <label>%</label>
            </div>
            <div className="inputField">
              <label> Duration: </label>
              <input
                type="number"
                min="0"
                step="0.01"
                name="duration"
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                  handleInputChange(event)
                }
              ></input>
              <label> hr. </label>
            </div>
          </div>
          <input
            className="addButton"
            type="submit"
            value="Create Discount"
            disabled={!(!!form.target && !!form.targetId)}
          />
        </form>
        <div>
          <h3>Active discounts</h3>
          <ul className="activeUsers">
            <li className="titles">
              <h5>ID</h5>
              <h5>Target</h5>
              <h5>TagetId</h5>
              <h5>Discount</h5>
              <h5>Active</h5>
              {/* <div></div> */}
            </li>
            {!offerLoading &&
              offerData.getOffers.map((offer) => (
                <li key={offer.id}>
                  <span>
                    <p className="info">ID</p>
                    {offer.id}{" "}
                  </span>
                  <span>
                    <p className="info">Target</p>
                    {offer.target}{" "}
                  </span>
                  <span>
                    <p className="info">Target Name</p>
                    {offer.target === "product"
                      ? productsNames[offer.targetId]
                      : categoriesNames[offer.targetId]}{" "}
                  </span>
                  <span>
                    <p className="info">Discount</p>
                    {Math.round(offer.discount * 100)}
                    {" % "}
                  </span>
                  <span>
                    <div className="info">
                      <span className={offer.targetId ? "active" : "finish"} />
                    </div>
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="footerFake"></div>
    </StyledOffer>
  );
}
