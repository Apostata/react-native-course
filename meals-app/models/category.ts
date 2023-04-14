import { ColorValue } from "react-native";

interface ICategory{
  id:string,
  title:string,
  color:ColorValue ,
}
class Category implements ICategory{
  id;
  title;
  color;
  constructor(
    id:string,
    title:string,
    color:ColorValue ,
    ) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;
