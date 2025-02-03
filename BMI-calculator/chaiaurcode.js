const form =document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault();


  const height =parseInt(document.querySelector('#height').value);
  const weight =parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results')

  if(height ===''|| height<0 || isNaN(height)){
    results.innerHTML = `plz give valid value of height`
  }else if(weight ===''|| weight<0 || isNaN(weight)){
    results.innerHTML = `plz give valid value of weight`
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
      if(bmi<=19){
        results.innerHTML = `your weight is ${bmi} & you are underweight`
      }
       else if(bmi>=25){
        results.innerHTML =`your weight is ${bmi} & you are overweight`
      }
      else{
      results.innerHTML= `your weight is ${bmi} & you are Normalweight`
      }
  }
})
