

const futureValue = document.querySelector('#eventInitialCap');
const investment = document.querySelector('#eventAnnualAdd');
const years = document.querySelector('#eventYears');
const annualRate = document.querySelector('#eventInterestRate');
const buttonAdd = document.querySelector('#bAdd'); // saco la referencia "bAdd"
const result = document.querySelector('#result');


document.querySelector('form').addEventListener('submit', (e) => { // saco la referencia a mi "form" y luego con "addEventListener" le dijo que cuando haga click em submit, ejecute la siguiente funcion.

    e.preventDefault();

    let futureValue1 = parseInt(futureValue.value);
    let investment1 = parseInt(investment.value);
    let years1 = parseInt(years.value);
    let annualRate1 = parseInt(years.value);

    if (futureValue1.value === "" || investment1.value === "" || annualRate1 === "" || years1 === "") {
        return;
    }

    const monthlyRate = (annualRate1 / 100);

    for (i = 1; i <= years1; i++) {
        futureValue1 = ((futureValue1 + investment1) * (1 + monthlyRate)).toFixed(2);
    }
    result.innerHTML = `$ ${futureValue1}`;

});





