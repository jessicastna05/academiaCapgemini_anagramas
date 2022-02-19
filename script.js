    function checkAnagram(){

        let value1 = document.getElementById("value1").value


        let value2 = document.getElementById("value2").value
        
        let newValue1 = Array.from(value1)
        newValue1.sort();
        

        let newValue2 = Array.from(value2)
        newValue2.sort();
        

        let isAnagram;

        for(i=0; i < newValue1.length; i++){
            if(newValue1[i] !== newValue2[i] || newValue1.length != newValue2.length){
                isAnagram = false
            } else{
                isAnagram = true
            }

        }
    
        if(isAnagram){

        
            alert("As palavras " + value1  + " e " + value2 + " são anagramas! ")
        } else{

            alert("As palavras " + value1  + " e " + value2 + " não são anagramas! ")
        }
    }




    