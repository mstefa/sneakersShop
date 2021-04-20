import gql from "graphql-tag";

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $price: Float!
    $brandId: ID!
    $CategoriesId: [String]!
    $ModelsId: [String]!
    $muestraimg: String
    $detalleimg1: String
    $detalleimg2: String
    $detalleimg3: String
  ) {
    createProduct(
      name: $name
      description: $description
      price: $price
      brandId: $brandId
      CategoriesId: $CategoriesId
      ModelsId: $ModelsId
      muestraimg: $muestraimg
      detalleimg1: $detalleimg1
      detalleimg2: $detalleimg2
      detalleimg3: $detalleimg3
    ) {
      name
      id
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    createCategory(name: $name) {
      id
      name
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: String!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
export const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: String!) {
    deleteCategory(id: $id) {
      id
    }
  }
`;
export const DELETE_REVIEW = gql`
  mutation deleteReview($id: String!) {
    deleteReview(id: $id)
  }
`;
export const UNDELETE_REVIEW = gql`
  mutation undeleteReview($id: String!) {
    undeleteReview(id: $id) {
      id
    }
  }
`;
export const UNDELETE_PRODUCT = gql`
  mutation undeleteProduct($id: String!) {
    undeleteProduct(id: $id) {
      id
    }
  }
`;
export const UNDELETE_CATEGORY = gql`
  mutation undeleteCategory($id: String!) {
    undeleteCategory(id: $id) {
      id
    }
  }
`;

export const ADD_MODEL = gql`
  mutation addModel($size: String!, $color: String!) {
    createModel(size: $size, color: $color) {
      id
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation updateProduct($id: String!, $atr: String!, $input: [String]) {
    updateProduct(id: $id, atr: $atr, input: $input) {
      id
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $isAdmin: Boolean!
    $email: String!
    $password: String!
    $nlsuscribe: Boolean!
    $isGmail: Boolean!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      isAdmin: $isAdmin
      email: $email
      password: $password
      nlsuscribe: $nlsuscribe
      isGmail: $isGmail
    ) {
      userName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String) {
    loginUser(email: $email, password: $password) {
      id
      isAdmin
      accessToken
      refreshToken
      firstName
    }
  }
`;

export const EDIT_CATEGORY = gql`
  mutation editCategory($id: String!, $input: String!) {
    updateCategory(id: $id, input: $input) {
      id
    }
  }
`;

export const EDIT_STOCK = gql`
  mutation editStock($productId: String!, $modelId: String!, $input: Int!) {
    updateStock(productId: $productId, modelId: $modelId, input: $input)
  }
`;

export const PASSWORD_RESET = gql`
  mutation passwordReset($email: String!) {
    passwordReset(email: $email)
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($password: String!, $token: String!) {
    updatePassword(password: $password, token: $token)
  }
`;

export const CREATE_CART = gql`
  mutation createCart($userId: String!) {
    createCart(userId: $userId) {
      userId
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation addtoCart(
    $finalproductId: String!
    $cartId: String!
    $quantity: Int
    $price: Float
  ) {
    addToCart(
      finalproductId: $finalproductId
      cartId: $cartId
      quantity: $quantity
      price: $price
    ) {
      finalproductId
      price
    }
  }
`;

export const DELETE_TO_CART = gql`
  mutation removeFromCart($cartId: String!, $finalproductId: String!) {
    removeFromCart(cartId: $cartId, finalproductId: $finalproductId)
  }
`;
export const ADD_REVIEW = gql`
  mutation addReview(
    $productId: String!
    $userId: String!
    $score: Float!
    $title: String!
    $description: String!
  ) {
    addReview(
      productId: $productId
      userId: $userId
      score: $score
      title: $title
      description: $description
    ) {
      title
      score
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: String!, $atr: String!, $input: String) {
    updateUser(id: $id, atr: $atr, input: $input)
  }
`;

export const RESTORE_USER = gql`
  mutation RestoreUser($id: String!) {
    undeleteUser(id: $id)
  }
`;

export const QUANTITY = gql`
  mutation controlQuantity($id: String!, $quantity: Int!) {
    controlQuantity(id: $id, quantity: $quantity)
  }
`;
export const LOGOUT_USER = gql`
  mutation LogoutUser($id: String!) {
    logoutUser(id: $id) {
      logout
    }
  }
`;

export const UPDATE_STATE = gql`
  mutation updateState($orderId: String!, $state: String!) {
    updateState(orderId: $orderId, state: $state) {
      state
    }
  }
`;


export const SET_OFFER = gql`
  mutation
    setOffers( 
      $target: String!, 
      $targetId: String!, 
      $discount: Float!, 
      $duration: Float! )
    {
      setOffers(
        target: $target, 
        targetId: $targetId, 
        discount: $discount, 
        duration: $duration )
    }
`;
export const DELETE_FROM_WISHLIST = gql`
mutation deleteFromWishList(
  $productId: String!
  $userId: String!
  ){
    deleteFromWishList(productId:$productId, userId:$userId)
  }

`
export const ADD_TO_WISHLIST = gql`
mutation addToWishList($productId:String!,$userId:String!) {
  addToWishList(productId:$productId,userId:$userId)
}

`

export const UPDATE_ADDRESS = gql`
  mutation updateUserAddress(
    $id: String!
    $country: String!
    $city: String!
    $street: String!
    $addressnumber: String!
    
  ) {
    updateUserAddress(
      id: $id
      country: $country
      city: $city
      street: $street
      addressnumber: $addressnumber
      
    )
  }
`;
