//  Date 객체속 현재 날짜를 구하는 함수를 재정의
Date.prototype.toDateInputValue = function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
};
outcomeForm.datePicker.value = new Date().toDateInputValue();
incomeForm.datePicker.value = new Date().toDateInputValue();

showOutCome.addEventListener('click', function (e) {
    outcomeForm.classList.remove('hidden');
    incomeForm.classList.add('hidden');
});

showInCome.addEventListener('click', function (e) {
    incomeForm.classList.remove('hidden');
    outcomeForm.classList.add('hidden');
});

outcomeForm.outcomeRegist.addEventListener('click', function (e) {
    e.preventDefault();
    const postDate = outcomeForm.datePicker.value;
    const postCategory = outcomeForm.optOutCome.value;
    const postValue = outcomeForm.money.value;
    console.log(postDate, postCategory, postValue);
});

incomeForm.incomeRegist.addEventListener('click', function (e) {
    e.preventDefault();
    const postDate = incomeForm.datePicker.value;
    const postCategory = incomeForm.optInCome.value;
    const postValue = incomeForm.money.value;
    console.log(postDate, postCategory, postValue);
});
