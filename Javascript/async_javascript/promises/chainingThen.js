const promise = new Promise((resuelve, reject) => {
    resuelve(1);
    });
    promise
    .then(val => val + 1)
    .then(val => val + 1)
    .then(val => console.log(val)); // 3