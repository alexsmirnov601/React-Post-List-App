/* это вспомогательная функция, которая считает сколько у нас будет страниц с постами. первым аргумнетам принимает общее кол-во постов, вторым - лимит  */

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

/*  теперь, зная общее кол-во страниц, мы можем сформировать массив в котором значения идут от 1 до 10 и на основании этого массива нарисовать кнопки пи нажатии на которые будет меняться страница  */

export const getPagesArray = (totalPages) => {
  let result = []

  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1)
  }
  return result
}
