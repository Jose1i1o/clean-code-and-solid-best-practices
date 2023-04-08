(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  interface HtmlElementProps {
    id: string,
    type: HtmlType
  }

  class HTMLElement {
    public id: string;
    public type: HtmlType;

    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  interface InputAttributesProps {
    placeholder: string
    value: string,
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;

    constructor({ placeholder, value }: InputAttributesProps) {
      this.placeholder = placeholder;
      this.value = value;
    }
  }


  interface InputAttributesProps {

  }

  class InputEvents {
    constructor() { }

    setFocus() { };
    getValue() { };
    isActive() { };
    removeValue() { };
  }


  //? Idea para la nueva clase InputElement

  interface InputElementProps {
    id: string,
    type: HtmlType,
    value: string,
    placeholder: string,
  }

  class InputElement {
    public html: HTMLElement;
    public input: InputAttributes;
    public events: InputEvents;

    constructor({ id, placeholder, value }: InputElementProps) {
      this.html = new HTMLElement({ id, type: 'input' }),
        this.input = new InputAttributes({ value, placeholder }),
        this.events = new InputEvents();
    }
  }

  const nameField = new InputElement({
    id: '254525452',
    placeholder: 'Enter first name',
    value: 'Jose Valenzuela',
    type: 'input'
  });

  console.log({ nameField });

})()