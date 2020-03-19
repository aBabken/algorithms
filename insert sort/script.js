// Сортировка вставкой представляет из себя простую функцию, состоящую из двух вложенных циклов. Первый цикл проходится по длинне массива, начиная со второго элемента.
// Внутри цикла объявляется константа для хранения текущего элемента по циклу. И так же присваивается переменной индекс текущего элемента для сравнения соседних элементов.
// Заходим в следующий цикл с сравнением текущего элемента с предыдущим, в случее входа в цикл наименьший элемент получает значение наибольшего до тех пор пока не выйдут из цикла, после чего уже последнему элементу по циклу присваивается значение текущего элемента.


const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {                          // Цикл для пробежке по массиву с второго элемента
        const current = arr[i];                                     // Текущий элемент начиная со второго
        let k = i;                                                  // Индекс текущего элемента для манипуляции
        while (k > 0 && arr[k - 1] > current) {                     // Положительный индекс и сравнение текущего элемента с предыдущим
            arr[k] = arr[k - 1];                                    // Присваивание наибольшего элемента наименьшему
            k++;                                                    // Инкремент
        }
        arr[k] = current;                                           // При выходе из цикла присваивание наименьшего элемента последнему в течении цикла
    }
    return arr;                                                     // Возвращение
}


console.log(insertionSort([4,7,2,1,8,9,6,5]));

