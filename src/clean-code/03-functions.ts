(() => {

  function getAllMoviesById( id: string ) {
      console.log({ id });
  }

  function getMovieActorsById( id: string ) {
      console.log({ id });
  }

  function getBioActorById( id: string ) {
      console.log({ id });
  }
  
  interface Movie {
    cast:         string[];
    description:  string;
    rating:       number;
    title:        string;
  }
  function createMovie({title, description, rating, cast}: Movie) {
      console.log(title, description, rating, cast);
  }

// divide function in two parts
  function checkFullName (fullName: string, birthdate: Date): boolean {
      if ( fullName === 'jose' ) return false;
      console.log('El nombre es correcto', birthdate);
      return true;
  }

  function createActor( fullName: string, birthdate: Date ): boolean {
      checkFullName(fullName, birthdate);
      return true;
  }
  

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    if ( isDead ) return 1500;

    if ( isSeparated ) return 2500;

    return (isRetired) ? 3000 : 4000;
}

// The above equals the below
// const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
//   let result;
//   if ( isDead ) {
//       result = 1500;
//   } else {
//       if ( isSeparated ) {
//           result = 2500;
//       } else {
//           if ( isRetired ) {
//               result = 3000;
//           } else {
//               result = 4000; 
//           }
//       }
//   }
  
//   return result;
// }


})();
