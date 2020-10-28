// 1. - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
    let greeting = "hello";
    console.log(greeting); alert(greeting); document.write(greeting);
    let owu = "owu";
    console.log(owu); alert(owu); document.write(owu);
    let comment = "com";
    console.log(comment); alert(comment); document.write(comment);
    let ukr = "ua";
    console.log(ukr); alert(ukr); document.write(ukr);
    let num = 1;
    console.log(num); alert(num); document.write(num);
    let number = 10;
    console.log(number); alert(number); document.write(number);
    let index = -999;
    console.log(index); alert(index); document.write(index);
    let digit = 123;
    console.log(digit); alert(digit); document.write(digit);
    let pi = 3.14;
    console.log(pi); alert(pi); document.write(pi);
    let fraction = 2.7;
    console.log(fraction); alert(fraction); document.write(fraction);
    let age = 16;
    console.log(age); alert(age); document.write(age);
    let boolean1 = true;
    console.log(boolean1); alert(boolean1); document.write(boolean1);
    let boolean2 = false;
    console.log(boolean2); alert(boolean2); document.write(boolean2);

// 2. - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
    greeting = "Hello World!";
    console.log(greeting); alert(greeting); document.write(greeting);
    owu = "OktenWebUniversity";
    console.log(owu); alert(owu); document.write(owu);
    comment = "comment";
    console.log(comment); alert(comment); document.write(comment);
    ukr = "Ukraine";
    console.log(ukr); alert(ukr); document.write(ukr);
    num = 100;
    console.log(num); alert(num); document.write(num);
    number = 99999;
    console.log(number); alert(number); document.write(number);
    index = -1;
    console.log(index); alert(index); document.write(index);
    digit = 321;
    console.log(digit); alert(digit); document.write(digit);
    pi = 3.141596;
    console.log(pi); alert(pi); document.write(pi);
    fraction = 17.77;
    console.log(fraction); alert(fraction); document.write(fraction);
    age = 34;
    console.log(age); alert(age); document.write(age);
    boolean1 = false;
    console.log(boolean1); alert(boolean1); document.write(boolean1);
    boolean2 = true;
    console.log(boolean2); alert(boolean2); document.write(boolean2);

// 3. - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
    const Pi = 3.1415;
    console.log(Pi); alert(Pi); document.write(Pi);
    const g = 9.8;
    console.log(g); alert(g); document.write(g);
    const c = 299792458;
    console.log(c); alert(c); document.write(c);
    const welcomeGreeting = 'Welcome!';
    console.log(welcomeGreeting); alert(welcomeGreeting); document.write(welcomeGreeting);
    const apple = "Яблуко";
    console.log(apple); alert(apple); document.write(apple);
    const A8 = 'Samsung Galaxy A8';
    console.log(A8); alert(A8); document.write(A8);

// 4. - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
    let lastName = prompt("Напишіть, будь-ласка, Ваше Прізвище");
    let Name = prompt("Напишіть,будь-ласка, Ваше Ім'я");
    let middleName = prompt("Напишіть, будь-ласка, як Вас По-Батькові");
    console.log(lastName); alert(lastName); document.write(lastName + '<br>');
    console.log(Name); alert(Name); document.write(Name + '<br>');
    console.log(middleName); alert(middleName); document.write(middleName + '<br>');

// 5. - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
    let person = lastName + ' ' + Name + ' ' + middleName ;
    console.log(person); alert(person); document.write(person + '<br>');

// 6. - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
    let MamLastName = prompt("Напишіть, будь-ласка, Прізвище вашої матері");
    let MamName = prompt("Напишіть,будь-ласка, Ім'я вашої матері ");
    let MamMiddleName = prompt("Напишіть, будь-ласка, По-Батькові вашої матері");
    let MamPerson = MamLastName + ' ' + MamName + ' ' + MamMiddleName;
    console.log(MamPerson); alert(MamPerson); document.write(MamPerson + '<br>');
    let DadLastName = prompt("Напишіть, будь-ласка, Прізвище вашого батька");
    let DadName = prompt("Напишіть,будь-ласка, Ім'я вашого батька ");
    let DadMiddleName = prompt("Напишіть, будь-ласка, По-Батькові вашого батька");
    let DadPerson = DadLastName + ' ' + DadName + ' ' + DadMiddleName;
    console.log(DadPerson); alert(DadPerson); document.write(DadPerson + '<br>');
    let BroLastName = prompt("Напишіть, будь-ласка, Прізвище вашого брата");
    let BroName = prompt("Напишіть,будь-ласка, Ім'я вашого брата");
    let BroMiddleName = prompt("Напишіть, будь-ласка, По-Батькові вашого брата");
    let BroPerson = BroLastName + ' ' + BroName + ' ' + BroMiddleName;
    console.log(BroPerson); alert(BroPerson); document.write(BroPerson + '<br>');
