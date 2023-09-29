// write code to send post request to https://detaforwarder-1-b3424134.deta.app/classes and print it and also send registration and password as payload to it
const classesDiv = document.querySelector('.classes');

function getClasses(registration,password){

    let headersList = {
        "Accept": "*/*",
        "Authorization": "Basic bWFuaTowNTAzMjAwNA==",
        "Content-Type": "application/json"
       }
    
       let bodyContent = JSON.stringify({
        "registration": registration,
        "password": password
    }
    );    
       
    fetch('https://detaforwarder-1-b3424134.deta.app/classes', {
        method: 'POST',
        body: bodyContent,
        headers:headersList
    })
    .then((response) => {
        
        return response.json();
    })
    .then(
        (responseData) => {
            if(responseData.data.length === 0){
                const classDiv = document.createElement('div');
                classDiv.classList.add('tdyclass', 'bg-indigo-100', 'm-1', 'rounded-lg text-center');
                
                const errorDiv = document.createElement('div');
                const errorSpan = document.createElement('span');
                errorDiv.classList.add('error','p-1');
                errorDiv.appendChild(errorSpan);
                errorSpan.innerText = "Unable to fetch Classes";
                classDiv.appendChild(errorDiv);
            }
            else{
            responseData.data.forEach((element) => {

                const classDiv = document.createElement('div');
                classDiv.classList.add('tdyclass', 'bg-indigo-100', 'm-1', 'rounded-lg');

                const timingDiv = document.createElement('div');
                const timingSpan = document.createElement('span');
                timingDiv.classList.add('timing','p-1', 'bg-indigo-600', 'rounded-t-lg', 'text-white');
                timingDiv.appendChild(timingSpan);
                timingSpan.innerText = element.timing;
                classDiv.appendChild(timingDiv);

                const courseCodeDiv = document.createElement('div');
                const courseSpan = document.createElement('span');
                courseCodeDiv.classList.add('course-code','p-1');
                courseCodeDiv.appendChild(courseSpan);
                courseSpan.innerText = element.course;
                classDiv.appendChild(courseCodeDiv);

                const classRoomDiv = document.createElement('div');
                const classSpan = document.createElement('span');
                classRoomDiv.classList.add('class-room','p-1');
                classRoomDiv.appendChild(classSpan);
                classSpan.innerText = element.platform;
                classDiv.appendChild(classRoomDiv);

                classesDiv.appendChild(classDiv);
            });
        }
        })
        .catch(error => console.error(error));
}
