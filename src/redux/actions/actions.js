import { change_Clothes, change_Animation } from "../types/type"

export const changeClothes = (item) => ({
  type: change_Clothes,
  item
})  

export const changeAnimation = () => ({
  type: change_Animation
})
