// Один из простейших алгоритмов в программировании на нашем JS 

const linear = (el, arr) => {                                                           // Принимаем искомый элемент и массив для поиска

    if (!Array.isArray(arr)) return new Error("Type of 'arr' is not an array");         // Если наш массив не массив, тогда выдаем ошибку

    for (let i = 0; i <= arr.length; i++) {                                             // Начинаем цикл по массиву

        if (arr[i] === el) return i;                                                    // Сравниваем каждый элемент массива с нашим, при совпадении возвращаем индекс элемента в массиве

    }           
    return -1;                                                                          // Иначе возвращаем -1
}


console.log(linear(6, [4, 78, 9, 2, 1, 9, 6, 4, 2]));
console.log(linear(6, 'df'));