const CourseDetails =async ({params} : {params :{slug : string}}) => {

    const {slug} = params;
    return(
        <div className="flex items-center justify-center text-3xl text-gray-500 w-full">
            {slug}
        </div>

    )
    
}

export default CourseDetails 