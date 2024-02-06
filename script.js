const createProfile = document.getElementById("create-profile")
const inputProfile = document.getElementById("input-profile")
const profileName = document.getElementById("profile-Name")

const card = document.getElementById("card")
const formProfile = document.getElementById("formProfile")

formProfile.addEventListener("submit", (e) => {
    e.preventDefault()   

    if (!inputProfile.value.trim()) { alert("ESCIBEE") }
    else {  profileName.textContent = inputProfile.value }    
})