module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('reviews', [{
						productId:"1",
						userId:"1",
						score:3,
						title:"Mmmmmmmmmm",
						description:"Estan bastante bien las zapatillas me tocan el dedo chito del pie, y me irita.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"1",
						userId:"2",
						score:4,
						title:"Exelente",
						description:"La verda que no hay patillas me calzen mejor, aparte un servicio impresionante.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"2",
						userId:"1",
						score:5,
						title:"Maravilloso",
						description:"Zapatilla de tela entretejida. . -muy livianas. -fácil de lavar. -se nota poco la suciedad. -no es muy ventilada (en parte por el -color). -se humedecen muy rápido si les cae agua. -muy buena calidad precio, de momento no se me despegan ni se rasgan con un uso intensivo diario. . Mi opinión en general? estoy muy conforme con mi compra, total mente satisfecho con el precio así como en el desempeño. . Consejos? si son de pies anchos como mi persona, aconsejo elegir una talla más. Ya que su tejido ergonómico dificultaría un poco el ingreso del pie.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"2",
						userId:"2",
						score:4,
						title:"Excelente producto",
						description:"Los materiales son muy buenos, de hecho, realmente son ultralivianas, la textura de esta en particular es muy agradable. La horma es un poco angosta particularmente para mi pie pero el talle esta bien logrado. Puntualmente por los materiales es una zapa que no es demasiado fresca y es ese el motivo principal junto a la confección (que resulto angosta para mi) por lo que decido devolverla. De todas formas es un excelente producto, lo super recomiendo.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"3",
						userId:"1",
						score:4,
						title:"Bueno",
						description:"Es un excelente producto me encanto muy comodas y de buena calidad para el precio, le doy 4 estrellitas ya que soy talle 42 pero segun la tabla de talles del producto tendria que ser 43 asi que la compre con ese talle y me quedaron grandes pero le agregue una plantilla bien gruesa y safe jajajaj.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"3",
						userId:"2",
						score:5,
						title:"Super livianas, cómodas y buena calidad",
						description:"Es como dice el título ultralivianas! la verdad quedé sorprendido no sólo yo si no todos mis amigos. Aparte son muy lindas y van con cualquier tipo de ropa. Las zapas en sí son muy cómodas y resistentes. Excelente producto!!!.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"4",
						userId:"1",
						score:4,
						title:"Muy bueno",
						description:"Muy conforme, livianas, talle como el que uso en todas las zapatillas, cómodas no hay que olvidarse del precio no se puede pretender más recomendable. Lo malo me tardo una semana en llegar ha rosario.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"4",
						userId:"2",
						score:5,
						title:"Excelente",
						description:"Excelente calidad pero son para personas con pie delgado. A mi esposo le ajustaban en el empeine pero se las dejé a otra persona de la flia. Que quedó muy satisfecha. Son muy lindas.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"5",
						userId:"1",
						score:4,
						title:"Muy buenas",
						description:"Son cómodas, livianas (tal como dice la descripción del producto) y si bien al ver la suela parecería que son resbaladizas no es así. La verdad que estoy contento con el producto!.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"5",
						userId:"2",
						score:3,
						title:"Normal",
						description:"No lo compren por la calidad, es una zapatilla normal por el precio. Mi recomendacion? estirate 1000 o 1500 pesos mas y te compras algo de marca y de muchisima mas calidad",
      createdAt: new Date(),
      updatedAt: new Date()
  },{ 
						productId:"6",
						userId:"1",
						score:5,
						title:"Muy buenas zapas",
						description:"Lindas zapatillas, ideal para uso diario, super livianas, lo único que no había en 43, compré 44 pensando que podría irme bien teniendo en cuenta la tela, pero me quedo apenas grande,",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"6",
						userId:"2",
						score:2,
						title:"Malo",
						description:"Son muy lindas a la vista, pero al segundo dia ya se empezo a despegar y los ojales de los cordones se sueltan pero es de esperar por el precio !!!.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"7",
						userId:"1",
						score:5,
						title:"Buena relación precio calidad",
						description:"Buen balance precio calidad. Confortables y livianas. Se puede usar con diversas prendas y lucen bien. Las he usado para meterme en ríos a caminar y aguantaron sin problema.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"7",
						userId:"2",
						score:5,
						title:"Excelente, producto leal al anuncio.",
						description:"Buen producto llega lo que ofrecen, buena calidad, liviana cumple la función por la que se compró. Prácticas, cómodas, livianas, flexibles me gustan mucho. Satisface mi necesidad buena compra.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"8",
						userId:"1",
						score:3,
						title:"Bueno",
						description:"La zapatilla que pedí n44 me quedaron bien, de ven lindas, al principio hay que usarlas con medias,poseen algunos detalles de calidad que son reflejados en el precio.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"8",
						userId:"2",
						score:5,
						title:"Muy Bueno",
						description:"Me quedaron un poco grande con respecto al ancho. Pero son super comodas y livianas, las uso todo el dia. Por el precio no se puede pedir mas.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"9",
						userId:"1",
						score:5,
						title:"Aceptable y Bueno",
						description:"Teniendo en cuenta el precio, es una zapatilla muy cómoda y la calidad es aceptable. La uso para la facu, el club, y alguna salida casual!.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"9",
						userId:"2",
						score:5,
						title:"Bastante aceptables",
						description:"Linda, comodas, económicas , no son para usar todos los días ya que se romperían enseguida, pero en gral bastante conforme, por el precio están bastantes lindas.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"10",
						userId:"1",
						score:5,
						title:"Más livianas que el Barça en la Champions",
						description:"Fueron un regalo para mi hermano. Le quedaron muy bien y se nota que son buena calidad y además muy livianas. Como semedo contra davies.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"10",
						userId:"2",
						score:5,
						title:"Muy buena opcion de calzado !!!",
						description:"Muy buena calidad de materiales y hermosa terminación. Muy lindos detalles, son super cómodas y muy livianas. Una opción para tener en cuenta !!!.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"11",
						userId:"1",
						score:5,
						title:"Comodas y livianas",
						description:"La verdad las compramos con ciertas dudas las usa mi marido y le son muy comodas y livianas. Mejor de lo que esperabamos.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"11",
						userId:"2",
						score:5,
						title:"Hermosas!",
						description:"Realmente son ultra livianas, no se ensucian, fáciles de limpiar y ultra cómodas, quedan con cualquier pantalón o bermuda! relación precio/calidad = espectacular!.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"12",
						userId:"1",
						score:5,
						title:"Excelente servicio",
						description:"Excelente. Muy eficaz esto de comprar en internet. Mis primeras ezperiencias y mercado libre lo facilita muchisimo. Muy confiable. Recomiendo graciasss.",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
						productId:"12",
						userId:"2",
						score:5,
						title:"Son economicas",
						description:"Crei que podian ser de mejor calidad pero bueno le pongo 5 estrellas por su precio. Mas no se puede pedir.",
      createdAt: new Date(),
      updatedAt: new Date()
  },]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reviews', null, {});
  }
}; 
