document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const bannerImage = document.getElementById('banner-image');
        function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        const isDarkMode = document.documentElement.classList.contains('dark');
        const lightImageSrc = '/assets/images/banner-light.png';
        const darkImageSrc = '/assets/images/banner-dark.png';
        bannerImage.src = isDarkMode ? darkImageSrc : lightImageSrc;
        darkModeToggle.innerHTML = isDarkMode ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
            </svg>
        ` : `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
            </svg>
        `;
        
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
    darkModeToggle.addEventListener('click', toggleDarkMode);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        bannerImage.src = '/assets/images/banner-dark.png';
        darkModeToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
            </svg>
        `;
    }
});


let cities = [
    { arabicName: "أدرار", code: "DZ-01" },
    { arabicName: "الشلف", code: "DZ-02" },
    { arabicName: "الأغواط", code: "DZ-03" },
    { arabicName: "أم البواقي", code: "DZ-04" },
    { arabicName: "باتنة", code: "DZ-05" },
    { arabicName: "بجاية", code: "DZ-06" },
    { arabicName: "بسكرة", code: "DZ-07" },
    { arabicName: "بشار", code: "DZ-08" },
    { arabicName: "البليدة", code: "DZ-09" },
    { arabicName: "البويرة", code: "DZ-10" },
    { arabicName: "تامنغست", code: "DZ-11" },
    { arabicName: "تبسة", code: "DZ-12" },
    { arabicName: "تلمسان", code: "DZ-13" },
    { arabicName: "تيارت", code: "DZ-14" },
    { arabicName: "تيزي وزو", code: "DZ-15" },
    { arabicName: "الجزائر العاصمة", code: "DZ-16" },
    { arabicName: "الجلفة", code: "DZ-17" },
    { arabicName: "جيجل", code: "DZ-18" },
    { arabicName: "سطيف", code: "DZ-19" },
    { arabicName: "سعيدة", code: "DZ-20" },
    { arabicName: "سكيكدة", code: "DZ-21" },
    { arabicName: "سيدي بلعباس", code: "DZ-22" },
    { arabicName: "عنابة", code: "DZ-23" },
    { arabicName: "قالمة", code: "DZ-24" },
    { arabicName: "قسنطينة", code: "DZ-25" },
    { arabicName: "المدية", code: "DZ-26" },
    { arabicName: "مستغانم", code: "DZ-27" },
    { arabicName: "المسيلة", code: "DZ-28" },
    { arabicName: "معسكر", code: "DZ-29" },
    { arabicName: "ورقلة", code: "DZ-30" },
    { arabicName: "وهران", code: "DZ-31" },
    { arabicName: "البيض", code: "DZ-32" },
    { arabicName: "إليزي", code: "DZ-33" },
    { arabicName: "برج بوعريريج", code: "DZ-34" },
    { arabicName: "بومرداس", code: "DZ-35" },
    { arabicName: "الطارف", code: "DZ-36" },
    { arabicName: "تندوف", code: "DZ-37" },
    { arabicName: "تيسمسيلت", code: "DZ-38" },
    { arabicName: "وادي سوف", code: "DZ-39" },
    { arabicName: "خنشلة", code: "DZ-40" },
    { arabicName: "سوق أهراس", code: "DZ-41" },
    { arabicName: "تيبازة", code: "DZ-42" },
    { arabicName: "ميلة", code: "DZ-43" },
    { arabicName: "عين الدفلى", code: "DZ-44" },
    { arabicName: "النعامة", code: "DZ-45" },
    { arabicName: "عين تموشنت", code: "DZ-46" },
    { arabicName: "غرداية", code: "DZ-47" },
    { arabicName: "غليزان", code: "DZ-48" },
    { arabicName: "تيميمون", code: "DZ-49" },
    { arabicName: "برج باجي مختار", code: "DZ-50" },
    { arabicName: "أولاد جلال", code: "DZ-51" },
    { arabicName: "بني عباس", code: "DZ-52" },
    { arabicName: "عين صالح", code: "DZ-53" },
    { arabicName: "عين قزام", code: "DZ-54" },
    { arabicName: "تقرت", code: "DZ-55" },
    { arabicName: "جانت", code: "DZ-56" },
    { arabicName: "المغير", code: "DZ-57" },
    { arabicName: "المنيعة", code: "DZ-58" }
];

for (let wilaya of cities){
    document.getElementById("a-conainer").innerHTML += `
        <option>${wilaya.arabicName}</option>
    `
}
document.getElementById("wilaya-name").innerHTML = "أدرار";
document.getElementById("a-conainer").addEventListener("change",()=>{
    let CityCode = ""
    let CityName = ""
    for (let city of cities){
        if (city.arabicName == document.getElementById("a-conainer").value){
            CityCode = city.code
            CityName = city.arabicName
        }
    } 
    getPrayersTimingsofCity(CityCode)
    document.getElementById("wilaya-name").innerHTML = CityName;
})

function getPrayersTimingsofCity (cityName) {
    let params = {
        country : "DZ",
        city : cityName
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
    })
    .then(function (response) {
        const timings = response.data.data.timings
        fillTimeForPrayer("tawkit-alfajr",timings.Fajr)
        fillTimeForPrayer("tawkit-sunrise",timings.Sunrise)
        fillTimeForPrayer("tawkit-dhuhr",timings.Dhuhr)
        fillTimeForPrayer("tawkit-asr",timings.Asr)
        fillTimeForPrayer("tawkit-sunset",timings.Sunset)
        fillTimeForPrayer("tawkit-isha",timings.Isha)
    
    
        
        
        
        const weekDay = response.data.data.date.hijri.weekday.ar
        const month_in_hijri = response.data.data.date.hijri.month.ar;
        const year_hijri = response.data.data.date.hijri.year;
        const day_hijri = response.data.data.date.hijri.day;
        const tarikh_hijri = weekDay + " " +  day_hijri +  " " + month_in_hijri + " " + year_hijri;
        const tarikh_miladi =weekDay + " " + response.data.data.date.gregorian.date ;
        document.getElementById("tarikh-hijri").innerHTML = tarikh_hijri;
        document.getElementById("tarikh-miladi").innerHTML = tarikh_miladi;
        
        
    })
    .catch(function (error) {
        console.log(error);
    })
}

getPrayersTimingsofCity("DZ-01")

function fillTimeForPrayer (id,time){
    document.getElementById(id).innerHTML = time;
}



