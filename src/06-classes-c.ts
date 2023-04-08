(() => {

  //* Aplicando el principio de responsabilidad única

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

  interface UserProps {
    email: string,
    role: string,
    lastAccess: Date
  }

  class LoggedUser {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ lastAccess, email, role }: UserProps) {
      this.lastAccess = lastAccess;
      this.email = email;
      this.role = role;
    }
    checkAuthToken() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string,
    workingDirectory: string,
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }


  interface UserSettingsProps {
    birthdate: Date,
    email: string,
    gender: Gender,
    lastOpenFolder: string,
    name: string,
    role: string,
    workingDirectory: string,
    lastAccess: Date,
  }

  class UserSettings {
    public user: User;
    public loggedUser: LoggedUser;
    public settings: Settings;

    constructor({ birthdate, email, gender, lastOpenFolder, name, role, workingDirectory, lastAccess }: UserSettingsProps) {
      this.user = new User({ name, gender, birthdate });
      this.loggedUser = new LoggedUser({ lastAccess, email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder })
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