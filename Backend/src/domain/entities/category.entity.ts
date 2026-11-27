export class Category {
  constructor(
    public id: string,
    public name: string,
  ) {
    if (name.trim().length < 1){
        throw new Error("El nombre debe tener al menos 1 caracter.")
    }

    this.name = name.trim()
  }
}