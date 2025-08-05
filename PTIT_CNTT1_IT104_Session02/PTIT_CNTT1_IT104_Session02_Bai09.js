const getStudentSummary = (student) => {
    const { name, age, listSubject } = student;

    let total = 0;
    listSubject.forEach(subject => {
        total += subject.score;
    });

    const average = (total / listSubject.length).toFixed(2);

    let rank;
    if (average >= 8.5) {
        rank = "Hoc sinh gioi";
    } else if (average >= 7) {
        rank = "Hoc sinh kha";
    } else if (average >= 5) {
        rank = "Hoc sinh trung binh";
    } else {
        rank = "Hoc sinh yeu";
    }

    let bestSubject = listSubject[0].subject;
    let worstSubject = listSubject[0].subject;
    let maxScore = listSubject[0].score;
    let minScore = listSubject[0].score;

    listSubject.forEach(subject => {
        if (subject.score > maxScore) {
            maxScore = subject.score;
            bestSubject = subject.subject;
        }
        if (subject.score < minScore) {
            minScore = subject.score;
            worstSubject = subject.subject;
        }
    });

    return`${name} is ${age} years old. \nAverage score: ${average} -> ${rank} \nBest subject: ${bestSubject} (${maxScore}) \nWeakest subject: ${worstSubject} (${minScore})`;
};

const student = {
    name: "Dev",
    age: 20,
    listSubject: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "Physics", score: 6 },
        { subject: "Literature", score: 8.5 }
    ]
};
console.log(getStudentSummary(student));