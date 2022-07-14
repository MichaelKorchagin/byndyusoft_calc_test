import {getCalc} from "../request.js";
import * as assert from "assert";


// так как нет кода тестируемого приложения, я принял решение,
// что в оbъекте ответа всегда bудет два поля, одно из которых bудет "null".

describe('Calc. Positive scenes', function () {
    it('Should return correct calculation with integer type', function () {
        const prePreFirst = Math.random() * 100;
        const preFirst = Math.round(prePreFirst);
        const first = preFirst.toString();
        const prePreSecond = Math.random() * 1000;
        const preSecond = Math.round(prePreSecond);
        const second = preSecond.toString();
        const expectedResult = preFirst / preSecond;

        const requestResult = getCalc(first, second);
        assert.equal(requestResult.error, null);
        assert.equal(requestResult.answer, expectedResult);
    })

    it('Should return correct calculation with float type', function () {
        const preFirst = Math.random() * 100;
        const first = preFirst.toString();
        const preSecond = Math.random() * 10;
        const second = preSecond.toString();
        const expectedResult = preFirst / preSecond;

        const requestResult = getCalc(first, second);
        assert.equal(requestResult.error, null);
        assert.equal(requestResult.answer, expectedResult);
    })

    it('Should return correct calculation with high boundary value', function () {
        const first = '99999';
        const expectedResult = 1;

        const requestResult = getCalc(first, first);
        assert.equal(requestResult.error, null);
        assert.equal(requestResult.answer, expectedResult);
    })
})