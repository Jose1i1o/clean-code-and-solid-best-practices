(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  // Alto Acoplamiento

  class Person {
    constructor(
      //public name: string, //* I will only modify the name to firstName and surName in order to show it
      public firstName: string,
      public surName: string,
      public gender: Gender,
      public birthdate: Date,
    ) { }
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      // name: string,
      firstName: string,
      surName: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(firstName, surName, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }


  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      // name: string,
      firstName: string,
      surName: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(
        email,
        role,
        new Date(),
        // name,
        firstName,
        surName,
        gender,
        birthdate
      )
    }
  }


//* Al no usar la desestructuración de un objeto el orden nos importa, mientras que con un objeto no nos hubiese importado
  const userSettings = new UserSettings(
    '/Downloads',
    '/jose/Desktop',
    'jose@email.com',
    'admin',
    'Jose',
    'Valenzuela',
    'M',
    new Date('1988-05-30'),
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });

})()
