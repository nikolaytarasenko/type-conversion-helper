window.onload = () => {
    const convertExpression = e => {
        const input = document.querySelector('.app__input');

        try {
            const result = eval(input.value);
            display(result, typeof result);
        } catch (e) {
            display('incorrect expression', '...');
        }
    };

    const display = (value, type) => {
        const resultValueOutput = document.querySelector('.result__value');
        const resultTypeOutput = document.querySelector('.result__type');

        if (value === null) {
            resultValueOutput.textContent = 'null';
            resultTypeOutput.textContent = type + '*';
        } else {
            resultValueOutput.textContent = value;
            resultTypeOutput.textContent = type;
        }
    };

    document.querySelector('.app__button').addEventListener('click', convertExpression);
};