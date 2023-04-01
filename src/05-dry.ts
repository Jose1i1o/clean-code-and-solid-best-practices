
type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  constructor (
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ){}


  isProductReady():boolean {
    for(const key in this) {
      console.log(key, typeof this[key]);
      switch( typeof this[key]) {
        case 'string':
          // if(this[key].length <= 0) throw new Error(`${ key } is empty`)
          if((<string><unknown>this[key]).length <= 0) throw new Error(`${ key } is empty`);
          break;
          case 'number':
            if((<number><unknown>this[key]) <= 0) throw new Error(`${ key } is empty`);
          break;
          default:
            throw new Error(`${ typeof this[key]} is not valid`)
          }
    }
    return true;
  }

  toString() {
    //! No DRY
    // if( this.name.length <= 0 ) throw new Error('The name must not remain empty')
    // if ( this.price <= 0 ) throw new Error('The price should be higher than 0')
    // if (this.size === '' ) throw new Error('You must select a size first')

    //* DRY PRINCIPLES
    // for(const key in this) {
    //   console.log(key, typeof this[key]);
    //   switch( typeof this[key]) {
    //     case 'string':
    //       // if(this[key].length <= 0) throw new Error(`${ key } is empty`)
    //       if((<string><unknown>this[key]).length <= 0) throw new Error(`${ key } is empty`);
    //       break;
    //       case 'number':
    //         if((<number><unknown>this[key]) <= 0) throw new Error(`${ key } is empty`);
    //       break;
    //       }
    // }
    if( !this.isProductReady()) throw new Error('The product is not ready')



    return `${ this.name } (${ this.price }), ${ this.size }`
  }
}

(() => {
  const bluePants = new Product('Blue large Pants', 10, 'L');
  console.log(bluePants.toString());
  
})()