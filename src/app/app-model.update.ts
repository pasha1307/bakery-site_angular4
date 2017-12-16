export class Item {
  constructor(
    public id: number,
    public name: string,
    public info: string,
    public ingredients: string,
    public type: string,
    public img: string,
    public dairy: boolean,
    public soy: boolean,
    public nut: boolean,
    public egg: boolean,
    public vegan: boolean

  ) {}
}
