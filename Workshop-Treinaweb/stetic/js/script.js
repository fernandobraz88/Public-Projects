let TeacherForms = document.getElementsByClassName("teacher-contract")
for (let teacherform of TeacherForms){
    teacherform.addEventListener("submit", function(event){
        event.preventDefault()
        
        let price = teacherform.price.value
        let hours = teacherform.hours.value
        let total = price*hours
        
        alert("O valor total do contrato é de R$" +  total)

    })
}