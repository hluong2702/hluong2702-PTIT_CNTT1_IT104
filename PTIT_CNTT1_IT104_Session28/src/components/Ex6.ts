type CallbackType = () => void;

const task1 = (callback: CallbackType): void => {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 1000);
};

const task2 = (callback: CallbackType): void => {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 1500);
};

const task3 = (callback: CallbackType): void => {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 2000);
};

const runTasksSequentially = (): void => {
    task1(() => {
        task2(() => {
            task3(() => {
                console.log("All tasks completed");
            });
        });
    });
};

runTasksSequentially();