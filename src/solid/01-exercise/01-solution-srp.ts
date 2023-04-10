(() => {

  interface Product {
    id: number;
    name: string;
  }


  class ProductService {

    getProduct(id: number) {
      console.log('Producto', { id, name: 'Samsung 52" TV' });
    }

    saveProduct(product: Product) {
      console.log('Guardado en base de datos', product);
    }
  }

  class Mailer {
    private masterEmail: string = 'jose@gmail.com';

    sendEmail(emailList: string[], template: 'order confirmation' | 'order failed') {
      console.log('Enviando correo a clientes', emailList, template);

    }

  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id)
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['jose@gmail.com'], 'order confirmation')
    }
  }

  class CartBloc {

    private itemsInCart: Object[] = [];
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
    }
  }



  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(1);
  productBloc.saveProduct({ id: 1, name: 'Samsung 52" TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(1);









})();