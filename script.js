
        function calculateBMI()
        {
            let w=document.getElementById("weight").value;
            let h=document.getElementById("Height").value;
            let bmi=w/((h/100)**2);
            bmi=bmi.toFixed(2);
            document.getElementById("result").innerHTML=`Your BMI is : ${bmi}`;
        }