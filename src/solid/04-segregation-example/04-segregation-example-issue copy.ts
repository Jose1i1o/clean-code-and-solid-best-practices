interface characterProperties {
  jump(): void,
  throwFireBalls(): void,
  slideInPipes(): void,
  run(): void,
  climbTrees(): void,
  throwKisses(): void,
  runWithHighHeels(): void,
  swim(): void,
  throwShells(): void,
}


class MarioBross implements characterProperties {

  public jump() {}
  public throwFireBalls() {}
  public slideInPipes() {}
  public run() {}
  public climbTrees() {}
  public throwKisses() {
    throw new Error('Method not implemented.');
  }
  public runWithHighHeels() {
    throw new Error('Method not implemented.');
  }
  public swim() {
    throw new Error('Method not implemented.');
  }
  public throwShells() {
    throw new Error('Method not implemented.');
  }

}

class LuigiBross implements characterProperties {
  
    public jump() {}
    public throwFireBalls() {}
    public slideInPipes() {}
    public run() {}
    public climbTrees() {}
    public throwKisses() {
      throw new Error('Method not implemented.');
    }
    public runWithHighHeels() {
      throw new Error('Method not implemented.');
    }
    public swim() {
      throw new Error('Method not implemented.');
    }
    public throwShells() {
      throw new Error('Method not implemented.');
    }
  
}

class Princess implements characterProperties {
  public jump() {}
  public throwFireBalls() {
    throw new Error('Method not implemented.');
  }
  public slideInPipes() {
    throw new Error('Method not implemented.');
  }
  public run () {
    throw new Error('Method not implemented.');
  }
  public climbTrees() {
    throw new Error('Method not implemented.'); 
  }
  public throwKisses() {}
  public runWithHighHeels() {}
  public swim() {
    throw new Error('Method not implemented.');
  }
  public throwShells() {
    throw new Error('Method not implemented.');
  }

}

class Turtle implements characterProperties {
  public jump() {}
  public throwFireBalls() {
    throw new Error('Method not implemented.');
  }
  public slideInPipes() {
    throw new Error('Method not implemented.');
  }
  public run() {
    throw new Error('Method not implemented.');
  }
  public climbTrees() {
    throw new Error('Method not implemented.');
  }
  public throwKisses() {
    throw new Error('Method not implemented.');
  }
  public runWithHighHeels() {
    throw new Error('Method not implemented.');
  }
  public swim() {}
  public throwShells() {}
}
