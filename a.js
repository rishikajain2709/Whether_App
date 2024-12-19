const apiKey="337babc279dd4b39a10185655241912";
const apiBase = "http://api.weatherapi.com/v1/current.json"; // Correct endpoint for current weather

const text=document.querySelector('#city')
const button=document.querySelector("#search")
const a=document.querySelector('#weather-details')
const p=document.querySelector('#weather-details p')

button.addEventListener('click',function(){
    const value=text.value.trim();
    if(value==""){
        alert('enter a valid city name')
      return;
    }
    const apiUrl = `${apiBase}?key=${apiKey}&q=${value}`;
    console.log(apiUrl);
    
fetch(apiUrl)
.then(function(response){
    if(!response.ok)
        console.log("theres something wrong");
    console.log(response);
    
    return response.json();
        
})
.then(function(data){
    p.style.display="none"
    console.log(data); // Log the full response for debugging
   
            if (data && data.location && data.location.name && data.current) {
                a.innerHTML = `
                    <p>City ${data.location.name} temperature is ${data.current.temp_c}°C</p>
                    <p>Condition: ${data.current.condition.text}</p>
                    <p>Wind: ${data.current.wind_kph} kph</p>
                `;
            }
            else
            alert("hiee")
})
.catch(function(err){
    console.log(err);
    
})
    
})