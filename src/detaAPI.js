// write code to send post request to https://detaforwarder-1-b3424134.deta.app/classes and print it and also send registration and password as payload to it
const classesDiv = document.querySelector(".classes");

function getData(element) {
  const classDiv = document.createElement("div");
  classDiv.classList.add("tdyclass", "bg-indigo-100", "m-1", "rounded-lg");

  const timingDiv = document.createElement("div");
  const timingSpan = document.createElement("span");
  timingDiv.classList.add(
    "timing",
    "p-1",
    "bg-indigo-600",
    "rounded-t-lg",
    "text-white"
  );
  timingDiv.appendChild(timingSpan);
  timingSpan.innerText = element.timing;
  classDiv.appendChild(timingDiv);

  const courseCodeDiv = document.createElement("div");
  const courseSpan = document.createElement("span");
  courseCodeDiv.classList.add("course-code", "p-1");
  courseCodeDiv.appendChild(courseSpan);
  courseSpan.innerText = element.course;
  classDiv.appendChild(courseCodeDiv);

  const classRoomDiv = document.createElement("div");
  const classSpan = document.createElement("span");
  classRoomDiv.classList.add("class-room", "p-1");
  classRoomDiv.appendChild(classSpan);
  classSpan.innerText = element.platform;
  classDiv.appendChild(classRoomDiv);

  classesDiv.appendChild(classDiv);
}

function getClasses(registration, password) {
  let headersList = {
    Accept: "*/*",
    Authorization: "Basic bWFuaTowNTAzMjAwNA==",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    registration: registration,
    password: password,
  });

  fetch("https://detaforwarder-1-b3424134.deta.app/classes", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to fetch classes");
      }
      return response.json();
    })
    .then((responseData) => {
      localStorage.setItem("error", JSON.stringify(responseData));
      if (responseData.error) {
        var x = document.getElementById("errorClasses");
        x.classList.add("show");
        setTimeout(function () {
          x.classList.remove("show");
        }, 3000);
        return;
      }
      localStorage.setItem("classes", JSON.stringify(responseData.data));
      responseData.data.forEach((element) => {
        getData(element);
      });
    })
    .catch((error) => {
      var x = document.getElementById("errorClasses");
      x.classList.add("show");
      setTimeout(function () {
        x.classList.remove("show");
      }, 3000);
      console.log(error);
    });
}
