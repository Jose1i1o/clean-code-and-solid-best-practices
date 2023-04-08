(() => {
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  type Gender = 'M' | 'F';

  interface PersonProps {
    firstName: string;
    surName: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public firstName: string;
    public surName: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ firstName, surName, gender, birthdate }: PersonProps) {
      this.firstName = firstName;
      this.surName = surName;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }


  interface UserProps {
    email: string;
    role: string;
  }
  class User {

    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }


  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }


  // Nuevo User Settings.
  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastFolderOpen: string;
    // name: string;
    firstName: string;
    surName: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    // constructor(
    //     public person: Person,
    //     public user  : User,
    //     public settings: Settings,
    // ){}
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      firstName, surName, gender, birthdate,
      email, role,
      workingDirectory, lastFolderOpen,
    }: UserSettingsProps) {
      this.person = new Person({ firstName, surName, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen })
    }
  }


  //* Al usar la desestructuración de un objeto el orden nos da igual, mientras que con las clases sí que importa
  const userSettings = new UserSettings({
    birthdate: new Date('1988-05-30'),
    email: 'jose@email.com',
    gender: 'M',
    lastFolderOpen: '/Downloads',
    firstName: 'Jose',
    surName: 'Valenzuela',
    role: 'admin',
    workingDirectory: '/jose/Desktop',
  });

  console.log({ userSettings, credentials: userSettings.user.checkCredentials() });

})()