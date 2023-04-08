(() => {

  //* No aplicando el principio de responsabilidad única

  type Gender = 'M' | 'F';

  class User {

    //! More lines
    // public name        : string;
    // public gender      : Gender;
    // public birthdate   : Date;


    // constructor( name: string, gender: Gender, birthdate: Date) {
    //   this.name      = name;
    //   this.gender    = gender;
    //   this.birthdate = birthdate;
    // }

    //* Less lines
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) { }
  }

  class LoggedUser extends User {
    public lastAccess: Date

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }
    checkAuthToken() {
      return true;
    }
  }
  // const newUser = new loggedUser()
  // console.log({newUser});

  class UserSettings extends LoggedUser {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, name, gender, birthdate)
    }
  }

  const userSettings = new UserSettings(
    '/jose/Desktop',
    '/Downloads',
    'jose@email.com',
    'admin',
    'Jose Valenzuela',
    'M',
    new Date('1988-05-30')
  )

  // console.log({ userSettings, isUserAuthenticated: userSettings.checkAuthToken() });
  console.log({ userSettings });

})()