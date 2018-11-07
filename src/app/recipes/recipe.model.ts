export class Recipe {
  public name: string;
  public desccription: string;
  public imagePath: string;

  constructor( name: string, desc: string, imagePath: string ) {
    this.name = name;
    this.desccription = desc;
    this.imagePath = imagePath;
  }
}
