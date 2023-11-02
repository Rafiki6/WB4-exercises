let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

// When does the PROG200 course start?
// What is the title of the PROJ500 course?
function getCourseById(courses, id){
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].CourseId === id) {
            return courses[i]
        }

    }
    return undefined
}
console.log(getCourseById(courses,"PROJ500"))



// What are the titles of the courses that cost $50 or less?
function getTitleByCourse(courses,costLimit){
    const titleList = [];
    for(let i = 0; i < courses.length; i ++){
        if(Number(courses[i].Fee) <= costLimit){
            titleList.push(courses[i].Title)

        }

        }
        return titleList
    }
    console.log(getTitleByCourse(courses,"PROJ500"))

// What classes meet in "Classroom 1"?
function getCoursesByLocation(courses,locationName){
    const matches =[];
    for (let i = 0; i< courses.length;i++ ){
        if(courses[i].locationName == locationName){
            matches.push(courses[i])
        }
    }
    return matches;
}
const cheapTitles = getTitleByCourse(courses, 50)
console.log(cheapTitles)

// What classes meet in "Classroom 1"?
const matches = getCoursesByLocation(courses, "Classroom 1")
for (let i = 0; i < matches.length; i++) {
    console.log(matches[i].Title, matches[i].StartDate)
}