import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query Product {
    products {
      id
      name
      muestraimg
      price
      discount
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;

export const GET_DELETED = gql`
  query Deleted {
    deleted {
      id
      name
      price
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;

export const GET_PRODUCT_DETAIL = gql`
  query ProductDetail($id: String!) {
    productDetail(id: $id) {
      id
      description
      price
      discount
      name
      muestraimg
      detalleimg1
      detalleimg2
      detalleimg3
      brand {
        name
      }
      categories {
        name
      }
      models {
        id
        size
        color
      }
    }
  }
`;

export const SEARCH_PRODUCTS = gql`
  query searchProducts($name: String!) {
    searchProducts(name: $name) {
      id
      name
      description
      price
      discount
      muestraimg
      brand {
        name
      }
      categories {
        name
      }
      models {
        id
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;

export const GET_DELETED_CATEGORIES = gql`
  query deletedCategories {
    deletedCategories {
      id
      name
    }
  }
`;

export const GET_DELETED_REVIEWS = gql`
  query deletedReviews($productId: String!) {
    deletedReviews(productId: $productId) {
      id
      title
      score
      description
      productId
      userId
    }
  }
`;

export const GET_BRANDS = gql`
  query Brands {
    brand {
      id
      name
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORIES = gql`
  query productForCategory($name: String!) {
    productForCategory(name: $name) {
      id
      name
      muestraimg
      price
      discount
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;
export const GET_FILTERED_PRODUCTS = gql`
  query filteredProducts($categoryId: [String!]!, $brandId: [String!]!) {
    filteredProducts(categoryId: $categoryId , brandId: $brandId){
      id
      name
      muestraimg
      price
      discount
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;

export const GET_MODELS = gql`
  query Models {
    models {
      id
      size
      color
    }
  }
`;

export const GET_CART = gql`
  query cart($userId: String!, $state: String) {
    cart(userId: $userId, state: $state) {
      id
      cartproducts {
        id
        quantity
        state
        finalproducts {
          id
          product {
            id
            name
            price
            discount
            muestraimg
          }
          model {
            size
            color
          }
        }
      }
    }
  }
`;

export const GET_CART_SIMPLE = gql`
  query cartSimple($userId: String!) {
    cartSimple(userId: $userId) {
      id
    }
  }
`;

export const FINAL_PRODUCTS = gql`
  query finalproducts($productId: String!, $modelId: String!) {
    finalproducts(productId: $productId, modelId: $modelId) {
      id
      stock
      product {
        id
        name
        price
        muestraimg
      }
    }
  }
`;

export const GET_STOCK = gql`
  query getStock($productId: String!) {
    allModelsProduct(productId: $productId) {
      id
      stock
      model {
        id
        size
        color
      }
    }
  }
`;

export const GET_ALL_STOCK = gql`
  query allStock {
    allStock {
      id
      product {
        name
        id
      }
      model {
        color
        size
        id
      }
      stock
    }
  }
`;
export const GET_REVIEWS = gql`
  query GetReviews($productId: String!) {
    getReviews(productId: $productId) {
      count
      average
      reviews {
        title
        score
        description
        id
      }
    }
  }
`;
export const GET_REVIEWS_FROM_USER = gql`
  query GetReviewsFromUser($userId: String!) {
    getReviewsFromUser(userId: $userId) {
      count
      average
      reviews {
        title
        score
        description
        id
        productId
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      firstName
      lastName
      userName
      email
      isAdmin
      nlsuscribe
    }
  }
`;

export const GET_DELETED_USERS = gql`
  query GetDeletedUsers {
    deletedUsers {
      id
      firstName
      lastName
      userName
      email
      isAdmin
      nlsuscribe
    }
  }
`;

export const GET_ORDERS = gql`
  query getOrders($orderId: String!, $state: String) {
    viewOrders(orderId: $orderId, state: $state) {
      id
      quantity
      price
      state
      updatedAt
      finalproducts {
        model {
          size
          color
        }
        product {
          name
          id
        }
      }
      cart {
        user {
          id
          userName
        }
      }
    }
  }
`;

export const GET_USER_DETAIL = gql`
  query user($id: String!) {
    user(id: $id) {
      firstName
      lastName
      userName
      email
    }
  }
`;

export const GET_HISTORY = gql`
  query OrderHistory($userId: String!) {
    cart(userId: $userId, state: "finished") {
      cartproducts {
        id
        quantity
        price
        finalproducts {
          product {
            id
            name
            muestraimg
          }
          model {
            color
            size
          }
        }
      }
    }
  }
`;


export const GET_OFFERS = gql`
  query getOffers($active: Boolean!) {
    getOffers(active: $active) {
      id
      target
      targetId
      discount
      duration
    }
  }
`;

export const GET_WISHLIST = gql`
query wishList($userId:String!){
  wishList(userId:$userId){
    product{
      id
      name
      muestraimg
      categories{
        name
      }
      brand{
        name
      }
    }  
  }
}`

export const GET_ORDERS_QUANTITY = gql`
query orderQuantity($state:String!){
  orderQuantity(state: $state){
    reserved
    rejected
    paid
    finished
  }
}
`