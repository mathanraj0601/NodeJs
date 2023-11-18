const mongoose =  require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exercise-1')
    .then(()=>console.log("Connected mongodb sucessfully"))
    .catch((err)=>console.error("Error in connecting with database",err));

const courseSchema = new mongoose.Schema({
    _id: String,
    name: String,
    author: String,
    tags: [ String ],
    isPublished: Boolean,
    price: Number,
    date: { type: Date, default: Date.now },

});

const Course = mongoose.model('Course',courseSchema);

async function createCourse()
{
    const course = new Course({
        name:"Mathan",
        author:"mayhan",
        tags:[],
        price:10,
        isPublished:true
    })

    course.save();
}

async function getAllCourse()
{
    const courses = await Course.find()
                            .sort({name:1});
    console.log(courses)
}

// exercise - 1
async function getAllbackendCourse(){
    const courses = await Course.find({isPublished:true ,tags:'backend'})
                                .sort({name:1})
                                .select({name:1 ,author:1})
    console.log(courses)
}


// exercise - 2
async function getAllBackAndFrontend(){
    const courses = await Course.find({isPublished:true })
                                .or([{tags:"backend"},{tags:"frontend"}])
                                .sort('-price')
                                .select({name:1,author:1,price:1})
    console.log(courses)

}

// excecise- 3
async function exercise3(){
const courses = await Course.find({isPublished:true})
                            .or([{price: {$gte: 15}},{name:/.*by.*/}])
    console.log(courses)
}

// exercise3();
// getAllBackAndFrontend();
// getAllbackendCourse();

async function updateCourse(id){
    // Query first
    const course= await Course.findById(id);
    if(!course) return;
    course.name = "Updated 3";
    course.set({
        name : "updated 5"
    });
    const result = await course.save();


    /*direct update - not working
    const course = Course.findByIdAndUpdate(id,{
        $set: {
            name : "updated"
        }
    })
    console.log(course)
    */
}

// updateCourse("5a68fdc3615eda645bc6bdec");

async function deleteCourse(id)
{
    const course = await Course.findByIdAndDelete(id);
    console.log(course);
}

deleteCourse("5a68fdc3615eda645bc6bdec");