import axios from "axios";

const getCalc = (numerator, denominator) => {
    return axios
        .post(`http://sitename/calculate`, {
            "numerator": numerator,
            "denominator": denominator
        })
        .then((res) => {
            let parseRes = res;
            // определяем тип ответа стринг/не стринг
            if (typeof res === "string") {
                 parseRes = JSON.parse(res);
            }
            return parseRes
        })
        // проверка url и аргументов, а, также, непредвиденных ошиbок
        .catch((err) => console.log(err));
}

// TODO:

