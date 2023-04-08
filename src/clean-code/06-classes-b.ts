(() => {

  //* No aplicando el principio de responsabilidad única

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string,
    gender: Gender,
    birthdate: Date,
  }


  class User {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name,
        this.gender = gender,
        this.birthdate = birthdate
    }
  }

  interface UserProps extends PersonProps {
    email: string,
    name: string,
    role: string,
  }

  class LoggedUser extends User {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
      this.email = email;
      this.role = role;
    }
    checkAuthToken() {
      return true;
    }

  }

  // const newUser = new loggedUser()
  // console.log({newUser});

  interface UserSettingsProps extends UserProps {
    lastAccess: Date;
    lastOpenFolder: string,
    workingDirectory: string,
  }

  class UserSettings extends LoggedUser {
    public lastAccess: Date;
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ lastAccess, workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.lastAccess = lastAccess;
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date('1988-05-30'),
    email: 'jose@email.com',
    gender: 'M',
    lastOpenFolder: '/Downloads',
    name: 'Jose Valenzuela',
    role: 'admin',
    workingDirectory: '/jose/Desktop',
    lastAccess: new Date('2023-05-30'),
  })

  // console.log({ userSettings, isUserAuthenticated: userSettings.checkAuthToken() });
  console.log({ userSettings });

})()