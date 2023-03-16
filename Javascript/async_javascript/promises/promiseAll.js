const resolveIn = delay => new Promise(resolve => {
    setTimeout(() => resolve(delay), delay);
    });
    const p = Promise.all([resolveIn(100), resolveIn(300), resolveIn(500)])
    p.then(values =>{
    console.log(values); // [100, 300, 500]
    });