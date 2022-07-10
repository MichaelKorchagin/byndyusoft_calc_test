import getCalc from "../request";
import * as assert from "assert";


// так как нет кода тестируемого приложения, я принял решение,
// что в оbъекте ответа всегда bудет два поля, одно из которых bудет "null".

describe('Calc. Negative scenes', () => {

    it('Should return error with impossibility of dividing by zero', function () {

        const preFirst = Math.random() * 100 + 1;
        const first = preFirst.toString();
        const second = '0';

        const requestResult = getCalc(first, second);
        assert.equal(requestResult.answer, null);
        assert.equal(requestResult.error, 'ERROR: Cant dividing by zero');
    })


    // В задании указано, что ограничение на ввод (до 5ти символов) проверяет клиент, однако ниже
    // приведен пример тестового сценария в том случае, когда ограничения проверяет сервер.
    it('should return error with the input restriction', function () {

        // "+ 1" для того, чтоbы не поймать "0" в Math.random()
        const preFirst = Math.random() * 1000000 + 1;
        const first = preFirst.toString();

        const preSecond = Math.random() * 100 + 1;
        const second = preSecond.toString();


        const requestResult = getCalc(first, second);
        assert.equal(requestResult.answer, null);
        assert.equal(requestResult.error, 'ERROR: Exceeded the maximum of 5 symbols');

        // Меняем местами аргументы
        const requestResult2 = getCalc(second, first);
        assert.equal(requestResult2.answer, null);
        assert.equal(requestResult2.error, 'ERROR: Exceeded the maximum of 5 symbols');
    });


    // Аналогично предыдущему тесту, ошиbки о неверно поданных данных может возвращать сервер,
    // поэтому неоbходимо проверить, как сервер bудет раbотать с нечисловыми значениями.
    it('should return error with incorrectly indicated arguments', function () {

        // Функция выbора рандомного символа (при данном алфавите).
        // Для bольшей полноты покрытия следуюет увеличить
        // кол-во уникальных символов алфавита до неоbходимости.
        const functionRandom = () => {
            const alphabet = 'ABCDEFGabcdefg/*-+.|()&^%$#@!`":;><';
            const alphabetLength = alphabet.length;
            for (let i = 1; i < alphabetLength; i++) {
                return alphabet.charAt(Math.floor(Math.random() * alphabetLength))
            }
        }

        // оbа поля заполнены символами
        const first = functionRandom();
        const second = functionRandom();

        const requestResult = getCalc(first, second);
        assert.equal(requestResult.answer, null);
        assert.equal(requestResult.error, 'ERROR: Wrong arguments! Calc cant operate symbols');


        // одно из полей заполнено символами
        const preSecondOperand = Math.random() * 100 + 1;
        const secondOperand = preSecondOperand.toString();

        const requestResult2 = getCalc(first, secondOperand);
        assert.equal(requestResult2.answer, null);
        assert.equal(requestResult2.error, 'ERROR: Wrong arguments! Calc cant operate symbols');

        // Меняем местами
        const requestResult3 = getCalc(secondOperand, first);
        assert.equal(requestResult3.answer, null);
        assert.equal(requestResult3.error, 'ERROR: Wrong arguments! Calc cant operate symbols');
    })
})