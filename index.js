// debugger;
document.write('<h3><b>Вивести на сторінку в один рядок через кому числа від 10 до 20.</b></h3>');
initialNumberFirst = 10;
resultFirstConditions = '';

while (initialNumberFirst <= 20) {
    resultFirstConditions += initialNumberFirst + ', ';
    initialNumberFirst++;
}
document.write(`${resultFirstConditions.slice(0, -2)}<br>`);

document.write('<h3><b>Вивести квадрати чисел від 10 до 20.</b></h3>');
initialNumberSecond = 10;
resultSecondConditions = '';

while (initialNumberSecond <= 20) {
    resultSecondConditions += (initialNumberSecond * initialNumberSecond) + ', ';
    initialNumberSecond++;
}
document.write(`${resultSecondConditions.slice(0, -2)} <br>`);

document.write('<h3><b>Вивести таблицю множення на 7.</b></h3>');
factor = 1;
resultMultiply = '';

while (factor <= 10) {
    resultMultiply = factor * 7;
    document.write(`${factor} x 7 = ${resultMultiply} <br>`);
    factor++;
}

document.write('<h3><b>Знайти суму всіх цілих чисел від 1 до 15.</b></h3>');
value = 1;
valueSum = 0;

while (value <= 15) {
    valueSum += value;
    value++;
    
}
document.write(`${valueSum} <br>`);

document.write('<h3><b>Знайти добуток усіх цілих чисел від 15 до 35.</b></h3>');
valueMultiplier = 15;
multiplierProduct = 1;

while (valueMultiplier <=35) {
    multiplierProduct *= valueMultiplier;
    valueMultiplier++;
}
document.write(`${multiplierProduct}<br>`);

document.write('<h3><b>Знайти середнє арифметичне всіх цілих чисел від 1 до 500.</b></h3>');
variableNumber = 1;
arithmeticMean = 0;

while (variableNumber <= 500) {
    arithmeticMean += variableNumber;
    variableNumber++;
}
resultArithmeticMean = arithmeticMean / 500;
document.write(`${resultArithmeticMean} <br>`);

document.write('<h3><b>Вивести суму лише парних чисел в діапазоні від 30 до 80.</b></h3>');
meaningEvenNumber = 30;
resultEvenNumber = 0;

do {
    if (meaningEvenNumber % 2 === 0) {
        resultEvenNumber += meaningEvenNumber;
    }
    meaningEvenNumber++;
}   while (meaningEvenNumber <= 80);
document.write(`${resultEvenNumber} <br>`);

document.write('<h3><b>Вивести всі числа в діапазоні від 100 до 200 кратні 3.</b></h3>');
rangeStart = 100;
resultRangeStart = '';

do {
    if (rangeStart % 3 === 0) {
        resultRangeStart += rangeStart + ', ';
    }
    rangeStart++;
} while (rangeStart <= 200);

document.write(`${resultRangeStart.slice(0, -2)}<br>`);

document.write('<h3><b>Дано натуральне число. Знайти та вивести на сторінку всі його дільники.</b></h3>');
requestNaturalNumber = +prompt('Enter natural number');
divisorInitialValue = 1;
numberEvenDivisors = 0;
sumNumberEvenDivisors = 0;
resultDivisorValue = '';

do {
    if (requestNaturalNumber % divisorInitialValue === 0) {
        resultDivisorValue += divisorInitialValue + ' ';
    }
    if ( requestNaturalNumber % divisorInitialValue ===0 && divisorInitialValue % 2 === 0) {
        numberEvenDivisors++;
        sumNumberEvenDivisors += divisorInitialValue;
    }
    divisorInitialValue++;
} while (divisorInitialValue <= requestNaturalNumber);

document.write(`Ви ввели номер - ${requestNaturalNumber} його дільники - ${resultDivisorValue} <br>`);
document.write('<h3><b>Визначити кількість його парних дільників.</b></h3>');
document.write(`Кількість його парних дільників - ${numberEvenDivisors} <br>`);
document.write('<h3><b>Знайти суму його парних дільників.</b></h3>');
document.write(`Сума його парних дільників - ${sumNumberEvenDivisors}<br>`);

document.write('<h3><b>Таблиця множення</b></h3>');
firstMultiplier = 1;

do {
    secondMultiplier = 1;
    document.write("<div style='float: left; width: 100px;'>");
    do {
        document.write(`${firstMultiplier} x ${secondMultiplier} = ${firstMultiplier * secondMultiplier}<br>`);
        secondMultiplier++;
    } while (secondMultiplier <= 10);
    document.write('</div>');
    // window.print();
    firstMultiplier++;
} while (firstMultiplier <= 10);