data_obj = [

    // {
    //     "dp":"images/me.jpeg",
    //     "name": "Lakshya Sharma",
    //     "msg": "You:Hi there",
    //     "time": "11:00"
    // },
    {
        "dp":"images/Elon-Musk-2010.png",
        "name": "Elon musk",
        "msg": "Nice working with you",
        "time": "10:55"
    },
    {
        "dp":"images/aj.jpg",
        "name": "Arjit ",
        "msg": "Performance on sunday!!",
        "time": "09:30"
    },
    {
        "dp":"images/man.jpg",
        "name": "Vinod k",
        "msg": "Ram Ram ji",
        "time": "09:25"
    },
    {
        "dp":"images/man2.jpg",
        "name": "Krishna Sharma",
        "msg": "Okay bro kal milte h",
        "time": "10:00"
    },
    {
        "dp":"images/radika.jpg",
        "name": "Radhika ",
        "msg": "Hi ",
        "time": "09:30"
    },
    {
        "dp":"images/man.jpg",
        "name": "Vinod",
        "msg": "Ram Ram ji",
        "time": "09:25"
    },

    {
        "dp":"images/Elon-Musk-2010.png",
        "name": "Elon musk",
        "msg": "Nice working with you",
        "time": "10:55"
    },
    {
        "dp":"images/aj.jpg",
        "name": "Arjit ",
        "msg": "Performance on sunday!!",
        "time": "09:30"
    },
    {
        "dp":"images/man.jpg",
        "name": "Vinod k",
        "msg": "Ram Ram ji",
        "time": "09:25"
    },
    {
        "dp":"images/man2.jpg",
        "name": "Krishna Sharma",
        "msg": "Okay bro kal milte h",
        "time": "10:00"
    },
    {
        "dp":"images/radika.jpg",
        "name": "Radhika ",
        "msg": "Hi ",
        "time": "09:30"
    },
    {
        "dp":"images/man.jpg",
        "name": "Vinod",
        "msg": "Ram Ram ji",
        "time": "09:25"
    },
    {
        "dp":"images/Elon-Musk-2010.png",
        "name": "Elon musk",
        "msg": "Nice working with you",
        "time": "10:55"
    },
    {
        "dp":"images/aj.jpg",
        "name": "Arjit ",
        "msg": "Performance on sunday!!",
        "time": "09:30"
    },
    {
        "dp":"images/man.jpg",
        "name": "Vinod k",
        "msg": "Ram Ram ji",
        "time": "09:25"
    },
    {
        "dp":"images/man2.jpg",
        "name": "Krishna Sharma",
        "msg": "Okay bro kal milte h",
        "time": "10:00"
    },
    {
        "dp":"images/radika.jpg",
        "name": "Radhika ",
        "msg": "Hi ",
        "time": "09:30"
    },
    {
        "dp":"images/man.jpg",
        "name": "Vinod",
        "msg": "Ram Ram ji",
        "time": "09:25"
    },
    {
        "dp":"https://scontent.fbek1-3.fna.fbcdn.net/v/t1.6435-9/55564309_855145438168782_2575512847404498944_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uFwJrkPSuEsAX-v9_NX&_nc_ht=scontent.fbek1-3.fna&oh=00_AfCxupBaT5dTyDNca5iezUzXkhPS3ykN0RzvOGtrHJcrOA&oe=6613AAB3",
        "name": "Pranjal",
        "msg": "Homies",
        "time": "08:00"
    },
    {
        "dp":"images/man2.jpg",
        "name": "Karan Singh",
        "msg": "You : Happy Birthday !!!",
        "time": "06:49"
    }

]

data_obj.forEach(element => {
    console.log(element.name,element.msg,element.time);
    let parent = document.getElementById("contactlists");
    let child=document.createElement("div");
   child.innerHTML = `<div class="contact h-16 p-2 items-center justify-between flex bg-white shadow-md hover:bg-gray-200">
    <img class="h-12 ml-2 rounded-full" src="${element.dp   }" alt="profile">
    <div class="data w-[80%] flex justify-between">
        <div class="items-center">
            <div class="dp":"",
        "name">
                ${element.name}
            </div>
            <p class="message text-sm text-slate-500">
                ${element.msg}
            </p>
        </div>
        <div class="time text-sm text-slate-500">
            ${element.time}
        </div>
    </div>
</div>
<hr>`
    parent.appendChild(child);
});