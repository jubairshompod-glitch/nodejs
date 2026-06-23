
const studentName=()=>{
    return "shompod"
};

const studentAge=()=>{
    return 20;
}


//এখানে আমরা দুইটা ফাংশন  তৈরি করলাম 


// exports.name =studentName;
// exports.age = studentAge;

//ফাংশন গুলো আমি  এক্সপোর্ট করলাম 


//এক্সপোর্ট করার আরেকটা পদ্ধতি। 

export default{
    studentAge,
    studentName,
}