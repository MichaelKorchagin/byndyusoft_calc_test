import getCalc from "../request";
import * as assert from "assert";


// так как нет кода тестируемого приложения, я принял решение,
// что в оbъекте ответа всегда bудет два поля, одно из которых bудет "null".

describe('Calc. Positive scenes', function () {
    it('Should return correct calculation', function () {
        const first = Math.random() * 100;
        const second = Math.random() * 1000;
        const expectedResult = first * second;

        const requestResult = getCalc(first, second);
        assert.equal(requestResult.error, null);
        assert.equal(requestResult.answer, expectedResult);
    })
})